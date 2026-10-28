// Luxury Automotive Engine Sound Synthesizer via Web Audio API
// Generates realistic V8, V12, W16, Flat-6, and Hyper-Electric acoustic rev profiles

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playEngineRev(soundType = 'v8-turbo', duration = 2.4) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    
    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.15);
    masterGain.gain.setValueAtTime(0.35, now + duration * 0.6);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    masterGain.connect(ctx.destination);

    // Distortion / Drive Shaper for aggressive exhaust timbre
    const waveShaper = ctx.createWaveShaper();
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 256 - 1;
      curve[i] = ((3 + 20) * x * 20 * (Math.PI / 180)) / (Math.PI + 20 * Math.abs(x));
    }
    waveShaper.curve = curve;
    waveShaper.connect(masterGain);

    // Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';

    if (soundType === 'hyper-electric') {
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.exponentialRampToValueAtTime(4200, now + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(800, now + duration);
    } else {
      filter.frequency.setValueAtTime(350, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + duration * 0.45);
      filter.frequency.exponentialRampToValueAtTime(450, now + duration);
    }
    filter.connect(waveShaper);

    if (soundType === 'hyper-electric') {
      // High-pitched dual-sine whine
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.exponentialRampToValueAtTime(950, now + duration * 0.5);
      osc1.frequency.exponentialRampToValueAtTime(220, now + duration);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(240, now);
      osc2.frequency.exponentialRampToValueAtTime(1900, now + duration * 0.5);
      osc2.frequency.exponentialRampToValueAtTime(440, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
      return;
    }

    // ICE (Internal Combustion Engine) multi-cylinder simulation
    let baseFreq = 55; // Idle
    let peakFreq = 220; // 8,500 RPM

    if (soundType === 'v12-symphony') {
      baseFreq = 65;
      peakFreq = 290;
    } else if (soundType === 'flat6-screamer') {
      baseFreq = 60;
      peakFreq = 260;
    } else if (soundType === 'w16-rumble') {
      baseFreq = 45;
      peakFreq = 210;
    }

    // Cylinder firing oscillators
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(peakFreq, now + duration * 0.4);
    osc1.frequency.exponentialRampToValueAtTime(peakFreq * 0.85, now + duration * 0.6);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + duration);

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(peakFreq * 1.5, now + duration * 0.4);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + duration);

    // Sub-bass rumble
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(baseFreq * 0.5, now);
    subOsc.frequency.exponentialRampToValueAtTime(peakFreq * 0.5, now + duration * 0.4);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    subOsc.stop(now + duration);

    // Exhaust Overrun Pops / Crackles on decel
    const popDelay = now + duration * 0.65;
    const numPops = Math.floor(Math.random() * 3) + 2;
    for (let p = 0; p < numPops; p++) {
      const popTime = popDelay + p * 0.12 + Math.random() * 0.05;
      const popOsc = ctx.createOscillator();
      popOsc.type = 'square';
      popOsc.frequency.setValueAtTime(140 + Math.random() * 60, popTime);
      popOsc.frequency.exponentialRampToValueAtTime(30, popTime + 0.04);

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.2, popTime);
      popGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.05);

      popOsc.connect(popGain);
      popGain.connect(masterGain);

      popOsc.start(popTime);
      popOsc.stop(popTime + 0.05);
    }

  } catch (err) {
    console.warn('Audio rev synthesis:', err);
  }
}
