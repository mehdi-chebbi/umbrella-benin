import HeroSection from '../components/sections/HeroSection';
import MissionSection from '../components/sections/MissionSection';
import ObjectifsSection from '../components/sections/ObjectifsSection';
import PartenairesSection from '../components/sections/PartenairesSection';
import DashboardPreview from '../components/sections/DashboardPreview';
import CTASection from '../components/sections/CTASection';

export default function Accueil() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ObjectifsSection />
      <PartenairesSection />
      <DashboardPreview />
      <CTASection />
    </>
  );
}
