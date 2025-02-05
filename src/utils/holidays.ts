interface Holiday {
  date: Date;
  name: string;
}

// Canadian statutory holidays for Ontario (2024-2025)
export const HOLIDAYS: Holiday[] = [
  // 2024 Holidays
  { date: new Date(2024, 0, 1), name: "New Year's Day" },
  { date: new Date(2024, 1, 19), name: "Family Day" },
  { date: new Date(2024, 2, 29), name: "Good Friday" },
  { date: new Date(2024, 4, 20), name: "Victoria Day" },
  { date: new Date(2024, 6, 1), name: "Canada Day" },
  { date: new Date(2024, 7, 5), name: "Civic Holiday" },
  { date: new Date(2024, 8, 2), name: "Labour Day" },
  { date: new Date(2024, 9, 14), name: "Thanksgiving" },
  { date: new Date(2024, 11, 25), name: "Christmas Day" },
  { date: new Date(2024, 11, 26), name: "Boxing Day" },
  
  // 2025 Holidays
  { date: new Date(2025, 0, 1), name: "New Year's Day" },
  { date: new Date(2025, 1, 17), name: "Family Day" },
  { date: new Date(2025, 3, 18), name: "Good Friday" },
  { date: new Date(2025, 4, 19), name: "Victoria Day" },
  { date: new Date(2025, 6, 1), name: "Canada Day" },
  { date: new Date(2025, 7, 4), name: "Civic Holiday" },
  { date: new Date(2025, 8, 1), name: "Labour Day" },
  { date: new Date(2025, 9, 13), name: "Thanksgiving" },
  { date: new Date(2025, 11, 25), name: "Christmas Day" },
  { date: new Date(2025, 11, 26), name: "Boxing Day" },
  
  // 2026 Holidays
  { date: new Date(2026, 0, 1), name: "New Year's Day" },
  { date: new Date(2026, 1, 16), name: "Family Day" },
  { date: new Date(2026, 3, 3), name: "Good Friday" },
  { date: new Date(2026, 4, 18), name: "Victoria Day" },
  { date: new Date(2026, 6, 1), name: "Canada Day" },
  { date: new Date(2026, 7, 3), name: "Civic Holiday" },
  { date: new Date(2026, 8, 7), name: "Labour Day" },
  { date: new Date(2026, 9, 12), name: "Thanksgiving" },
  { date: new Date(2026, 11, 25), name: "Christmas Day" },
  { date: new Date(2026, 11, 26), name: "Boxing Day" }
];

export const getHoliday = (date: Date): Holiday | undefined => {
  return HOLIDAYS.some(holiday => 
    holiday.date.getDate() === date.getDate() &&
    holiday.date.getMonth() === date.getMonth() &&
    holiday.date.getFullYear() === date.getFullYear()
  );
};

export const isHoliday = (date: Date): boolean => {
  return getHoliday(date) !== undefined;
};

export const getNextBusinessDay = (date: Date): Date => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  
  // Keep advancing until we find a business day
  while (
    nextDay.getDay() === 0 || // Sunday
    nextDay.getDay() === 6 || // Saturday
    isHoliday(nextDay)
  ) {
    nextDay.setDate(nextDay.getDate() + 1);
  }
  
  return nextDay;
};

export const formatTimeUntil = (target: Date): string => {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 24) {
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''}`;
  }
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  
  return `${minutes}m`;
};