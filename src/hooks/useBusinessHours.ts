import { useMemo, useState, useEffect } from 'react';
import { isHoliday, getHoliday, getNextBusinessDay, formatTimeUntil } from '../utils/holidays';

export const useBusinessHours = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const isBusinessHours = useMemo(() => {
    const day = currentTime.getDay();
    const hours = currentTime.getHours();

    return (
      day >= 1 && day <= 5 && // Monday to Friday
      hours >= 9 && hours < 17 && // 9 AM to 5 PM
      !isHoliday(currentTime) // Not a holiday
    );
  }, [currentTime]);

  const getAvailabilityMessage = useMemo(() => {
    const hours = currentTime.getHours();
    const day = currentTime.getDay();

    if (day >= 1 && day <= 5) {
      if (hours >= 9 && hours < 17) {
        return `Management On-Site (Closing at 5 PM)`;
      }
      if (hours < 9) {
        return `Opens Today at 9 AM`;
      }
      if (day === 5 && hours >= 17) {
        return `Opens Monday at 9 AM`;
      }
      return `Opens Tomorrow at 9 AM`;
    }
    
    if (day === 0) {
      return `Opens Tomorrow at 9 AM`;
    }
    return `Opens Monday at 9 AM`;
  }, [currentTime]);

  return {
    isBusinessHours,
    getAvailabilityMessage
  };
};