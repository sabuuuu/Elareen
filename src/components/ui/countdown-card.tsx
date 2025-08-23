import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'; // Icon for delete button

interface CountdownCardProps {
  title: string;
  targetDate: Date;
  icon?: React.ReactNode;
  onDelete?: () => void;
}

export function CountdownCard({ title, targetDate, icon, onDelete }: CountdownCardProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-around py-3 bg-white rounded-3xl shadow-xl relative overflow-hidden transition-all duration-500 group">
      {/* Delete button (only appears on hover) */}
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Delete timer"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}

      <h1 className="text-xs font-bold flex items-center gap-2 text-[#1B430F]">
        {icon && React.cloneElement(icon as React.ReactElement)}
        {title}
      </h1>
      
      <div className="grid grid-cols-4 gap-3 text-center py-1">
        <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
          <div className="text-md font-semibold text-white">{timeLeft.days}</div>
          <div className="text-xs text-gray-200">Days</div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
          <div className="text-md font-semibold text-white">{timeLeft.hours}</div>
          <div className="text-xs text-gray-200">Hours</div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
          <div className="text-md font-semibold text-white">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-200">Min</div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
          <div className="text-md font-semibold text-white">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-200">Sec</div>
        </div>
      </div>
    </div>
  );
}