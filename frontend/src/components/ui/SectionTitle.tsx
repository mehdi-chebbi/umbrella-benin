import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-brown'
        }`}
      >
        {title}
      </h2>
      {/* Gold decorative line */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-[2px] bg-accent/40" />
        <div className="w-12 h-[3px] bg-accent rounded-full" />
        <div className="w-8 h-[2px] bg-accent/40" />
      </div>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            light ? 'text-white/80' : 'text-brown-light'
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
