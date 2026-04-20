import { Eye, BarChart3, FileText, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const pillars = [
  {
    icon: Eye,
    title: 'Surveillance',
    description:
      'Suivi continu de l\u2019état de dégradation des terres à travers des indicateurs clés et des outils de télédétection.',
  },
  {
    icon: BarChart3,
    title: 'Évaluation',
    description:
      'Analyse et évaluation quantitative des indicateurs de Neutralité en matière de Dégradation des Terres (NDT).',
  },
  {
    icon: FileText,
    title: 'Rapportage',
    description:
      'Production de rapports périodiques conformes aux exigences de la Convention des Nations Unies sur la lutte contre la désertification.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Mobilisation et coordination des parties prenantes nationales et internationales pour une gestion durable des terres.',
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Notre Mission"
          subtitle="Le Projet UMBRELLA vise à établir un système robuste de suivi et d\u2019évaluation de la dégradation des terres au Bénin, contribuant ainsi à l\u2019atteinte de la neutralité."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={index * 120}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 card-lift h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-brown mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brown-light text-sm leading-relaxed">
                    {pillar.description}
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
