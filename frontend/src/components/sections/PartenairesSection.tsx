import { Shield, Landmark, Globe2, Building2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const partenaires = [
  {
    icon: Shield,
    name: 'OSS',
    fullName: 'Observatoire du Sahara et du Sahel',
    description: 'Appui technique et suivi du projet',
  },
  {
    icon: Landmark,
    name: 'FEM/GEF',
    fullName: 'Fonds pour l\u2019Environnement Mondial',
    description: 'Financement du projet',
  },
  {
    icon: Globe2,
    name: 'PNUE/UNEP',
    fullName: 'Programme des Nations Unies pour l\u2019Environnement',
    description: 'Mise en œuvre du projet',
  },
  {
    icon: Building2,
    name: 'Ministère de l\u2019Environnement',
    fullName: 'République du Bénin',
    description: 'Partenaire national',
  },
];

export default function PartenairesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos Partenaires"
          subtitle="Le Projet UMBRELLA est mis en œuvre grâce à la collaboration de partenaires internationaux et nationaux."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {partenaires.map((p, index) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.name} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 card-lift h-full group hover:bg-white/15 transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-bold text-lg text-white mb-1">
                    {p.name}
                  </h3>

                  {/* Full name */}
                  <p className="text-white/50 text-xs font-medium mb-3">
                    {p.fullName}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
