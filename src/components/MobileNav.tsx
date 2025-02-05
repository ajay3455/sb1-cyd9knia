import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Phone, AlertTriangle, Menu, ShoppingCart, Building2, Car, X } from 'lucide-react';

export const MobileNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showExtrasMenu, setShowExtrasMenu] = React.useState(false);
  const [startY, setStartY] = React.useState(0);
  const [currentY, setCurrentY] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const isEmergency = location.pathname === '/contact';
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // If dragged down more than 100px, close the menu
    if (currentY - startY > 100) {
      setShowExtrasMenu(false);
    }
    
    // Reset positions
    setStartY(0);
    setCurrentY(0);
  };

  // Calculate transform based on drag position
  const getTransform = () => {
    if (!isDragging) return '';
    const diff = currentY - startY;
    if (diff < 0) return ''; // Don't allow dragging up
    return `translateY(${diff}px)`;
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-purple-100 
        px-6 py-2 z-50 md:hidden safe-bottom">
        <div className="max-w-lg mx-auto flex justify-around">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors relative ${
              location.pathname === '/' 
                ? 'text-purple-600' 
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors relative ${
              isEmergency
                ? 'text-red-600'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">Emergency</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <button
            onClick={() => setShowExtrasMenu(true)}
            className="flex flex-col items-center p-2 rounded-xl transition-colors relative text-gray-600 hover:text-blue-600"
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs mt-1">Extras</span>
          </button>
        </div>
      </nav>
      {/* Extras Menu Modal */}
      {showExtrasMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-50 md:hidden">
          <div 
            ref={menuRef}
            className="w-full bg-white rounded-t-2xl p-4 animate-in slide-in-from-bottom duration-300"
            style={{ transform: getTransform(), transition: isDragging ? 'none' : 'transform 0.3s ease-out' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Drag Handle */}
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
              <button
                onClick={() => setShowExtrasMenu(false)}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 
                  rounded-xl transition-all active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              <a
                href="https://linktr.ee/gloucesterpay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 
                  text-white hover:from-emerald-600 hover:to-teal-600 transition-all"
                onClick={() => setShowExtrasMenu(false)}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                <div className="flex-1">
                  <span className="font-medium">Online Store</span>
                  <span className="text-xs opacity-80 block">Purchase FOBs, filters, garage remotes & more</span>
                </div>
              </a>
              <a
                href="https://drive.google.com/drive/u/2/folders/1IA74kpPXEgbPeDu88mepx7effQ27YbFI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full p-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 
                  text-white hover:from-amber-600 hover:to-yellow-600 transition-all"
                onClick={() => setShowExtrasMenu(false)}
              >
                <Building2 className="w-5 h-5 mr-3" />
                <div className="flex-1">
                  <span className="font-medium">Building Guide</span>
                  <span className="text-xs opacity-80 block">Building policies & important information</span>
                </div>
              </a>
              <a
                href="https://sites.google.com/view/gloucester-vehicle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                  text-white hover:from-blue-600 hover:to-purple-600 transition-all"
                onClick={() => setShowExtrasMenu(false)}
              >
                <Car className="w-5 h-5 mr-3" />
                <div className="flex-1">
                  <span className="font-medium">Parking Registration</span>
                  <span className="text-xs opacity-80 block">Update vehicle details for security purposes</span>
                </div>
              </a>
              <a
                href="https://gloucesteronyonge.conciergeplus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full p-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 
                  text-white hover:from-rose-600 hover:to-pink-600 transition-all"
                onClick={() => setShowExtrasMenu(false)}
              >
                <Building2 className="w-5 h-5 mr-3" />
                <div className="flex-1">
                  <span className="font-medium">Concierge Plus</span>
                  <span className="text-xs opacity-80 block">Online resident portal for booking amenities</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};