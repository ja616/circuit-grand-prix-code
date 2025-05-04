
import { Calendar } from 'lucide-react';

interface ScheduleEvent {
  date: string;
  day: string;
  theme: string;
  activities: string[];
}

const scheduleEvents: ScheduleEvent[] = [
  {
    date: "17 May",
    day: "Day 1",
    theme: "Boot-Up & Basics",
    activities: [
      "Introduction to SOP & robotics fundamentals",
      "Project overview + kit handout",
      "Tool & component walkthrough",
      "Arduino coding basics"
    ]
  },
  {
    date: "24 May",
    day: "Day 2",
    theme: "RC Circuit Begins",
    activities: [
      "Start Gesture-Controlled RC Car build",
      "Sensor & motor integration",
      "Hands-on coding & chassis assembly"
    ]
  },
  {
    date: "31 May",
    day: "Day 3",
    theme: "RoboSoccer Arena",
    activities: [
      "Build & test autonomous soccer bots",
      "Team collaboration & debugging",
      "League matches & creative strategy"
    ]
  },
  {
    date: "9 June",
    day: "Day 4",
    theme: "The Grand Finale 🏆",
    activities: [
      "Tug-of-War Bot Showdown: Build high-torque bots, optimize grip & weight",
      "Final battles across all bot categories",
      "Award Ceremony & Showcase",
      "Expert feedback + closing celebration"
    ]
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="mk-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">📅</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">Race Schedule</h2>
          <p className="text-xl mt-4 font-racing text-gray-700">
            Gear up! Here's your racing calendar. Don't miss a turn!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration */}
          <div className="bg-mk-red text-white rounded-xl p-6 shadow-lg flex items-center">
            <Calendar className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-racing">Registration Opens</h3>
              <p className="text-lg font-bold">Coming Soon!</p>
            </div>
          </div>
          
          {/* Industry Outing */}
          <div className="bg-mk-purple text-white rounded-xl p-6 shadow-lg flex items-center">
            <Calendar className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-racing">Winners' Industry Outing 🎉</h3>
              <p className="text-lg font-bold">To Be Announced</p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {scheduleEvents.map((event, index) => (
            <ScheduleCard key={index} event={event} isLast={index === scheduleEvents.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ScheduleCardProps {
  event: ScheduleEvent;
  isLast: boolean;
}

const ScheduleCard = ({ event, isLast }: ScheduleCardProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Date column */}
        <div className="bg-gray-100 py-6 px-8 md:w-1/4 flex flex-col justify-center items-center text-center">
          <p className="text-xl font-bold text-mk-purple">{event.date}</p>
          <p className="text-gray-600">{event.day}</p>
        </div>
        
        {/* Content column */}
        <div className="p-6 md:w-3/4">
          <h3 className="text-2xl font-racing text-mk-red mb-4">{event.theme}</h3>
          <ul className="space-y-2">
            {event.activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="text-mk-purple mr-2">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Timeline connector */}
      {!isLast && (
        <div className="hidden md:block absolute left-[12%] bottom-0 w-1 h-8 bg-mk-purple-light"></div>
      )}
    </div>
  );
};

export default ScheduleSection;
