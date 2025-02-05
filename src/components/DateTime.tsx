import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface DateTimeProps {
  isMobile: boolean;
  isHome: boolean;
}

export const DateTime: React.FC<DateTimeProps> = ({ isMobile, isHome }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [showFullDate, setShowFullDate] = React.useState(false);
  const frameRef = React.useRef<number>();

  React.useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
      frameRef.current = requestAnimationFrame(updateTime);
    };
    
    frameRef.current = requestAnimationFrame(updateTime);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const formatTimeDesktop = (date: Date) => {
    const time = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }).format(date);

    const fullDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);

    return { time, fullDate };
  };

  const formatTimeMobile = (date: Date) => {
    const time = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);

    const shortDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);

    return { time, shortDate };
  };

  const desktopFormat = formatTimeDesktop(currentTime);
  const mobileFormat = formatTimeMobile(currentTime);

  return (
    (!isMobile || isHome) && (
    <div className="relative group">
      <button
        onClick={() => setShowFullDate(prev => !prev)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {/* Desktop View */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-blue-500" />
            <time 
              className="text-sm font-medium text-gray-700"
              dateTime={currentTime.toISOString()}
            >
              {desktopFormat.time}
            </time>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-purple-500" />
            <time 
              className="text-sm font-medium text-gray-700"
              dateTime={currentTime.toISOString()}
            >
              {showFullDate ? desktopFormat.fullDate : desktopFormat.fullDate.split(',')[0]}
            </time>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-blue-500" />
            <time 
              className="text-sm font-medium text-gray-700"
              dateTime={currentTime.toISOString()}
            >
              {mobileFormat.time}
            </time>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-purple-500" />
            <time 
              className="text-sm font-medium text-gray-700"
              dateTime={currentTime.toISOString()}
            >
              {mobileFormat.shortDate}
            </time>
          </div>
        </div>
      </button>

      {!isMobile && (
        <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 
          bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap">
          Click to {showFullDate ? 'collapse' : 'expand'} date
        </div>
      )}
    </div>
    )
  );
};