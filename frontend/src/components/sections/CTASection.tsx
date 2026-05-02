import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Accédez à l’Espace
            <br />
            d’Administration
          </h2>
          <p className="text-lg text-white/80 font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Connectez-vous pour accéder au tableau de bord de gestion du
            projet, consulter les données et générer les rapports NDT.
          </p>
          <Button href="/admin" size="lg" className="bg-white text-primary hover:bg-ivory hover:shadow-lg group">
            Se Connecter
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
