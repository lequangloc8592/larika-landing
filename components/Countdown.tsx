
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-05-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 w-20 md:w-24 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="text-3xl md:text-5xl font-bold font-space text-cyan-400">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest mt-2 text-gray-500 font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;
