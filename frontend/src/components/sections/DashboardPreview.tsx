import { BarChart3, TrendingUp, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const kpis = [
  {
    icon: BarChart3,
    label: 'Indicateurs NDT',
    value: '—',
    detail: '7 objectifs stratégiques',
  },
  {
    icon: TrendingUp,
    label: 'Données collectées',
    value: '—',
    detail: 'En cours',
  },
  {
    icon: MapPin,
    label: 'Sites de suivi',
    value: '—',
    detail: 'En cours',
  },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tableau de Bord NDT"
          subtitle="Le tableau de bord interactif pour le suivi des indicateurs de Neutralité en matière de Dégradation des Terres."
        />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Dashboard header bar */}
              <div className="bg-primary/5 px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-heading font-semibold text-sm text-brown">
                    Tableau de Bord NDT
                  </span>
                </div>

              </div>

              {/* KPI cards */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {kpis.map((kpi) => {
                    const Icon = kpi.icon;
                    return (
                      <div
                        key={kpi.label}
                        className="bg-ivory rounded-xl p-5 border border-border/40 text-center"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-heading text-3xl font-bold text-brown mb-1">
                          {kpi.value}
                        </div>
                        <div className="text-sm font-medium text-brown mb-1">
                          {kpi.label}
                        </div>
                        <div className="text-xs text-brown-light">{kpi.detail}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Placeholder chart area */}
                <div className="bg-ivory rounded-xl border border-border/40 p-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-border mx-auto mb-3" />
                    <p className="font-heading font-medium text-brown-light">
                      Visualisation des données
                    </p>
                    <p className="text-sm text-gray mt-1">
                      Les graphiques interactifs apparaîtront ici
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
