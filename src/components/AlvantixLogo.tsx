import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * High-Fidelity Alvantix Circular Icon Logo
 * Depicts connected network nodes forming a digital 'C' perimeter with a central microprocessor chip enclosing 'AI'.
 */
export function AlvantixLogo({ className = "", size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Core background tech gradient */}
        <linearGradient id="blueGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0426d9" />
          <stop offset="50%" stopColor="#0214a8" />
          <stop offset="100%" stopColor="#010a61" />
        </linearGradient>

        {/* Glow and light effects */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Sapphire Blue Outer Circle */}
      <circle cx="100" cy="100" r="95" fill="url(#blueGrad)" stroke="#1d4ed8" strokeWidth="2" />

      {/* === UPPER SEMI-CIRCLE NETWORK NODES (LIGHT BLUE) === */}
      <g stroke="#3b82f6" strokeWidth="2" opacity="0.85">
        <line x1="35" y1="95" x2="50" y2="55" />
        <line x1="50" y1="55" x2="80" y2="35" />
        <line x1="80" y1="35" x2="120" y2="35" />
        <line x1="120" y1="35" x2="155" y2="55" />
        <line x1="155" y1="55" x2="170" y2="90" />
        
        {/* Secondary diagnostic connections */}
        <line x1="50" y1="55" x2="90" y2="65" />
        <line x1="80" y1="35" x2="90" y2="65" />
        <line x1="120" y1="35" x2="140" y2="70" />
        <line x1="140" y1="70" x2="170" y2="90" />
      </g>

      {/* Nodes for upper network */}
      <circle cx="35" cy="95" r="5" fill="#3b82f6" />
      <circle cx="50" cy="55" r="5" fill="#60a5fa" />
      <circle cx="80" cy="35" r="6" fill="#3b82f6" />
      <circle cx="120" cy="35" r="5" fill="#60a5fa" />
      <circle cx="155" cy="55" r="6" fill="#3b82f6" />
      <circle cx="170" cy="90" r="5" fill="#60a5fa" />
      <circle cx="90" cy="65" r="4.5" fill="#93c5fd" />
      <circle cx="140" cy="70" r="4" fill="#93c5fd" />

      {/* === LOWER SEMI-CIRCLE NETWORK NODES (WHITE) === */}
      <g stroke="#ffffff" strokeWidth="2" opacity="0.9">
        <line x1="38" y1="120" x2="60" y2="150" />
        <line x1="60" y1="150" x2="90" y2="170" />
        <line x1="90" y1="170" x2="115" y2="140" />
        <line x1="115" y1="140" x2="145" y2="165" />
        <line x1="145" y1="165" x2="168" y2="135" />
        
        {/* Secondary helper lines */}
        <line x1="38" y1="120" x2="90" y2="130" strokeOpacity="0.5" />
        <line x1="90" y1="130" x2="90" y2="170" strokeOpacity="0.5" />
      </g>

      {/* Nodes for lower network */}
      <circle cx="38" cy="120" r="5.5" fill="#ffffff" />
      <circle cx="60" cy="150" r="10" fill="#ffffff" />
      <circle cx="90" cy="170" r="5.5" fill="#ffffff" />
      <circle cx="115" cy="140" r="6.5" fill="#ffffff" />
      <circle cx="145" cy="165" r="9" fill="#ffffff" />
      <circle cx="168" cy="135" r="6" fill="#ffffff" />
      <circle cx="90" cy="130" r="4" fill="#cbd5e1" />

      {/* === CENTRAL MICROCHIP (12 PINS + CHIP BODY) === */}
      {/* 4 Pin Tracks on Top */}
      <line x1="92" y1="72" x2="92" y2="82" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="100" y1="72" x2="100" y2="82" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="108" y1="72" x2="108" y2="82" stroke="#60a5fa" strokeWidth="2.5" />

      {/* 4 Pin Tracks on Bottom */}
      <line x1="92" y1="118" x2="92" y2="128" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="100" y1="118" x2="100" y2="128" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="108" y1="118" x2="108" y2="128" stroke="#60a5fa" strokeWidth="2.5" />

      {/* 4 Pin Tracks on Left */}
      <line x1="72" y1="92" x2="82" y2="92" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="72" y1="100" x2="82" y2="100" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="72" y1="108" x2="82" y2="108" stroke="#60a5fa" strokeWidth="2.5" />

      {/* 4 Pin Tracks on Right */}
      <line x1="118" y1="92" x2="128" y2="92" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="118" y1="100" x2="128" y2="100" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="118" y1="108" x2="128" y2="108" stroke="#60a5fa" strokeWidth="2.5" />

      {/* Chip Base Rect */}
      <rect
        x="82"
        y="82"
        width="36"
        height="36"
        rx="6"
        fill="#051ca6"
        stroke="#60a5fa"
        strokeWidth="3.5"
        filter="url(#glow)"
      />

      {/* Stylized electronic 'A' inside the chip */}
      <path
        d="M93 110 L98 94 L103 110"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="95"
        y1="104"
        x2="101"
        y2="104"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Electronic lines next to 'A' representing AI / circuit board */}
      <line x1="107" y1="94" x2="111" y2="94" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
      <line x1="107" y1="100" x2="111" y2="100" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="106" x2="111" y2="106" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

interface TextLogoProps {
  className?: string;
  light?: boolean;
}

/**
 * High-Fidelity Alvantix Typographic Text Logo
 * Renders 'ALVA' in tech blue and 'NTIX' in black/slate (or white if light variant is true)
 */
export function AlvantixTextLogo({ className = "", light = false }: TextLogoProps) {
  return (
    <span className={`font-sans font-black tracking-widest text-2xl uppercase ${className}`}>
      <span className="text-blue-600 transition-colors duration-350">ALVA</span>
      <span className={light ? "text-white transition-colors duration-350" : "text-slate-900 transition-colors duration-350"}>NTIX</span>
    </span>
  );
}
