import { useMemo, useState, useEffect } from 'react';
import { isHoliday, getHoliday, getNextBusinessDay, formatTimeUntil } from '../utils/holidays';

export const useSecuritySupervisorHours = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const isAvailable = useMemo(() => {
    const day = currentTime.getDay();
    const hours = currentTime.getHours();

    return (
      day >= 1 && day <= 5 && // Monday to Friday
      hours >= 8 && hours < 16 && // 8 AM to 4 PM
      !isHoliday(currentTime) // Not a holiday
    );
  }, [currentTime]);

  const getAvailabilityMessage = useMemo(() => {
    const day = currentTime.getDay();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentDate = currentTime.getDate();

    const holiday = getHoliday(currentTime);
    if (holiday) {
      const nextBusinessDay = getNextBusinessDay(currentTime);
      return `Off duty (${holiday.name}), returns ${nextBusinessDay.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      })} at 8:00 AM`;
    }

    if (day >= 1 && day <= 5) {
      // During shift hours (8 AM - 4 PM)
      if ((hours === 8 && minutes >= 0) || (hours > 8 && hours < 16)) {
        const shiftEnd = new Date(currentTime);
        shiftEnd.setHours(16, 0, 0);
        return `On duty (${formatTimeUntil(shiftEnd)} remaining)`;
      }
      // Before shift starts on same day
      if (hours < 8) {
        const shiftStart = new Date(currentTime);
        shiftStart.setHours(8, 0, 0);
        return `Starts in ${formatTimeUntil(shiftStart)}`;
      }
      // After shift ends
      if (hours >= 16) {
        if (day === 5) {
          // After Friday shift
          const monday = new Date(currentTime);
          monday.setDate(currentDate + (8 - day));
          monday.setHours(8, 0, 0, 0);
          return `Returns Monday (${formatTimeUntil(monday)})`;
        }
        // After shift Mon-Thu
        const tomorrow = new Date(currentTime);
        tomorrow.setDate(currentDate + 1);
        tomorrow.setHours(8, 0, 0, 0);
        return `Returns tomorrow (${formatTimeUntil(tomorrow)})`;
      }
    }
    
    // Weekend or holiday
    const nextBusinessDay = getNextBusinessDay(currentTime);
    nextBusinessDay.setHours(8, 0, 0, 0);
    const timeUntil = formatTimeUntil(nextBusinessDay);
    const dayName = nextBusinessDay.toLocaleDateString('en-US', { weekday: 'long' });
    return `Returns ${dayName} (${timeUntil})`;
  }, [currentTime]);

  return {
    isAvailable,
    getAvailabilityMessage
  };
};