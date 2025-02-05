import React from 'react';
import { AlertTriangle, X, ChevronRight } from 'lucide-react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface NoHeatCoolingIssueProps {
  issue: MaintenanceIssue;
}

interface NoHeatCoolingIssueProps {
  issue: MaintenanceIssue;
}

export const NoHeatCoolingIssue: React.FC<NoHeatCoolingIssueProps> = ({ issue }) => {
  const [showBanner, setShowBanner] = React.useState(true);
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  return (
    <BaseIssueDetail
      issue={issue}
      openSection={openSection}
      onSectionChange={setOpenSection}
      beforeContent={
        <>
          {showBanner && (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border 
              border-emerald-200 mb-6 relative animate-in slide-in-from-top duration-300">
              <button
                onClick={() => setShowBanner(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full 
                  flex items-center justify-center text-emerald-700 hover:bg-emerald-300 
                  transition-colors"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 
                  flex items-center justify-center text-white flex-shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-emerald-900 mb-1">
                    Need Professional HVAC Service?
                  </h3>
                  <p className="text-sm text-emerald-700 mb-3">
                    Our recommended contractor, Merrit HVAC, specializes in servicing the HVAC systems 
                    in our building. You can find their contact information in the "Contact Information" 
                    section below.
                  </p>
                  <button
                    onClick={() => {
                      const contactsSection = document.getElementById('contacts-section');
                      if (contactsSection) {
                        setOpenSection('contacts');
                        contactsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center px-3 py-1.5 bg-emerald-600 text-white text-sm 
                      rounded-lg hover:bg-emerald-700 transition-colors group"
                  >
                    View Contractor Details
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                If multiple units are experiencing the same HVAC issue simultaneously, 
                please report it to security or property management as it may indicate 
                a building-wide system problem.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
};