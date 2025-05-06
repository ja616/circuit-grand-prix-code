
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
    <div className="flex justify-center gap-4 my-6">
      <TimeBlock value={timeLeft.days} label="D" />
      <TimeBlock value={timeLeft.hours} label="H" />
      <TimeBlock value={timeLeft.minutes} label="M" />
      <TimeBlock value={timeLeft.seconds} label="S" />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-[#ff3e3e] text-white font-mario text-2xl md:text-3xl p-3 md:p-4 rounded-lg w-12 h-12 flex items-center justify-center shadow-lg">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-xs font-bold mt-2 bg-black text-white px-2 font-mario">{label}</span>
  </div>
);

export default CountdownTimer;
