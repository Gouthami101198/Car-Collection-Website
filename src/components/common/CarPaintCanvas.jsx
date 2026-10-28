import React from 'react';
import { getCarPaintShader } from '../../utils/carColorShader';

export default function CarPaintCanvas({
  car,
  activeColor,
  defaultColor,
  imageSrc,
  className = '',
  imgClassName = '',
  alt = '',
  showColorBadge = false,
  showSheen = true,
  loading = 'lazy'
}) {
  const baseColor = defaultColor || car?.colors?.[0];
  const currentColor = activeColor || baseColor;

  // Check if caller explicitly requested a specific gallery sub-view (front, side, rear, interior)
  // that is different from the main collection image
  const isCustomGalleryView = Boolean(imageSrc && car?.images?.main && imageSrc !== car.images.main);

  // If activeColor has its own dedicated photo, prioritize it for the primary view!
  const src = isCustomGalleryView
    ? imageSrc
    : (currentColor?.image || imageSrc || car?.images?.main);

  const hasDedicatedPhoto = Boolean(currentColor?.image && !isCustomGalleryView);
  const shader = getCarPaintShader(currentColor, baseColor);
  const isColorChanged = Boolean(currentColor && baseColor && (currentColor.name !== baseColor.name || currentColor.hex !== baseColor.hex));

  return (
    <div className={`relative overflow-hidden car-image-container ${className}`}>
      {/* Ambient Radial Aura Glow in Car's Paint Color */}
      <div 
        className="car-aura-glow transition-all duration-700 ease-out"
        style={{
          background: currentColor?.hex
            ? `radial-gradient(ellipse at center, ${currentColor.hex}66 0%, ${currentColor.hex}22 45%, transparent 70%)`
            : undefined
        }}
      />

      {/* Base Car Photo with Instant Color Swap & Fade Reveal Animation */}
      <img
        key={`${car?.id || 'car'}-${src}`}
        src={src}
        alt={alt || `${car?.name || 'Car'} - ${currentColor?.name || 'Finish'}`}
        className={`w-full h-full object-cover car-image-lux transition-all duration-700 ease-out animate-image-reveal ${imgClassName}`}
        style={(!hasDedicatedPhoto && shader.filter) ? { filter: shader.filter } : undefined}
        loading={loading}
      />

      {/* Dynamic Fallback Shading only when NO dedicated photo exists */}
      {isColorChanged && !hasDedicatedPhoto && (
        <>
          {/* Layer 1: Core Chroma & Pigment Infusion */}
          {shader.overlayStyle && (
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-10"
              style={shader.overlayStyle}
            />
          )}

          {/* Layer 2: Metallic Flake & Specular Highlights */}
          {shader.specularStyle && (
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-10"
              style={shader.specularStyle}
            />
          )}

          {/* Layer 3: Clearcoat Surface Gloss */}
          {shader.glossStyle && (
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-10"
              style={shader.glossStyle}
            />
          )}
        </>
      )}

      {/* Diagonal Glass Sheen Reflection Sweep */}
      {showSheen && <div className="car-image-sheen" />}

      {/* Bottom Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none z-10" />

      {/* Active Paint Color Tag Badge */}
      {showColorBadge && isColorChanged && (
        <div className="absolute top-11 left-3 px-2.5 py-1 rounded-lg bg-dark-950/90 backdrop-blur-md border border-gold-400/40 text-[10px] font-mono font-bold text-white flex items-center gap-1.5 shadow-xl animate-image-reveal z-20">
          <span 
            className="w-2.5 h-2.5 rounded-full border border-white/50 shadow-sm" 
            style={{ backgroundColor: currentColor?.hex }} 
          />
          <span className="truncate max-w-[140px]">{currentColor?.name}</span>
        </div>
      )}
    </div>
  );
}
