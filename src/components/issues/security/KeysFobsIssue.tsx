import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';
import { DollarSign, ChevronRight, Clock, AlertCircle, HelpCircle, Mail } from 'lucide-react';
import { useSecuritySupervisorHours } from '../../../hooks/useSecuritySupervisorHours';

interface KeysFobsIssueProps {
  issue: MaintenanceIssue;
}

export const KeysFobsIssue: React.FC<KeysFobsIssueProps> = ({ issue }) => {
  const { isAvailable, getAvailabilityMessage } = useSecuritySupervisorHours();

  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-700">
              Visit Property Management during business hours to purchase FOBs and remotes. 
              Security Supervisor will assist with activation during their scheduled hours.
            </p>
          </div>
          
          {/* Access Options */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {issue.images?.map((image, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-emerald-100 
                  hover:border-emerald-200 transition-all hover:shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 
                      bg-clip-text text-transparent">
                      {image.caption}
                    </h4>
                  </div>
                  <div className="mb-4">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50 p-2"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{image.details}</p>
                  {issue.pricing && (
                    <div className="text-2xl font-bold text-emerald-600 mb-4">
                      ${issue.pricing[index]?.amount.toFixed(2)}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {issue.pricing && issue.pricing[index]?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-emerald-100 
                          to-teal-100 flex items-center justify-center flex-shrink-0 text-xs 
                          font-medium text-gray-700">
                          {idx + 1}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Purchase Section */}
            <div className="mt-6 space-y-4">
              <div className="bg-white rounded-xl p-4 border border-emerald-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Activation Hours: Monday to Friday, 8 AM - 4 PM</span>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isAvailable 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-emerald-500' : 'bg-gray-500'} mr-1.5`}></span>
                    {isAvailable ? 'Available now for FOB activation' : getAvailabilityMessage}
                  </span>
                </div>
                <a
                  href={issue.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r 
                    from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 
                    hover:to-teal-600 transition-all shadow-sm hover:shadow-md text-lg 
                    font-semibold group"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Purchase Online
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Pay online and pick up at the Property Management office
                </p>
                {!isAvailable && (
                  <p className="text-sm text-amber-600 mt-2 text-center">
                    Note: FOB/Remote activation is only available during Security Supervisor hours
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};