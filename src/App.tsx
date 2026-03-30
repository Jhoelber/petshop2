import { Footer } from './components/site/Footer';
import { FloatingContactButton } from './components/site/FloatingContactButton';
import { Navbar } from './components/site/Navbar';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { QuickInfoSection } from './components/sections/QuickInfoSection';
import { ServicesSection } from './components/sections/ServicesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-slate-800 antialiased selection:bg-pink-200 selection:text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <QuickInfoSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
