import { Navigate, Link } from 'react-router-dom';
import {
  Leaf,
  BarChart3,
  FileText,
  Users,
  LogOut,
  Home,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function Dashboard() {
  const { user, logout } = useAuth();

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  const stats = [
    {
      icon: BarChart3,
      label: 'Indicateurs',
      value: '\u2014',
      description: 'Indicateurs NDT configurés',
    },
    {
      icon: FileText,
      label: 'Rapports',
      value: '0',
      description: 'Rapports générés',
    },
    {
      icon: Users,
      label: 'Utilisateurs',
      value: '1',
      description: 'Utilisateurs actifs',
    },
  ];

  return (
    <div className="min-h-screen bg-ivory-dark">
      {/* Top bar */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 group">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-heading font-bold text-brown">
                  UMBRELLA
                </span>
              </Link>
              <div className="hidden sm:flex items-center gap-1 text-sm">
                <span className="text-brown-light">Administration</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-brown">
                  {user.username}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-brown-light hover:text-destructive hover:bg-destructive/5 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-brown-light">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brown">Administration</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Welcome */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-brown">
              Bienvenue, {user.username}
            </h1>
            <p className="text-brown-light mt-1">
              Tableau de bord de gestion du Projet UMBRELLA
            </p>
          </div>
        </ScrollReveal>

        {/* Info banner */}
        <ScrollReveal delay={50}>
          <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent-dark mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-accent-dark">
                Version bêta
              </p>
              <p className="text-sm text-brown-light mt-0.5">
                Le tableau de bord complet sera disponible dans une prochaine version.
                Certaines fonctionnalités sont en cours de développement.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={100 + index * 80}>
                <div className="bg-white rounded-2xl p-6 border border-border/40 shadow-sm card-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-heading text-3xl font-bold text-brown">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-brown mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-brown-light">{stat.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick actions placeholder */}
        <ScrollReveal delay={300}>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border/40">
            <h2 className="font-heading font-semibold text-lg text-brown mb-4">
              Actions rapides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: 'Voir les indicateurs',
                  description: 'Consulter les indicateurs NDT',
                  disabled: true,
                },
                {
                  label: 'Générer un rapport',
                  description: 'Créer un rapport NDT',
                  disabled: true,
                },
                {
                  label: 'Gérer les utilisateurs',
                  description: 'Administration des comptes',
                  disabled: true,
                },
                {
                  label: 'Paramètres',
                  description: 'Configuration du système',
                  disabled: true,
                },
              ].map((action) => (
                <button
                  key={action.label}
                  disabled={action.disabled}
                  className="p-4 rounded-xl border border-border bg-ivory text-left group transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/30 hover:bg-primary/5"
                >
                  <h3 className="font-heading font-semibold text-sm text-brown mb-1 group-hover:text-primary transition-colors">
                    {action.label}
                  </h3>
                  <p className="text-xs text-brown-light">
                    {action.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
