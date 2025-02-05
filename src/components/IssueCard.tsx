import React from 'react';
import { MaintenanceIssue } from '../types/issue';
import { ChevronRight, ChevronUp, Clock, FileText, DollarSign, MapPin } from 'lucide-react';

interface IssueCardProps {
  issue: MaintenanceIssue;
  isExpanded: boolean;
  onToggle: () => void;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue, isExpanded, onToggle }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border transition-all duration-300
      ${isExpanded ? 'border-purple-200 shadow-xl' : 'border-purple-100'}`}>
      <div 
        className="p-3 cursor-pointer flex items-center justify-between hover:bg-white/50 transition-colors group"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-sm font-medium text-gray-900">
            {issue.title}
          </h3>
          {issue.responsibility === 'owner' && (
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full ml-3">
              Unit Owner
            </span>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-purple-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-purple-500" />
        )}
      </div>

      {isExpanded && (
        <div className="p-3 border-t border-purple-100 space-y-4">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-6">{issue.description}</p>
            {issue.steps.map((step, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-900 mb-1.5 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 ml-9">{step.description}</p>
              </div>
            ))}
          </div>

          {issue.pricing && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {issue.pricing.map((price, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">{price.name}</h4>
                    <span className="text-lg font-semibold text-blue-600">${price.amount.toFixed(2)}</span>
                  </div>
                  <ul className="space-y-2">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {issue.videoUrl && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-gray-900">
                Installation Guide
              </h4>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100 max-w-2xl mx-auto">
                <iframe
                  src={issue.videoUrl.replace('view', 'preview')}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          
          {issue.manualUrl && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-gray-900">
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                Reference Manual
              </h4>
              <a
                href={issue.manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                Open Manual
              </a>
            </div>
          )}
          
          {issue.contacts.length > 0 && issue.emergency && (
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-medium text-gray-900">Emergency Contacts</h4>
              <div className="space-y-3">
                {issue.contacts.map((contact, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-500">{contact.role}</div>
                      </div>
                      {contact.hours && (
                        <div className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {contact.hours}
                        </div>
                      )}
                    </div>
                    {(contact.phone || contact.email) && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600">
                        {contact.phone && <div>{contact.phone}</div>}
                        {contact.email && <div>{contact.email}</div>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};