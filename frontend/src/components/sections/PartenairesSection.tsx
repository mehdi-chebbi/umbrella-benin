import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const partenaires = [
  {
    name: 'FEM',
    fullName: "Fonds pour l'Environnement Mondial",
    role: 'Financement',
    description:
      "Le FEM est le mécanisme financier de la Convention. Il finance les projets de lutte contre la dégradation des terres dans les pays en développement.",
    logo: 'https://www.thegef.org/themes/custom/geftheme/logo.svg',
    logoSize: 'w-48 h-48',
  },
  {
    name: 'PNUE',
    fullName: "Programme des Nations Unies pour l'Environnement",
    role: "Mise en œuvre",
    description:
      "Le PNUE est l'agence d'exécution du projet, responsable de la coordination globale et du rapportage auprès des instances internationales.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/PNUMA_logo.png',
    logoSize: 'w-36 h-36',
  },
  {
    name: 'OSS',
    fullName: 'Observatoire du Sahara et du Sahel',
    role: 'Appui technique',
    description:
      "L'OSS assure l'appui technique du projet, apportant son expertise régionale en matière de suivi de la désertification.",
    logo: 'https://www.oss-online.org/sites/default/files/logo-h.png',
    logoSize: 'w-36 h-36',
  },
  {
    name: 'Min. Environnement',
    fullName: 'Ministère du Cadre de Vie et des Transports',
    role: 'Partenaire national',
    description:
      "Le Ministère est le point focal national du projet en Tunisie, assurant la coordination inter-institutionnelle.",
    logo: 'https://www.developmentaid.org/files/organizationLogos/ministere-de-lenvironnement-de-lhabitat-et-de-lurbanisme-ministry-of-the-environment-housing-and-tow-202505.jpg',
    logoSize: 'w-24 h-24',
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
          {partenaires.map((p, index) => (
            <ScrollReveal key={p.name} delay={index * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 card-lift h-full group hover:bg-white/15 transition-colors duration-300 flex flex-col items-center text-center">
                {/* Logo area - fixed height so text aligns across cards */}
                <div className="h-48 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className={`${p.logoSize} object-contain`}
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading font-bold text-lg text-white mb-1">
                  {p.name}
                </h3>

                {/* Full name */}
                <p className="text-white/50 text-xs font-medium mb-2">
                  {p.fullName}
                </p>

                {/* Role badge */}
                <span className="inline-block text-xs font-semibold text-accent bg-accent/20 rounded-full px-3 py-1 mb-3">
                  {p.role}
                </span>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
