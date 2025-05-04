
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      <TimeBlock value={timeLeft.days} label="DAYS" />
      <TimeBlock value={timeLeft.hours} label="HOURS" />
      <TimeBlock value={timeLeft.minutes} label="MINUTES" />
      <TimeBlock value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-mk-red text-white font-mario text-2xl md:text-3xl p-3 md:p-4 rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg animate-pulse-glow">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-xs font-bold mt-2">{label}</span>
  </div>
);

export default CountdownTimer;
