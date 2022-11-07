import React, { Component, createRef } from 'react'
import gsap from 'src/lib/plugins/gsap';

import ButtonListen from '../components/Button/Listen';
import ButtonB from 'components/B/index.tsx';

interface AppProps { }
interface AppState { }

import Head from 'next/head'

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default class Page extends Component<AppProps, AppState> {
  private myRef = createRef<HTMLDivElement>();
  private isMatched = false;
  private tl = null;
  private tlReverse = null;

  constructor(props) {
    super(props);
    this.ctx = null;
  }

  onAnimateBordes() {
    const node = this.myRef.current?.querySelectorAll('div');

    gsap.effects.fadeBorder(node[0], { opacity: 0.4, delay: 0 });
    gsap.effects.fadeBorder(node[1], { opacity: 0.2, delay: 0.6 });
    gsap.effects.fadeBorder(node[2], { opacity: 0.1, delay: 1.2 });

    // gsap.effects.fade3(node[0], { zIndex: 3, delay: 0 });
    // gsap.effects.fade3(node[1], { zIndex: 3, delay: 0.6 });
    // gsap.effects.fade3(node[2], { zIndex: 3, delay: 1.2 });

    // tl.fadeBorders(node[0], { zIndex: 2, delay: 0.6 }, 'start');
    // tl.fadeBorders(node[1], { zIndex: 1, delay: 1.2 }, 'start');
  }

  onAnimatePulseBorder() {
    const node = this.myRef.current?.querySelectorAll('div');

    // Kill Animation
    node?.forEach(el => gsap.killTweensOf(el))

    const onUpdate = function () {
      console.log(this.progress(), 555,)
    }

    // Active Pulse Border
    this.tl = gsap.timeline({});
    this.tl.addLabel('start', '>=0');
    this.tl.pulseBorder(node[0], { zIndex: 3, delay: 0 }, 'start');
    this.tl.pulseBorder(node[1], { zIndex: 3, delay: 0.6 }, 'start');
    this.tl.pulseBorder(node[2], { zIndex: 3, delay: 1.2 }, 'start');

    //
    const expectedMatch = getRandomInt(5) * 1000;


    setTimeout(() => {
      // this.tl.pause();
      console.log()
    }, 5000);
  }

  onClick() {
    const node = this.myRef.current?.querySelectorAll('div');
    const children = this.tl.getChildren();

    this.tlReverse = gsap.timeline({  });
    this.tlReverse.addLabel('start', '>=0');

    children.forEach((el, index) => {
      if (el.progress() >= 0.50) el.repeat(0);
      else {
        gsap.killTweensOf(el.targets()[0])
        const timeline = el.time();
        this.tlReverse.pulseBorderOut(el.targets()[0], { zIndex: index, duration: el.time() }, 'start');
      }
    });

  }

  onEndAnimatePulseBorder() {
    const node = this.myRef.current?.querySelectorAll('div');
  }

  componentDidMount() {
    this.onAnimateBordes();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Find Your Music</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <div style={{ position: "absolute", zIndex: "0", top: "50%", left: "50%", width: "16rem", height: "16rem", transform: "translate(-50%, -50%)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ButtonListen onClick={() => this.onAnimatePulseBorder()} />
          <div ref={this.myRef}>
            <ButtonB width="192" height="192" delay="0.4" opacity="0.8" />
            <ButtonB width="288" height="288" delay="0.4" opacity="0.6" />
            <ButtonB width="288" height="288" delay="0.4" opacity="0.6" />
          </div>

          <button onClick={() => this.onClick()} style={{ position: 'absolute', zIndex: 999 }} >123</button>
        </div>
      </div>
    )
  }
}