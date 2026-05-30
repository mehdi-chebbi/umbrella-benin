import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Indicateurs NDT', path: '/indicateurs' },
  { label: 'Géoportail', path: '/geoportail' },
  { label: 'À propos', path: '/a-propos' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = scrollY > 50;
  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-sm'
          : isHome
          ? 'bg-transparent'
          : 'bg-white/95 shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <Leaf
              className={`w-7 h-7 transition-colors duration-300 ${
                isHome && !isScrolled ? 'text-accent' : 'text-primary'
              }`}
            />
            <span
              className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${
                isHome && !isScrolled ? 'text-white' : 'text-brown'
              }`}
            >
              UMBRELLA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? isHome && !isScrolled
                      ? 'text-accent bg-white/10'
                      : 'text-primary bg-primary/5'
                    : isHome && !isScrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-brown-light hover:text-brown hover:bg-ivory-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Admin button (desktop) */}
          <div className="hidden md:block">
            <Link to="/admin">
              <Button
                variant={isHome && !isScrolled ? 'secondary' : 'primary'}
                size="sm"
              >
                Espace Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHome && !isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-brown hover:bg-ivory-dark'
            }`}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg font-body font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary bg-primary/5'
                  : 'text-brown-light hover:text-brown hover:bg-ivory-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/admin" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Espace Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
