import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const EmergencyBanner = () => {
  return (
    <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center text-white">
            <AlertTriangle className="w-7 h-7" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-red-900 mb-4">
            Emergency Contact Information
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+14373528049"
              className="flex items-center justify-between px-4 py-3 bg-red-600 text-white rounded-xl 
                hover:bg-red-700 transition-colors text-lg font-semibold shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div>Security Mobile</div>
                  <div className="text-sm font-normal">+1 437 352 8049</div>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                24/7
              </span>
            </a>
            <a
              href="tel:+16473687397"
              className="flex items-center justify-between px-4 py-3 bg-red-600 text-white rounded-xl 
                hover:bg-red-700 transition-colors text-lg font-semibold shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div>Security Landline</div>
                  <div className="text-sm font-normal">+1 647 368 7397</div>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                24/7
              </span>
            </a>
          </div>
          <p className="mt-4 text-red-700 text-sm">
            ⚠️ For ANY water-related emergency, contact Security immediately. They are available 24/7 and will respond promptly to prevent water damage.
          </p>
        </div>
      </div>
    </div>
  );
};