import { Link } from 'react-router-dom';
import {
  TreePine,
  Heart,
  CloudSun,
  Globe,
  Banknote,
  Target,
  Settings,
  ChevronRight,
  Info,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const objectifs = [
  {
    icon: TreePine,
    number: '01',
    title: 'Améliorer les écosystèmes',
    description:
      'Préserver et restaurer les écosystèmes terrestres pour maintenir les services écologiques essentiels. Cet objectif vise à stopper et inverser la tendance de dégradation des terres par la mise en place de pratiques de gestion durable.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Améliorer les conditions de vie',
    description:
      "Contribuer à l\u2019amélioration des conditions de vie des populations affectées par la dégradation des terres. La résilience des communautés dépend directement de la santé des terres qu\u2019elles exploitent.",
  },
  {
    icon: CloudSun,
    number: '03',
    title: 'Atténuation de la sécheresse',
    description:
      'Renforcer la résilience face à la sécheresse et aux effets des changements climatiques sur les terres. Ce objectif encourage l\u2019adoption de systèmes d\u2019alerte précoce et de pratiques d\u2019adaptation.',
  },
  {
    icon: Globe,
    number: '04',
    title: 'Avantages environnementaux',
    description:
      'Générer des avantages environnementaux globaux par la gestion durable des terres. La protection des sols contribue à la séquestration du carbone et à la préservation de la biodiversité.',
  },
  {
    icon: Banknote,
    number: '05',
    title: 'Mobilisation des ressources',
    description:
      'Mobiliser des ressources financières adéquates pour la mise en œuvre des programmes de lutte contre la dégradation. Un financement durable est essentiel pour atteindre les objectifs fixés.',
  },
  {
    icon: Target,
    number: '06',
    title: 'Cibles volontaires de NDT',
    description:
      "Établir des cibles volontaires de neutralité en matière de dégradation des terres conformément à la CNULD. Les pays parties s\u2019engagent à atteindre un équilibre entre dégradation et réhabilitation des terres.",
  },
  {
    icon: Settings,
    number: '07',
    title: 'Cadre de mise en œuvre',
    description:
      'Développer un cadre institutionnel et technique solide pour la mise en œuvre efficace du projet. Cela inclut le renforcement des capacités et la mise en place de mécanismes de coordination.',
  },
];

export default function Indicateurs() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90">Indicateurs NDT</span>
            </nav>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Indicateurs NDT
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Les indicateurs de Neutralité en matière de Dégradation des
              Terres permettent de mesurer les progrès vers l\u2019atteinte de la
              neutralité conformément aux objectifs de la CNULD.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Info banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-accent-dark mt-0.5 shrink-0" />
            <p className="text-sm text-accent-dark">
              Les données des indicateurs seront disponibles prochainement.
              Le système de collecte et de visualisation est actuellement en cours de développement.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mb-4">
                Les 7 Objectifs Stratégiques de l\u2019UNCCD
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-accent/40" />
                <div className="w-12 h-[3px] bg-accent rounded-full" />
                <div className="w-8 h-[2px] bg-accent/40" />
              </div>
              <p className="text-brown-light text-lg max-w-2xl mx-auto">
                Chaque objectif stratégique est accompagné d\u2019indicateurs
                spécifiques permettant le suivi des progrès réalisés.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {objectifs.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <ScrollReveal key={obj.number} delay={index * 60}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-border/40 shadow-sm card-lift">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      {/* Number + Icon */}
                      <div className="flex items-center gap-4 md:min-w-[200px]">
                        <span className="text-3xl font-heading font-bold text-accent/30">
                          {obj.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg text-brown mb-2">
                          {obj.title}
                        </h3>
                        <p className="text-brown-light leading-relaxed">
                          {obj.description}
                        </p>
                      </div>

                      {/* Status badge */}
                      <div className="md:mt-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cream text-brown-light">
                          Prochainement
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
