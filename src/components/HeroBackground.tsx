const HeroBackground = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 h-full w-full"
    preserveAspectRatio="none"
    viewBox="0 0 1200 620"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="hero-fade" cx="50%" cy="0%" r="80%">
        <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.10" />
        <stop offset="55%" stopColor="hsl(var(--foreground))" stopOpacity="0.04" />
        <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
      </radialGradient>
      <mask id="hero-mask">
        <rect x="0" y="0" width="1200" height="620" fill="url(#hero-fade)" />
      </mask>
    </defs>

    <g mask="url(#hero-mask)" stroke="hsl(var(--border))" strokeWidth="1" fill="none">
      {/* Faint axis/guide lines */}
      <line x1="0" y1="520" x2="1200" y2="520" strokeOpacity="0.5" />
      <line x1="0" y1="400" x2="1200" y2="400" strokeOpacity="0.35" />
      <line x1="0" y1="280" x2="1200" y2="280" strokeOpacity="0.25" />
      <line x1="0" y1="160" x2="1200" y2="160" strokeOpacity="0.15" />

      {/* Trend line 1 */}
      <polyline
        points="80,460 200,420 340,440 480,360 620,380 760,300 900,260 1040,200 1120,180"
        strokeOpacity="0.35"
      />

      {/* Trend line 2 */}
      <polyline
        points="60,500 220,460 380,470 540,410 700,420 860,350 1020,330 1140,280"
        strokeOpacity="0.25"
      />

      {/* Connecting network curves */}
      <path
        d="M120 300 C 260 260, 400 340, 540 280 S 820 220, 960 260"
        strokeOpacity="0.2"
      />
      <path
        d="M180 220 C 320 180, 460 260, 600 200 S 880 140, 1020 180"
        strokeOpacity="0.15"
      />
    </g>

    {/* Data nodes */}
    <g mask="url(#hero-mask)" fill="hsl(var(--muted-foreground))" fillOpacity="0.35">
      <circle cx="80" cy="460" r="3" />
      <circle cx="200" cy="420" r="3.5" />
      <circle cx="340" cy="440" r="3" />
      <circle cx="480" cy="360" r="4" />
      <circle cx="620" cy="380" r="3" />
      <circle cx="760" cy="300" r="4.5" />
      <circle cx="900" cy="260" r="3.5" />
      <circle cx="1040" cy="200" r="3" />
      <circle cx="1120" cy="180" r="2.5" />

      <circle cx="60" cy="500" r="2.5" />
      <circle cx="220" cy="460" r="3" />
      <circle cx="380" cy="470" r="2.5" />
      <circle cx="540" cy="410" r="3.5" />
      <circle cx="700" cy="420" r="3" />
      <circle cx="860" cy="350" r="4" />
      <circle cx="1020" cy="330" r="3" />
      <circle cx="1140" cy="280" r="2.5" />

      <circle cx="120" cy="300" r="3" />
      <circle cx="540" cy="280" r="3.5" />
      <circle cx="960" cy="260" r="3" />
      <circle cx="180" cy="220" r="2.5" />
      <circle cx="600" cy="200" r="3" />
      <circle cx="1020" cy="180" r="2.5" />
    </g>
  </svg>
);

export default HeroBackground;
