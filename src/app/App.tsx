import { Navbar } from '@/app/components/Navbar';
import { NewsTicker } from '@/app/components/NewsTicker';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import { AboutSection } from '@/app/components/AboutSection';
import { ImpactSection } from '@/app/components/ImpactSection';
import { ProgramsGrid } from '@/app/components/ProgramsGrid';
import { ImpactGallery } from '@/app/components/ImpactGallery';
import { MemberDirectory } from '@/app/components/MemberDirectory';
import { TransparencyModule } from '@/app/components/TransparencyModule';
import { VolunteerForm } from '@/app/components/VolunteerForm';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { QuickAccessSidebar } from '@/app/components/QuickAccessSidebar';
import { FloatingContactButton } from '@/app/components/FloatingContactButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'var(--font-body)' }}>
      <Navbar />
      <NewsTicker />
      <HeroCarousel />
      <AboutSection />
      <ImpactSection />
      <ProgramsGrid />
      <ImpactGallery />
      <MemberDirectory />
      <TransparencyModule />
      <VolunteerForm />
      <ContactSection />
      <Footer />
      <QuickAccessSidebar />
      <FloatingContactButton />
    </div>
  );
}