
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import MissionSection from '../components/MissionSection';
import PowerUpsSection from '../components/PowerUpsSection';
import ScheduleSection from '../components/ScheduleSection';
import WhyJoinSection from '../components/WhyJoinSection';
import SponsorsSection from '../components/SponsorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroBanner />
        <MissionSection />
        <PowerUpsSection />
        <WhyJoinSection />
        <ScheduleSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
