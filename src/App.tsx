import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home, ChevronLeft, RotateCcw, ShoppingCart, Building2, Car, ChevronDown } from 'lucide-react';
import { DateTime } from './components/DateTime';
import { CategoryList } from './pages/CategoryList';
import { IssueList } from './pages/IssueList';
import { IssueDetail } from './pages/IssueDetail';
import { Contact } from './pages/Contact';
import { MobileNav } from './components/MobileNav';
import { ErrorBoundary } from './components/ErrorBoundary';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [showBackTooltip, setShowBackTooltip] = React.useState(false);
  const [showHomeTooltip, setShowHomeTooltip] = React.useState(false);
  const [showRefreshTooltip, setShowRefreshTooltip] = React.useState(false);
  const [showExtrasDropdown, setShowExtrasDropdown] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowExtrasDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-purple-100">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative hidden md:block group" ref={dropdownRef}>
              <button
                className="flex items-center px-3 py-2 rounded-xl bg-white border border-purple-200 
                  hover:bg-purple-50 transition-all text-gray-700 hover:border-purple-300 
                  shadow-sm group-hover:scale-105 group-hover:shadow-md group-hover:bg-gradient-to-r 
                  group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white 
                  group-hover:border-transparent transition-all duration-300"
              >
                Extras
                <ChevronDown className="w-4 h-4 ml-1.5 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg 
                border border-purple-100 p-2 opacity-0 invisible group-hover:opacity-100 
                group-hover:visible transition-all duration-300 transform origin-top scale-95 
                group-hover:scale-100 z-50">
                  <a
                    href="https://linktr.ee/gloucesterpay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 rounded-xl hover:bg-gradient-to-r 
                      hover:from-emerald-500 hover:to-teal-500 text-gray-700 hover:text-white 
                      transition-all duration-300 hover:shadow-md"
                  >
                    <ShoppingCart className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <span className="font-medium">Online Store</span>
                      <span className="text-xs text-gray-500 block">Purchase FOBs, filters, garage remotes & more</span>
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/drive/u/2/folders/1IA74kpPXEgbPeDu88mepx7effQ27YbFI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 rounded-xl hover:bg-gradient-to-r 
                      hover:from-amber-500 hover:to-yellow-500 text-gray-700 hover:text-white 
                      transition-all duration-300 hover:shadow-md"
                  >
                    <Building2 className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <span className="font-medium">Building Guide</span>
                      <span className="text-xs text-gray-500 block">Building policies & important information</span>
                    </div>
                  </a>
                  <a
                    href="https://sites.google.com/view/gloucester-vehicle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 rounded-xl hover:bg-gradient-to-r 
                      hover:from-blue-500 hover:to-purple-500 text-gray-700 hover:text-white 
                      transition-all duration-300 hover:shadow-md"
                  >
                    <Car className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <span className="font-medium">Parking Registration</span>
                      <span className="text-xs text-gray-500 block">Update vehicle details for security purposes</span>
                    </div>
                  </a>
                  <a
                    href="https://gloucesteronyonge.conciergeplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 rounded-xl hover:bg-gradient-to-r 
                      hover:from-rose-500 hover:to-pink-500 text-gray-700 hover:text-white 
                      transition-all duration-300 hover:shadow-md"
                  >
                    <Building2 className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <span className="font-medium">Concierge Plus</span>
                      <span className="text-xs text-gray-500 block">Online resident portal for booking amenities</span>
                    </div>
                  </a>
              </div>
            </div>

            {!isHome && (
              <>
                <button
                  onClick={() => navigate(-1)}
                  onMouseEnter={() => setShowBackTooltip(true)}
                  onMouseLeave={() => setShowBackTooltip(false)}
                  className="relative flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white border 
                    border-purple-200 hover:bg-purple-50 transition-all text-gray-700 hover:border-purple-300 
                    shadow-sm active:scale-95"
                  aria-label="Go back"
                >
                  <ChevronLeft className="w-5 h-5 mr-1.5" />
                  <span className="text-sm font-medium hidden sm:inline">Back</span>
                  {showBackTooltip && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 
                      text-white text-xs rounded whitespace-nowrap sm:hidden">
                      Go back
                    </div>
                  )}
                </button>
                <button
                  onClick={() => navigate('/')}
                  onMouseEnter={() => setShowHomeTooltip(true)}
                  onMouseLeave={() => setShowHomeTooltip(false)}
                  className="relative flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r 
                    from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 
                    transition-all shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Go to home page"
                >
                  <Home className="w-5 h-5 mr-1.5" />
                  <span className="text-sm font-medium hidden sm:inline">Home</span>
                  {showHomeTooltip && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 
                      text-white text-xs rounded whitespace-nowrap sm:hidden">
                      Go to home
                    </div>
                  )}
                </button>
              </>
            )}
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h1 className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text text-transparent ${isMobile ? 'text-base' : 'text-xl'}`}>
              {isMobile ? 'Gloucester Hub' : 'Gloucester Hub for Residents'}
            </h1>
            <DateTime isMobile={isMobile} isHome={isHome} />
            <button
              onClick={() => window.location.reload()}
              onMouseEnter={() => setShowRefreshTooltip(true)}
              onMouseLeave={() => setShowRefreshTooltip(false)}
              className="relative flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white 
                border border-purple-200 hover:bg-purple-50 transition-all text-gray-700 
                hover:border-purple-300 shadow-sm hover:scale-105 active:scale-95"
              aria-label="Refresh data"
            >
              <RotateCcw className="w-5 h-5 mr-1.5" />
              <span className="text-sm font-medium hidden sm:inline">Refresh</span>
              {showRefreshTooltip && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 
                  text-white text-xs rounded whitespace-nowrap sm:hidden">
                  Refresh page
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/category/:category" element={<IssueList />} />
            <Route path="/issue/:issueId" element={<IssueDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <MobileNav />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;