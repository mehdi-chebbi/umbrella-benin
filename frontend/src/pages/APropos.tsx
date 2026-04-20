import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Users,
  Globe,
  Calendar,
  Leaf,
  MapPin,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const partiesPrenantes = [
  {
    abbr: 'CNLCD',
    name: 'Comité National de Lutte contre la Désertification',
    description: 'Coordination nationale de la mise en œuvre de la CNULD.',
  },
  {
    abbr: 'DGACTA',
    name: 'Direction Générale de l\u2019Aménagement et de la Conservation des Terres Agricoles',
    description: 'Gestion durable des terres agricoles.',
  },
  {
    abbr: 'DGF',
    name: 'Direction Générale des Forêts et des Ressources Naturelles',
    description: 'Gestion des ressources forestières et naturelles.',
  },
  {
    abbr: 'CNCT',
    name: 'Cadre National de Ciblage de la DNLD',
    description: 'Définition des cibles nationales de neutralité.',
  },
  {
    abbr: 'INM',
    name: 'Institut National de la Météorologie',
    description: 'Données météorologiques et climatiques.',
  },
];

const phases = [
  {
    phase: 'Phase I',
    title: 'Mise en place et collecte initiale',
    periode: '2024 \u2013 2025',
    items: [
      'Installation du cadre institutionnel',
      'Collecte des données de référence',
      'Formation des acteurs clés',
      'Développement de la plateforme de suivi',
    ],
  },
  {
    phase: 'Phase II',
    title: 'Opérationnalisation et rapportage',
    periode: '2025 \u2013 2027',
    items: [
      'Suivi continu des indicateurs NDT',
      'Production des rapports nationaux',
      'Renforcement des capacités',
      'Intégration dans les politiques nationales',
    ],
  },
];

export default function APropos() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90">À propos</span>
            </nav>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              À propos du Projet
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Découvrez le Projet UMBRELLA, ses objectifs, son contexte et les
              parties prenantes impliquées dans la lutte contre la dégradation
              des terres au Bénin.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Le Projet */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
                Le Projet
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mt-3 mb-6">
                Un système de suivi pour la neutralité en matière de
                dégradation des terres
              </h2>
              <div className="space-y-4 text-brown-light leading-relaxed">
                <p>
                  Le Projet UMBRELLA est une initiative conjointe de l\u2019Observatoire du
                  Sahara et du Sahel (OSS), du Fonds pour l\u2019Environnement Mondial (FEM)
                  et du Programme des Nations Unies pour l\u2019Environnement (PNUE).
                </p>
                <p>
                  Son objectif principal est de développer un système de suivi et
                  d\u2019évaluation des indicateurs de Neutralité en matière de
                  Dégradation des Terres (NDT) au Bénin, en conformité avec les
                  obligations de la Convention des Nations Unies sur la lutte contre
                  la désertification (CNULD).
                </p>
                <p>
                  Le projet vise à fournir aux décideurs et aux parties prenantes les
                  outils et données nécessaires pour orienter les politiques de gestion
                  durable des terres et atteindre la neutralité.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 border border-border/40 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-brown">
                    Points clés
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Suivi des 7 objectifs stratégiques de l\u2019UNCCD',
                    'Collecte et analyse des données de terrain',
                    'Rapportage conforme aux standards internationaux',
                    'Renforcement des capacités nationales',
                    'Plateforme numérique de gestion des données',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-brown-light text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Le Contexte */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-10 text-white">
                <Globe className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-heading font-semibold text-xl mb-4">
                  La CNULD et la NDT
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  La Convention des Nations Unies sur la lutte contre la
                  désertification (CNULD) a établi le concept de Neutralité en
                  matière de Dégradation des Terres (NDT) comme objectif mondial.
                  La NDT implique de maintenir ou d\u2019améliorer la quantité et la
                  qualité des terres productives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
                Le Contexte
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mt-3 mb-6">
                La dégradation des terres au Bénin
              </h2>
              <div className="space-y-4 text-brown-light leading-relaxed">
                <p>
                  Le Bénin, situé en Afrique de l\u2019Ouest, fait face à une
                  dégradation accélérée de ses terres due à la combinaison de
                  facteurs climatiques et anthropiques. La déforestation,
                  l\u2019érosion, la salinisation et l\u2019épuisement des sols menacent
                  la sécurité alimentaire et les moyens de subsistance des
                  populations.
                </p>
                <p>
                  En tant que partie à la CNULD, le Bénin s\u2019est engagé à
                  atteindre la neutralité en matière de dégradation des terres.
                  Le Projet UMBRELLA fournit le cadre technique et institutionnel
                  nécessaire pour mesurer les progrès et orienter les actions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parties Prenantes */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
                Gouvernance
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mt-3 mb-4">
                Les Parties Prenantes
              </h2>
              <p className="text-brown-light max-w-xl mx-auto">
                Les principales institutions impliquées dans la mise en
                œuvre du projet au niveau national.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partiesPrenantes.map((pp, index) => (
              <ScrollReveal key={pp.abbr} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 border border-border/40 card-lift h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-heading font-bold text-sm text-accent">
                      {pp.abbr}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-brown mb-2">
                    {pp.name}
                  </h3>
                  <p className="text-brown-light text-sm leading-relaxed">
                    {pp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
                Planification
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mt-3 mb-4">
                Calendrier du Projet
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.phase} delay={index * 100}>
                <div className="flex gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-primary/20 shrink-0" />
                    {index < phases.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-ivory rounded-2xl p-6 border border-border/40 flex-1 mb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {phase.phase}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-brown-light">
                        <Calendar className="w-3.5 h-3.5" />
                        {phase.periode}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-brown mb-3">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-brown-light"
                        >
                          <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
