import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-landscape" />

      {/* Decorative SVG hills */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ minHeight: '200px' }}
        >
          <path
            fill="#FAFDF7"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Decorative dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-white/10 mb-8 animate-fadeIn">
          <span className="text-accent font-heading font-semibold text-sm tracking-wide">
            Projet UMBRELLA
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slideUp">
          Neutralité en matière de
          <br />
          <span className="text-gold">Dégradation des Terres</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-body max-w-2xl mx-auto mb-4 animate-slideUp" style={{ animationDelay: '0.15s' }}>
          Suivi et évaluation des indicateurs NDT au Bénin
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/60 font-body max-w-xl mx-auto mb-10 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          Un système de suivi intégré pour évaluer la dégradation
          des terres et atteindre la neutralité, en conformité avec les
          objectifs de la CNULD.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp"
          style={{ animationDelay: '0.45s' }}
        >
          <Button href="#mission" variant="accent" size="lg">
            Découvrir le projet
          </Button>
          <Button href="/indicateurs" variant="secondary" size="lg">
            Indicateurs NDT
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounceSlow">
        <ChevronDown className="w-8 h-8 text-white/40" />
      </div>
    </section>
  );
}
