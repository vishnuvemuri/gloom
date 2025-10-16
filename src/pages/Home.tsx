import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import SolutionsGrid from '../components/SolutionsGrid';
import SoftwareSection from '../components/SoftwareSection';
import ProcurementSection from '../components/ProcurementSection';
import TrainingSection from '../components/TrainingSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <SolutionsGrid />
        <SoftwareSection />
        <ProcurementSection />
        <TrainingSection />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
