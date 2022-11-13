import gsap from 'gsap';

// Effects
gsap.registerEffect({
  name: "fadeBorder",
  effect: (targets, config) => {
    return gsap.to(targets, {
      keyframes: { "0%": { opacity: 0 }, "100%": { opacity: config.opacity }, easeEach: 'easeInOut' },
      delay: config.delay,
      duration: config.duration
    });
  },
  defaults: { opacity: 0, duration: 5, delay: 0 },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "pulseButton",
  effect: (targets, config) => {
    return gsap.to(targets, {
      keyframes: { 
        "0%": { scale: 1 }, 
        "40%": { scale: 0.95 }, 
        "80%": { scale: 1.05 },
        "100%": { scale: 1 }, 
        easeEach: 'easeIn' 
      },
      repeat: -1,
      repeatDelay: 0.3,
      delay: config.delay,
      duration: config.duration
    });
  },
  defaults: { opacity: 0, duration: 0.3 },
  extendTimeline: true,
});

// | 0 0
// | 0.6 0.6
// | 1.2 0.6

gsap.registerEffect({
  name: "pulseBorder",
  effect: (targets, config) => {
    return gsap.to(targets, {
      startAt: {
        opacity: 1,
        zIndex: config.zIndex,
        width: '6rem',
        height: '6rem',
        background: 'linear-gradient(180deg, #FF6633 0%, #FF0E83 100%)'
      },
      width: '18rem',
      height: '18rem',
      opacity: 0,
      ease: "sibte.inOut",
      delay: config.delay,
      duration: config.duration,
      repeat: config.repeat,
      reversed: config.reversed
    });
  },
  defaults: { zIndex: 1, duration: 1.8, repeat: -1, reversed: false },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "pulseBorderOut",
  effect: (targets, config) => {
    return gsap.to(targets, {
      startAt: {
        zIndex: config.zIndex,
      },
      width: '6rem',
      height: '6rem',
      opacity: 0,
      ease: "sibte.inOut",
      delay: config.delay,
      duration: config.duration,
      repeat: config.repeat,
      reversed: config.reversed
    });
  },
  defaults: { zIndex: 1, duration: 1.8 },
  extendTimeline: true,
});



export default gsap;