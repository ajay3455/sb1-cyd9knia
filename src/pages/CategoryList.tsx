import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Thermometer, Droplets, Wrench, Zap, Lock, Power, Wifi, Sofa,
  AlertTriangle, Phone, Mail, Copy, Check, Clock, MessageCircle, AlertCircle, ChevronRight
} from 'lucide-react';
import { SearchBar } from '../components/SearchBar';

const categories = [
  { id: 'HVAC', name: 'HVAC Issues 🌡️', icon: Thermometer, description: 'Heating, ventilation, and air conditioning problems', color: 'from-red-500 to-orange-500' },
  { id: 'Plumbing', name: 'Plumbing 🚰', icon: Droplets, description: 'Water, drainage, and pipe-related issues', color: 'from-blue-500 to-cyan-500' },
  { id: 'Electrical', name: 'Electrical ⚡', icon: Zap, description: 'Power, lighting, and electrical system problems', color: 'from-yellow-500 to-amber-500' },
  { id: 'Security', name: 'Security & Access 🔒', icon: Lock, description: 'Keys, FOBs, alarms, and building security', color: 'from-green-500 to-emerald-500' },
  { id: 'Appliances', name: 'Appliances 🔌', icon: Power, description: 'Dishwasher, microwave, and appliance problems', color: 'from-purple-500 to-pink-500' },
  { id: 'Internet', name: 'Internet & Network 📡', icon: Wifi, description: 'WiFi, network connectivity, and building internet', color: 'from-sky-500 to-blue-500' },
  { id: 'Furniture', name: 'Furniture 🛋️', icon: Sofa, description: 'Furniture maintenance, repairs, and parts', color: 'from-amber-500 to-yellow-500' },
  { id: 'General', name: 'General Maintenance 🛠️', icon: Wrench, description: 'Other maintenance requests and repairs', color: 'from-gray-500 to-slate-500' },
];

export const CategoryList = () => {
  const navigate = useNavigate();
  const [copiedText, setCopiedText] = React.useState<string | null>(null);
  const [showWhatsAppWarning, setShowWhatsAppWarning] = React.useState(false);
  const [showTextWarning, setShowTextWarning] = React.useState(false);
  const [currentTime] = React.useState(() => new Date());
  const [showBanner, setShowBanner] = React.useState<boolean | null>(null);
  const contactSectionRef = React.useRef<HTMLDivElement>(null);

  // Initialize banner on mount
  React.useEffect(() => {
    setShowBanner(true);
    // Auto-hide banner after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide banner when contact section is visible
        if (entry.isIntersecting) {
          setShowBanner(false);
        } else {
          setShowBanner(true);
        }
      },
      {
        // Adjust threshold and rootMargin for smoother transitions
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isBusinessHours = React.useMemo(() => {
    const hours = currentTime.getHours();
    const day = currentTime.getDay();
    return day >= 1 && day <= 5 && hours >= 9 && hours < 17;
  }, [currentTime]);

  const getAvailabilityMessage = React.useMemo(() => {
    const hours = currentTime.getHours();
    const day = currentTime.getDay();
    const minutes = currentTime.getMinutes();

    if (day >= 1 && day <= 5) {
      if (hours >= 9 && hours < 17) {
        return `Staff On-Site (Closing at 5 PM)`;
      }
      if (hours < 9) {
        return `Opens at 9 AM Today`;
      }
      if (day === 5 && hours >= 17) {
        return `Opens Monday at 9 AM`;
      }
      return `Opens at 9 AM Tomorrow`;
    }
    
    if (day === 0) {
      return `Opens Tomorrow at 9 AM`;
    }
    return `Opens Monday at 9 AM`;
  }, [currentTime]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppWarning(true);
  };

  const proceedToWhatsApp = () => {
    window.open('https://wa.me/14373528049', '_blank');
    setShowWhatsAppWarning(false);
  };

  const handleTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTextWarning(true);
  };

  const proceedToText = () => {
    window.location.href = 'sms:+14373528049';
    setShowTextWarning(false);
  };

  return (
    <>
      <main className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-24 md:pb-8 category-list-main">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gloucester on Yonge
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-600">
            Maintenance & Troubleshooting Portal
          </h2>
          <div className="max-w-xl mx-auto mt-6">
            <SearchBar onSearch={() => {}} />
          </div>
        </header>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, name, icon: Icon, description, color }) => (
            <button
              key={id}
              onClick={() => navigate(`/category/${id}`)}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-purple-100
                hover:shadow-md hover:border-purple-200 transition-all duration-200 text-left group"
            >
              <div className="flex items-center space-x-4 relative">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{name}</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 sm:line-clamp-none">{description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-200">
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="font-semibold text-red-900">Regal Security</h3>
            <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <span className="w-2 h-2 mr-1.5 rounded-full bg-green-500"></span>
              Available 24/7
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Front Desk Security - Available 24/7 at your service
          </p>
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 bg-gradient-to-r from-red-500 to-red-600 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <a
                  href="tel:+14373528049"
                  className="flex items-center justify-between w-full bg-white hover:bg-red-50 p-3 rounded-[0.7rem] transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900">Mobile Number</div>
                      <div className="text-sm text-gray-600">+1 437 352 8049</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                      24/7
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy('+14373528049', 'security-mobile');
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      title="Copy number"
                    >
                      {copiedText === 'security-mobile' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </a>
              </div>

              <div className="col-span-2 bg-gradient-to-r from-red-500 to-red-600 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <a
                  href="tel:+16473687397"
                  className="flex items-center justify-between w-full bg-white hover:bg-red-50 p-3 rounded-[0.7rem] transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900">Landline</div>
                      <div className="text-sm text-gray-600">+1 647 368 7397</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                      24/7
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy('+16473687397', 'security-landline');
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      title="Copy number"
                    >
                      {copiedText === 'security-landline' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </a>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 bg-white hover:bg-green-50 p-3 rounded-[0.7rem] transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">WhatsApp</div>
                    <div className="text-xs text-gray-600">Send Message</div>
                  </div>
                </div>
              </button>

              <a
                href="#"
                onClick={handleTextClick}
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 bg-white hover:bg-blue-50 p-3 rounded-[0.7rem] transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">Text Message</div>
                    <div className="text-xs text-gray-600">Send SMS</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="mb-2">
                <span className="font-medium">For immediate assistance:</span> Visit the front desk or call the numbers above.
              </p>
              <p>
                <span className="font-medium">Send pictures or messages:</span> Text or WhatsApp to the mobile number (+1 437 352 8049).
                Note: Response to messages may be delayed, please call for urgent matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4">
        <div ref={contactSectionRef} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-200">
          <div className="flex items-center mb-2">
            <Wrench className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="font-semibold text-red-900">FirstService Residential</h3>
            <span className={`ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isBusinessHours 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              <span className={`w-2 h-2 mr-1.5 rounded-full ${isBusinessHours ? 'bg-emerald-500' : 'bg-gray-500'}`}></span>
              {getAvailabilityMessage}
            </span>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex items-center space-x-2">
              <a
                href="tel:+16473687395"
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base relative group"
              >
                <Phone className="w-4 h-4 mr-2" />
                Office: +1 647 368 7395
                {isBusinessHours && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center text-xs bg-emerald-500 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse"></span>
                    Available On-Site Right Now
                  </span>
                )}
              </a>
              <button
                onClick={() => handleCopy('+16473687395', 'office')}
                className="inline-flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                title="Copy number"
              >
                {copiedText === 'office' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:gloucester.on@fsresidential.com"
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm truncate"
              >
                <Mail className="w-4 h-4 mr-2" />
                gloucester.on@fsresidential.com
              </a>
              <button
                onClick={() => handleCopy('gloucester.on@fsresidential.com', 'email')}
                className="inline-flex items-center justify-center p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                title="Copy email"
              >
                {copiedText === 'email' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Property Management Office, 5th Floor<br />
              3 Gloucester St, Toronto, M4Y 0C6<br />
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              <Clock className="w-3 h-3 inline mr-1" />
              Monday to Friday, 9 AM to 5 PM
            </p>
            <div className="h-20 md:hidden">
              {/* Extra space for mobile navigation */}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Warning Dialog */}
      {showWhatsAppWarning && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl animate-in fade-in duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Message Response Time
                </h3>
                <div className="text-gray-600 space-y-2 mb-6">
                  <p>Please note:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Response to WhatsApp messages may be delayed</li>
                    <li>For immediate assistance, please call security directly</li>
                    <li>Security is available 24/7 at the front desk</li>
                  </ul>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={proceedToWhatsApp}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 
                      transition-colors font-medium"
                  >
                    Continue to WhatsApp
                  </button>
                  <button
                    onClick={() => setShowWhatsAppWarning(false)}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 
                      transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Text Message Warning Dialog */}
      {showTextWarning && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl animate-in fade-in duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Message Response Time
                </h3>
                <div className="text-gray-600 space-y-2 mb-6">
                  <p>Please note:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Response to text messages may be delayed</li>
                    <li>For immediate assistance, please call security directly</li>
                    <li>Security is available 24/7 at the front desk</li>
                    <li>You can send pictures or additional information via text</li>
                  </ul>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={proceedToText}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                      transition-colors font-medium"
                  >
                    Continue to Text Message
                  </button>
                  <button
                    onClick={() => setShowTextWarning(false)}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 
                      transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Emergency Contact Notice */}
      {showBanner && <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-red-50 rounded-xl p-4 
        border border-red-200 shadow-lg md:hidden w-[calc(100%-2rem)] max-w-md animate-in slide-in-from-bottom-4 
        mobile-banner transition-all duration-300">
        <div className="relative">
          <button
            onClick={() => setShowBanner(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-200 rounded-full flex items-center justify-center
              text-red-700 hover:bg-red-300 transition-colors z-10"
            aria-label="Close banner"
          >
            ×
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-sm font-medium text-red-900">Need immediate assistance?</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 
                transition-colors flex items-center"
            >
              View Emergency Contacts
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>}
    </>
  );
};