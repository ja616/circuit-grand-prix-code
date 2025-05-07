
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
        <div id="mission"><MissionSection /></div>
        <div id="powerups"><PowerUpsSection /></div>
        <div id="schedule"><ScheduleSection /></div>
        <div id="leaderboard"><LeaderboardSection /></div>
        <div id="why-join"><WhyJoinSection /></div>
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
