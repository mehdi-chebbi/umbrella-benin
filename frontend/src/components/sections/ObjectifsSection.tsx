import {
  TreePine,
  Heart,
  CloudSun,
  Globe,
  Banknote,
  Target,
  Settings,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const objectifs = [
  {
    number: '01',
    icon: TreePine,
    title: 'Améliorer les écosystèmes',
    description:
      'Préserver et restaurer les écosystèmes terrestres pour maintenir les services écologiques essentiels.',
  },
  {
    number: '02',
    icon: Heart,
    title: 'Améliorer les conditions de vie',
    description:
      "Contribuer à l\u2019amélioration des conditions de vie des populations affectées par la dégradation des terres.",
  },
  {
    number: '03',
    icon: CloudSun,
    title: 'Atténuation de la sécheresse',
    description:
      'Renforcer la résilience face à la sécheresse et aux effets des changements climatiques sur les terres.',
  },
  {
    number: '04',
    icon: Globe,
    title: 'Avantages environnementaux',
    description:
      'Générer des avantages environnementaux globaux par la gestion durable des terres.',
  },
  {
    number: '05',
    icon: Banknote,
    title: 'Mobilisation des ressources',
    description:
      'Mobiliser des ressources financières adéquates pour la mise en œuvre des programmes de lutte contre la dégradation.',
  },
  {
    number: '06',
    icon: Target,
    title: 'Cibles volontaires',
    description:
      "Établir des cibles volontaires de neutralité en matière de dégradation des terres conformément à la CNULD.",
  },
  {
    number: '07',
    icon: Settings,
    title: 'Cadre de mise en œuvre',
    description:
      'Développer un cadre institutionnel et technique solide pour la mise en œuvre efficace du projet.',
  },
];

export default function ObjectifsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Les 7 Objectifs Stratégiques de l\u2019UNCCD"
          subtitle="La Convention des Nations Unies sur la lutte contre la désertification définit 7 objectifs stratégiques pour la période 2018-2030."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {objectifs.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <ScrollReveal key={obj.number} delay={index * 80}>
                <div className="bg-ivory rounded-2xl p-6 border border-border/40 card-lift h-full group">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-heading font-bold text-accent/60 tracking-wider">
                      OBJECTIF {obj.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-base text-brown mb-2 leading-snug">
                    {obj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brown-light text-sm leading-relaxed">
                    {obj.description}
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
