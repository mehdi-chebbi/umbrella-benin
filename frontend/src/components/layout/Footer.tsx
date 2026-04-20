import { Link } from 'react-router-dom';
import { Leaf, MapPin, Mail, ExternalLink } from 'lucide-react';

const navigationLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Indicateurs NDT', path: '/indicateurs' },
  { label: 'À propos', path: '/a-propos' },
];

const partenaires = [
  { name: 'OSS', fullName: 'Observatoire du Sahara et du Sahel' },
  { name: 'FEM/GEF', fullName: 'Fonds pour l\u2019Environnement Mondial' },
  { name: 'PNUE/UNEP', fullName: 'Programme des Nations Unies' },
  { name: 'Ministère', fullName: 'Ministère de l\u2019Environnement' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Project */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="font-heading font-bold text-lg text-white">
                UMBRELLA
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Projet de suivi et d\u2019évaluation des indicateurs de
              Neutralité en matière de Dégradation des Terres
              au Bénin, en collaboration avec l\u2019OSS, le FEM et le PNUE.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Partenaires */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Partenaires
            </h3>
            <ul className="space-y-3">
              {partenaires.map((p) => (
                <li key={p.name}>
                  <span className="text-white/90 font-medium text-sm block">
                    {p.name}
                  </span>
                  <span className="text-white/50 text-xs">{p.fullName}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                <span>
                  Cotonou, République du Bénin
                  <br />
                  Ministère de l\u2019Environnement, de l\u2019Agriculture et de l\u2019Élevage
                </span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-accent/70" />
                <span>contact@umbrella-benin.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Projet UMBRELLA &mdash; Tous droits
            réservés &middot; République du Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
