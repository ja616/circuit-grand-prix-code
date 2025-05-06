
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import MissionSection from '../components/MissionSection';
import PowerUpsSection from '../components/PowerUpsSection';
import ScheduleSection from '../components/ScheduleSection';
import LeaderboardSection from '../components/LeaderboardSection';
import WhyJoinSection from '../components/WhyJoinSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroBanner />
        <MissionSection />
        <PowerUpsSection />
        <ScheduleSection />
        <LeaderboardSection />
        <WhyJoinSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
