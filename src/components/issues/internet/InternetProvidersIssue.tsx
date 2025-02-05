import React from 'react';
import { Phone, Mail, ChevronRight, Clock, AlertTriangle, ChevronDown, Copy, Check, Globe } from 'lucide-react';
import { MaintenanceIssue } from '../../../types/issue';

interface InternetProvidersIssueProps {
  issue: MaintenanceIssue;
}

export const InternetProvidersIssue: React.FC<InternetProvidersIssueProps> = ({ issue }) => {
  const [selectedProvider, setSelectedProvider] = React.useState<string | null>(null);
  const [showTechSupport, setShowTechSupport] = React.useState<string | null>(null);
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Internet Service Providers
            </h1>
            <p className="text-gray-600 mt-2">
              Choose your preferred provider for high-speed fiber internet connectivity
            </p>
          </div>

          {/* Provider Selection Cards */}
          <div className="grid gap-6">
            {issue.steps.map((provider, index) => {
              const isSelected = selectedProvider === provider.title;
              const techSupport = issue.technicalSupport?.[index];
              const contact = issue.contacts[index];
              const image = issue.images?.[index];

              return (
                <div key={provider.title} className="relative">
                  <div 
                    className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl border transition-all duration-300
                      ${isSelected ? 'border-blue-300 shadow-lg scale-[1.02]' : 'border-gray-200 shadow-sm'}`}
                  >
                    {/* Main Provider Card */}
                    <button
                      onClick={() => setSelectedProvider(isSelected ? null : provider.title)}
                      className="w-full p-6 text-left"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Logo Section */}
                        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-xl">
                          <img
                            src={image?.url}
                            alt={image?.alt}
                            className="h-16 object-contain transition-transform group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Features Section */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                            {provider.title}
                          </h3>
                          <div className="space-y-2">
                            {provider.description.split('\n').map((line, i) => {
                              if (line.startsWith('•')) {
                                return (
                                  <div key={i} className="flex items-start space-x-3">
                                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 
                                      flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                                    </span>
                                    <p className="text-gray-600">{line.substring(2)}</p>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>

                        <ChevronDown className={`w-6 h-6 text-blue-500 transition-transform absolute right-6 top-6
                          ${isSelected ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isSelected && (
                      <div className="border-t border-gray-100">
                        {/* Technical Support Section */}
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-gray-900">Technical Support</h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                              Available 24/7
                            </span>
                          </div>

                          <div className="grid gap-4">
                            {/* Support Contact Card */}
                            <div className="bg-white rounded-xl p-4 border border-blue-100">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-medium text-gray-900">24/7 Technical Support</h5>
                              </div>
                              <p className="text-sm text-gray-600 mb-4">{techSupport?.description}</p>
                              <div className="space-y-3">
                                <a
                                  href={`tel:${techSupport?.phone.replace(/[^0-9+]/g, '')}`}
                                  className="flex items-center justify-between w-full px-4 py-2 bg-blue-600 text-white 
                                    rounded-lg hover:bg-blue-700 transition-colors group"
                                >
                                  <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>{techSupport?.phone}</span>
                                  </div>
                                  <span className="text-xs bg-blue-500 px-2 py-0.5 rounded-full">24/7</span>
                                </a>
                                <a
                                  href={techSupport?.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between w-full px-4 py-2 bg-purple-600 
                                    text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                  <div className="flex items-center">
                                    <Globe className="w-4 h-4 mr-2" />
                                    <span>Online Support Portal</span>
                                  </div>
                                  <ChevronRight className="w-4 h-4" />
                                </a>
                              </div>
                            </div>

                            {/* Sales Representative Card */}
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h5 className="font-medium text-gray-900">Sales Representative</h5>
                                  {contact.representative && (
                                    <div className="text-sm text-gray-600">
                                      {contact.representative.name} - {contact.representative.title}
                                    </div>
                                  )}
                                </div>
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {contact.hours}
                                </span>
                              </div>
                              {contact.representative?.languages && (
                                <div className="mb-3">
                                  <div className="text-xs text-gray-500">Languages:</div>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {contact.representative.languages.map((lang) => (
                                      <span
                                        key={lang}
                                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs
                                          bg-blue-100 text-blue-700"
                                      >
                                        {lang}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {contact.description && (
                                <div className="mb-3 text-sm text-gray-600">
                                  {contact.description.split('\n').map((line, i) => {
                                    if (line.startsWith('•')) {
                                      return (
                                        <div key={i} className="flex items-start space-x-2 mt-1">
                                          <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                          <span>{line.substring(2)}</span>
                                        </div>
                                      );
                                    }
                                    return <p key={i}>{line}</p>;
                                  })}
                                </div>
                              )}
                              <div className="space-y-3">
                                {contact.phone && (
                                  <div className="flex items-center space-x-2">
                                    <a
                                      href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                                      className="flex-1 flex items-center px-4 py-2 bg-blue-600 text-white
                                        rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                      <Phone className="w-4 h-4 mr-2" />
                                      {contact.phone}
                                    </a>
                                    <button
                                      onClick={() => handleCopy(contact.phone, `phone-${index}`)}
                                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 
                                        transition-colors"
                                      title="Copy number"
                                    >
                                      {copiedText === `phone-${index}` ? (
                                        <Check className="w-4 h-4" />
                                      ) : (
                                        <Copy className="w-4 h-4" />
                                      )}
                                    </button>
                                  </div>
                                )}
                                {contact.email && (
                                  <div className="flex items-center space-x-2">
                                    <a
                                      href={`mailto:${contact.email}`}
                                      className="flex-1 flex items-center px-4 py-2 bg-purple-600 text-white
                                        rounded-lg hover:bg-purple-700 transition-colors"
                                    >
                                      <Mail className="w-4 h-4 mr-2" />
                                      {contact.email}
                                    </a>
                                    <button
                                      onClick={() => handleCopy(contact.email, `email-${index}`)}
                                      className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 
                                        transition-colors"
                                      title="Copy email"
                                    >
                                      {copiedText === `email-${index}` ? (
                                        <Check className="w-4 h-4" />
                                      ) : (
                                        <Copy className="w-4 h-4" />
                                      )}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Notice */}
          <div className="mt-8 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-700">
                <p className="font-medium mb-1">Important Notice:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>For technical issues, always contact your provider's technical support first</li>
                  <li>Sales representatives are available during business hours only</li>
                  <li>All providers offer professional installation services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};