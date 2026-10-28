// Utility for authentic dynamic automotive paint grading & color transformations

export function hexToHsl(hex) {
  if (!hex || hex === 'none') return { h: 0, s: 0, l: 50 };
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function getCarPaintShader(activeColor, defaultColor) {
  if (!activeColor) {
    return { isChanged: false, filter: undefined };
  }

  // If the active color is the original factory default color (or first color), render unmodified
  const isDefault = defaultColor && (activeColor.name === defaultColor.name || activeColor.hex === defaultColor.hex);
  if (isDefault) {
    return {
      isChanged: false,
      filter: undefined,
      overlayStyle: null,
      specularStyle: null,
      glossStyle: null,
      colorName: activeColor.name,
      colorHex: activeColor.hex,
    };
  }

  const { h, s, l } = hexToHsl(activeColor.hex);
  const isWhite = s < 25 && l > 68;
  const isBlack = l < 18;
  const isYellowOrGold = h >= 40 && h <= 68;
  const isRed = (h >= 345 || h <= 18);
  const isGreen = h >= 75 && h <= 165;
  const isBlue = h >= 180 && h <= 250;
  const isOrange = h > 18 && h < 40;
  const isPink = h > 300 && h < 345;

  let filter = 'saturate(1.3) contrast(1.1)';
  if (isWhite) {
    filter = 'grayscale(0.9) brightness(1.35) contrast(1.22)';
  } else if (isBlack) {
    filter = 'grayscale(0.8) brightness(0.62) contrast(1.4)';
  } else if (isYellowOrGold) {
    filter = 'brightness(1.18) contrast(1.14) saturate(1.5)';
  } else if (isRed) {
    filter = 'brightness(1.06) contrast(1.2) saturate(1.45)';
  } else if (isGreen) {
    filter = 'brightness(0.98) contrast(1.15) saturate(1.38)';
  } else if (isBlue) {
    filter = 'brightness(1.05) contrast(1.15) saturate(1.42)';
  } else if (isOrange) {
    filter = 'brightness(1.12) contrast(1.18) saturate(1.48)';
  } else if (isPink) {
    filter = 'brightness(1.14) contrast(1.1) saturate(1.4)';
  }

  // Layer 1: Core Chroma & Pigment Layer (Radial to focus on body and preserve rims/shadows)
  const overlayStyle = {
    background: isWhite
      ? 'radial-gradient(ellipse 82% 70% at 50% 52%, rgba(255, 255, 255, 0.75) 0%, rgba(240, 244, 248, 0.55) 45%, transparent 92%)'
      : isBlack
        ? 'radial-gradient(ellipse 82% 70% at 50% 52%, rgba(12, 12, 16, 0.88) 0%, rgba(20, 20, 26, 0.72) 45%, transparent 92%)'
        : `radial-gradient(ellipse 82% 70% at 50% 52%, ${activeColor.hex}FA 0%, ${activeColor.hex}E6 35%, ${activeColor.hex}99 65%, ${activeColor.hex}33 85%, transparent 100%)`,
    mixBlendMode: isWhite ? 'color-burn' : isBlack ? 'multiply' : 'color',
    opacity: isWhite ? 0.75 : isBlack ? 0.9 : 0.88,
  };

  // Layer 2: Metallic Flake & Highlight Reflection Layer
  const specularStyle = {
    background: isWhite
      ? 'radial-gradient(ellipse 70% 52% at 50% 46%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 55%, transparent 88%)'
      : isBlack
        ? 'radial-gradient(ellipse 70% 52% at 50% 46%, rgba(255, 255, 255, 0.15) 0%, transparent 75%)'
        : `radial-gradient(ellipse 70% 52% at 50% 46%, ${activeColor.hex}CC 0%, ${activeColor.hex}66 50%, transparent 85%)`,
    mixBlendMode: isBlack ? 'color' : isWhite ? 'screen' : isYellowOrGold ? 'color-dodge' : 'soft-light',
    opacity: isWhite ? 0.7 : isYellowOrGold ? 0.65 : 0.72,
  };

  // Layer 3: High-Gloss Clearcoat Tint
  const glossStyle = {
    backgroundColor: activeColor.hex,
    mixBlendMode: 'hue',
    opacity: isWhite || isBlack ? 0.35 : 0.9,
  };

  return {
    isChanged: true,
    filter,
    overlayStyle,
    specularStyle,
    glossStyle,
    colorName: activeColor.name,
    colorHex: activeColor.hex,
    priceDelta: activeColor.price || 0,
  };
}
