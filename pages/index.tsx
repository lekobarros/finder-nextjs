import React, { Component, createRef } from 'react';
import Head from 'next/head'
import { withRouter, NextRouter } from 'next/router'
import Router, { useRouter } from 'next/router'

import GSDevTools from 'src/lib/GSDevTools';


import gsap from 'src/lib/plugins/gsap';
import { getRandomInt } from 'src/utils';

gsap.registerPlugin(GSDevTools)

import $_api from 'src/api';

interface AppProps {
}

type AppState = {
  isListeling: boolean,
  isMatched: boolean,
  tlOutside: GSAPTimeline,
  tl: GSAPTimeline,
  tlReverse: GSAPTimeline
}

import ButtonListen from 'components/Button/Listen';
import PulseBorder from 'components/PulseBorder';
import WrapSection from 'components/WrapSections';

import ListenTrack from 'components/Listen/ListenTrack';

export default class Page extends Component<AppProps> {
  private outsideBorders = createRef<HTMLDivElement>();
  private myRef = createRef<HTMLDivElement>();
  private btnListen = createRef<HTMLDivElement>();
  private listenTrackMatched = createRef<HTMLDivElement>();

  state: AppState = {
    isListeling: false,
    isMatched: false,
    tlOutside: gsap.timeline({ paused: !0 }),
    tl: gsap.timeline({ paused: !0, id: 'gsap-ok' }),
    tlReverse: gsap.timeline({ paused: !0 })
  }

  // Methods
  onAnimateBordes() {
    const listenTrackMatched: HTMLElement = this.listenTrackMatched.current as unknown as HTMLElement;
    const outsideBorders: HTMLElement[] = this.outsideBorders.current?.querySelectorAll('div') as unknown as HTMLElement[];

    gsap.set(listenTrackMatched, { opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
    gsap.set(outsideBorders, { opacity: 0 });

    this.state.tlOutside.addLabel('start', '>=0');
    this.state.tlOutside.fadeOutsideBorder(outsideBorders[0], { opacity: 0.2, delay: 0 }, 'start');
    this.state.tlOutside.fadeOutsideBorder(outsideBorders[1], { opacity: 0.1, delay: 0.6 }, 'start');
    this.state.tlOutside.fadeOutsideBorder(outsideBorders[2], { opacity: 0.05, delay: 1.2 }, 'start');
    this.state.tlOutside.play();
  }

  onAnimatePulseBorder() {
    const btnListen: HTMLElement = this.btnListen.current as unknown as HTMLElement;
    const outsideBorders: HTMLElement[] = this.outsideBorders.current?.querySelectorAll('div') as unknown as HTMLElement[];
    const insideBorders: HTMLElement[] = this.myRef.current?.querySelectorAll('div') as unknown as HTMLElement[];

    // Kill Animation
    const tlOutside: GSAPTimeline = this.state.tlOutside;
    const tlOutsideisActive: boolean = tlOutside.isActive();

    // Hidden outsideBorders[]
    if (tlOutsideisActive) {
      tlOutside.eventCallback('onComplete', (): void => {
        gsap.to(outsideBorders, { opacity: 0, duration: 1.2, stagger: 0.6 });
      });
    } else gsap.to(outsideBorders, { opacity: 0, duration: 1.2, delay: 0.6, stagger: 0.6 });

    // Active Pulse Border
    this.state.tl.addLabel('start', '>=0');
    this.state.tl.pulseButton(btnListen, { delay: 0 });
    this.state.tl.pulseBorder(insideBorders[0], { zIndex: 3, duration: 2.5, delay: 0 }, 'start');
    this.state.tl.pulseBorder(insideBorders[1], { zIndex: 3, duration: 2.5, delay: 0.5 }, 'start');
    this.state.tl.pulseBorder(insideBorders[2], { zIndex: 3, duration: 2.5, delay: 1 }, 'start');
    this.state.tl.pulseBorder(insideBorders[3], { zIndex: 4, duration: 2.5, delay: 1.5 }, 'start');
    this.state.tl.pulseBorder(insideBorders[4], { zIndex: 5, duration: 2.5, delay: 2 }, 'start');
    this.state.tl.play();
  }

  onReverseAnimatePulseBorder() {
    return new Promise<void>((resolve, reject) => {
      const listenTrackMatched: HTMLElement = this.listenTrackMatched.current as unknown as HTMLElement;
      const children = this.state.tl.getChildren();

      this.state.tlReverse.addLabel('start', '>=0');
      // Control the progress from tl animation
      // When children.progress is more .50 finish the animation
      // When is less .80 reverse the animation
      children.forEach((el, index) => {
        if (index == 0) el.repeat(0);
        else if (el.progress() >= 0.70) el.repeat(0);
        else {
          gsap.killTweensOf(el.targets()[0]);
          this.state.tlReverse.pulseBorderOut(el.targets()[0], { zIndex: index, duration: el.time() }, 'start');
        }
      });

      // Update State with isMatched and call listenTrackMatched
      this.state.tlReverse.eventCallback('onUpdate', (): void => {
        const tl = this.state.tlReverse;
        const progress = tl.progress();
        if (!this.state.isMatched && progress >= 0.25) {
          const remainsDuration = (tl.duration() - tl.time()) * 0.5;
          this.setState({ isMatched: true }, () => {
            return gsap.to(listenTrackMatched, { y: '-1rem', opacity: 1, visibility: 'visible', ease: "sibte.inOut", duration: remainsDuration });
          });
        }
      });
      this.state.tlReverse.eventCallback('onComplete', (): void => resolve());
      this.state.tlReverse.play();
    })
  }

  // 
  async doInitFetchTrack() {
    try {
      this.onAnimatePulseBorder();

      // Get Chart Tracks
      const params = { page: 1, country: 'BR', page_size: 10 };
      const { data } = await $_api.chart.chartTracks.getChartTracks(params);

      const { message: { body: { track_list } } } = data;
      const randomTrack = Math.floor(Math.random() * track_list.length);
      const { track } = track_list[randomTrack];

      // commit on store
      console.log(track)


    }
    catch (err) {
      console.log(err)
    }



    // this.setState({ isListeling: true });

    // Fetch Track
    // const timeToFetch = getRandomInt(5) * 1000;
    // setTimeout(() => this.onFetchTrack(), 3000);
  }


  async onFetchTrack() {
    try {
      const listenTrackMatched: HTMLElement = this.listenTrackMatched.current as unknown as HTMLElement;
      const waves: HTMLElement[] = this.myRef.current?.querySelectorAll('div') as unknown as HTMLElement[];

      await this.onReverseAnimatePulseBorder();

      const id = 1;
      // Router.push({ pathname: `/track/${id}` });

      gsap.set(listenTrackMatched, { clearProps: 'all' });
      gsap.set(waves, { clearProps: 'all' });
      this.setState({ isMatched: false });

      // Reset Timelines
      this.setState({
        tl: gsap.timeline({ paused: !0 }),
        tlReverse: gsap.timeline({ paused: !0 }),
        isListeling: false
      }, () => this.onAnimateBordes())
    }
    catch (err) {
      console.log(err);
    }
  }

  // Hooks
  componentDidMount() {
    this.onAnimateBordes();

    // GSDevTools.create({ });
    // this.onAnimatePulseBorder();
  }

  // View
  render() {
    return <>
      <Head>
        <title>Find Your Music — Finder</title>
      </Head>

      <WrapSection>
        <ButtonListen onClick={() => this.doInitFetchTrack()} ref={this.btnListen} disabled={this.state.isListeling} isMatch={this.state.isMatched} />

        <div ref={this.outsideBorders}>
          <PulseBorder width={192} height={192} />
          <PulseBorder width={288} height={288} />
          <PulseBorder width={384} height={384} />
        </div>

        {/* Borders with Effect Pulse In/Out */}
        <div ref={this.myRef}>
          <PulseBorder width={192} height={192} opacity={1} />
          <PulseBorder width={288} height={288} opacity={0.6} />
          <PulseBorder width={288} height={288} opacity={0.4} />
          <PulseBorder width={288} height={288} />
          <PulseBorder width={288} height={288} />
        </div>

        <ListenTrack ref={this.listenTrackMatched} artistName='Foxes' musicName='Echo' />
      </WrapSection>
    </>
  }
}
