import React from 'react';
import { Clock, FileText, AlertTriangle, ChevronDown, Phone, Mail, Copy, Check, ChevronRight, AlertCircle, X, MessageCircle, Calendar } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { MaintenanceIssue } from '../../types/issue';
import { useBusinessHours } from '../../hooks/useBusinessHours';

interface BaseIssueDetailProps {
  issue: MaintenanceIssue;
  beforeContent?: React.ReactNode;
  afterContent?: React.ReactNode;
  openSection?: string | null;
  onSectionChange?: (section: string | null) => void;
}

export const BaseIssueDetail: React.FC<BaseIssueDetailProps> = ({ 
  issue,
  beforeContent,
  afterContent,
  openSection: externalOpenSection,
  onSectionChange
}) => {
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [pendingAction, setPendingAction] = React.useState<{ type: 'phone' | 'email', value: string } | null>(null);
  const [internalOpenSection, setInternalOpenSection] = React.useState<string | null>('video');
  const [copiedText, setCopiedText] = React.useState<string | null>(null);
  const [currentTime] = React.useState(() => new Date());
  const [showImageModal, setShowImageModal] = React.useState(false);
  const [imageScale, setImageScale] = React.useState(1);
  const [isDragging, setIsDragging] = React.useState(false);
  const [selectedFaq, setSelectedFaq] = React.useState<string | null>(null);
  const [showFaqs, setShowFaqs] = React.useState(true);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = React.useState({ x: 0, y: 0 });
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [showChatbot, setShowChatbot] = React.useState(false);
  const [showBusinessHoursWarning, setShowBusinessHoursWarning] = React.useState(false);
  const [pendingPhoneNumber, setPendingPhoneNumber] = React.useState<string | null>(null);
  const { isBusinessHours, getAvailabilityMessage } = useBusinessHours();

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(1, imageScale + delta), 4);
    setImageScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setImageScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const openSection = externalOpenSection ?? internalOpenSection;
  const setOpenSection = onSectionChange ?? setInternalOpenSection;

  const isSecuritySupervisorAvailable = React.useMemo(() => {
    const hours = currentTime.getHours();
    const day = currentTime.getDay();
    return day >= 1 && day <= 5 && hours >= 8 && hours < 16;
  }, [currentTime]);

  const isPropertyManagementAvailable = React.useMemo(() => {
    const hours = currentTime.getHours();
    const day = currentTime.getDay();
    return day >= 1 && day <= 5 && hours >= 9 && hours < 17;
  }, [currentTime]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  const handleContactClick = (type: 'phone' | 'email', value: string) => {
    // Check if this is a property management contact
    const isPropertyManagement = issue.contacts.some(contact => 
      contact.phone === value && 
      contact.name.toLowerCase().includes('property management')
    );

    // If it's property management and outside business hours, show warning
    if (type === 'phone' && isPropertyManagement && !isPropertyManagementAvailable) {
      setShowBusinessHoursWarning(true);
      setPendingPhoneNumber(value);
      return;
    }

    if (issue.responsibility === 'owner') {
      setShowConfirmDialog(true);
      setPendingAction({ type, value });
    } else {
      if (type === 'phone') {
        window.location.href = `tel:${value}`;
      } else {
        window.location.href = `mailto:${value}`;
      }
    }
  };

  const handleConfirm = () => {
    if (pendingAction) {
      if (pendingAction.type === 'phone') {
        window.location.href = `tel:${pendingAction.value}`;
      } else {
        window.location.href = `mailto:${pendingAction.value}`;
      }
    }
    setShowConfirmDialog(false);
    setPendingAction(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleStepCompletion = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index].sort((a, b) => a - b)
    );
  };


  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 issue-detail-main">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
        <div className={`p-6 ${issue.id === 'internet-providers' ? 'space-y-8' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{issue.title}</h1>
          </div>

          {beforeContent}
          
          <p className="text-gray-600 mb-6">{issue.description}</p>

          {/* Images Section */}
          {issue.images && issue.images.length > 0 && (
            <div className="mb-6 space-y-4">
              {issue.images.map((image, index) => (
                <div key={index} className="bg-white rounded-xl border border-purple-100 overflow-hidden">
                  <div className="p-4 border-b border-purple-100">
                    <h4 className="font-medium text-gray-900">{image.caption}</h4>
                  </div>
                  <div className="p-4">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className={`rounded-lg ${image.className || 'w-full'}`}
                    />
                    {image.details && (
                      <p className="mt-3 text-sm text-gray-600">{image.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Manual Section */}
          {(issue.manualUrl || issue.manuals) && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                User Manual
              </h3>
              {issue.manuals ? (
                <div className="space-y-4">
                  {issue.manuals.map((manual, index) => (
                    <div key={index} className="bg-white rounded-xl border border-purple-100 overflow-hidden">
                      <div className="p-4 border-b border-purple-100">
                        <h4 className="font-medium text-gray-900">{manual.name}</h4>
                      </div>
                      <div className="aspect-[4/3]">
                        <iframe
                          src={manual.url.replace('view', 'preview')}
                          className="w-full h-full"
                          allow="autoplay"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-purple-100 shadow-sm">
                  <iframe
                    src={issue.manualUrl!.replace('view', 'preview')}
                    className="w-full h-full"
                    allow="autoplay"
                  />
                </div>
              )}
            </div>
          )}

          {/* Video Section */}
          {issue.videoUrl && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation Guide</h3>
              <iframe
                src={issue.videoUrl.replace('view', 'preview')}
                className="w-full aspect-video rounded-xl shadow-sm border border-purple-100"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="space-y-4">
            {/* Steps Section */}
            <div className="border border-purple-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('steps')}
                className="w-full px-4 py-3 bg-purple-50 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <h2 className="text-lg font-semibold text-purple-900">Steps to Resolve 📝</h2>
                  {completedSteps.length > 0 && (
                    <span className="text-sm text-purple-600">
                      {completedSteps.length}/{issue.steps.length} completed
                    </span>
                  )}
                </div>
                <ChevronDown className={`w-5 h-5 text-purple-600 transform transition-transform ${
                  openSection === 'steps' ? 'rotate-180' : ''
                }`} />
              </button>
              {openSection === 'steps' && (
                <div className="p-4 space-y-4">
                  {issue.steps.map((step, index) => (
                    <div key={index} className="bg-purple-50/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 
                            transition-colors ${
                              completedSteps.includes(index)
                                ? 'bg-green-100 text-green-600'
                                : 'bg-purple-100 text-purple-600'
                            }`}>
                            {completedSteps.includes(index) ? '✓' : index + 1}
                          </span>
                          <h3 className="text-base font-medium text-gray-900">{step.title}</h3>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStepCompletion(index);
                          }}
                          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                            completedSteps.includes(index)
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {completedSteps.includes(index) ? 'Completed' : 'Mark Complete'}
                        </button>
                      </div>
                      <div className="text-gray-600 ml-9">
                        {step.description.split('\n').map((line, i) => {
                          if (line.startsWith('•')) {
                            return (
                              <div key={i} className="flex items-start space-x-2 mt-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                <p>{line.substring(2)}</p>
                              </div>
                            );
                          } else if (line.match(/^\d+\./)) {
                            return (
                              <div key={i} className="flex items-start space-x-2 mt-1.5">
                                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs flex-shrink-0">
                                  {line.split('.')[0]}
                                </span>
                                <p>{line.substring(line.indexOf('.') + 2)}</p>
                              </div>
                            );
                          } else if (line.trim() === '') {
                            return <div key={i} className="h-2" />;
                          } else {
                            return <p key={i} className="mt-1.5">{line}</p>;
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contacts */}
            {issue.contacts.length > 0 && (
              <div className="border border-purple-100 rounded-xl overflow-hidden">
                <button
                  id="contacts-section"
                  onClick={() => toggleSection('contacts')}
                  className="w-full px-4 py-3 bg-purple-50 flex items-center justify-between text-left"
                >
                  <h2 className="text-lg font-semibold text-purple-900">Contact Information 📞</h2>
                  <ChevronDown className={`w-5 h-5 text-purple-600 transform transition-transform ${
                    openSection === 'contacts' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openSection === 'contacts' && (
                  <div className="p-4 space-y-4">
                    {issue.contacts.map((contact, index) => (
                      <div key={index} className={`rounded-xl p-4 ${
                        contact.name === 'Merrit HVAC' 
                          ? 'bg-emerald-50/50 border border-emerald-100' 
                          : 'bg-purple-50/50'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-gray-900 flex items-center">
                              {contact.name}
                              {contact.name === 'Merrit HVAC' && (
                                <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                                  Recommended Contractor
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">{contact.role}</div>
                            {contact.name === 'Merrit HVAC' && (
                              <div className="mt-3">
                                <p className="text-sm text-emerald-600 mb-2">
                                  Our trusted HVAC partner for reliable service and quality repairs
                                </p>
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowImageModal(true);
                                  }}
                                  className="relative w-48 h-32 rounded-lg overflow-hidden border border-emerald-200 
                                    cursor-pointer group hover:border-emerald-300 transition-all"
                                >
                                  <img
                                    src="https://i.postimg.cc/BnVhfM4Q/Heat-Pump-Service-Provider.jpg"
                                    alt="Merrit HVAC Service Provider Certificate"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                                    <span className="text-white text-sm">Click to view details</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          {contact.name === 'Property Management' && (
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              isPropertyManagementAvailable 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              <span className={`w-2 h-2 mr-1.5 rounded-full ${
                                isPropertyManagementAvailable ? 'bg-green-500' : 'bg-gray-500'
                              }`}></span>
                              {isPropertyManagementAvailable ? 'Staff On-Site' : 'Returns 9 AM Tomorrow'}
                            </span>
                          )}
                        </div>
                        <div className={`mt-3 pt-3 space-y-2 border-t ${
                          contact.name === 'Merrit HVAC' ? 'border-emerald-100' : 'border-purple-100'
                        }`}>
                          {contact.hours && (
                            <p className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {contact.hours}
                            </p>
                          )}
                          <div className="flex flex-col space-y-2">
                            {contact.phone && (
                              <div className="flex items-center space-x-2">
                                <a
                                  onClick={() => handleContactClick('phone', contact.phone!)}
                                  className={`flex-1 inline-flex items-center justify-center px-4 py-2 text-white rounded-lg transition-colors ${
                                    contact.name === 'Merrit HVAC'
                                      ? 'bg-emerald-600 hover:bg-emerald-700'
                                      : 'bg-blue-600 hover:bg-blue-700'
                                  } cursor-pointer`}
                                >
                                  <Phone className="w-4 h-4 mr-2" />
                                  {contact.phone}
                                </a>
                                <button
                                  onClick={() => handleCopy(contact.phone!, `phone-${index}`)}
                                  className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
                                    contact.name === 'Merrit HVAC'
                                      ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                  }`}
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
                                  onClick={() => handleContactClick('email', contact.email!)}
                                  className={`flex-1 inline-flex items-center justify-center px-2 sm:px-4 py-2 text-white rounded-lg transition-colors text-xs sm:text-sm break-all ${
                                    contact.name === 'Merrit HVAC'
                                      ? 'bg-emerald-600 hover:bg-emerald-700'
                                      : 'bg-purple-600 hover:bg-purple-700'
                                  } cursor-pointer`}
                                >
                                  <Mail className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0" />
                                  {contact.email}
                                </a>
                                <button
                                  onClick={() => handleCopy(contact.email!, `email-${index}`)}
                                  className={`inline-flex items-center justify-center p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 ${
                                    contact.name === 'Merrit HVAC'
                                      ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                                      : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                  }`}
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
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* FAQs Section */}
          {issue.faqs && (
            <div className="mt-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 overflow-hidden">
                <button
                  onClick={() => setShowFaqs(!showFaqs)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${
                    showFaqs ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`space-y-4 transition-all duration-300 ease-in-out ${
                  showFaqs ? 'p-6' : 'h-0 p-0 overflow-hidden'
                }`}>
                  {issue.faqs.map((faq) => (
                    <div 
                      key={faq.id}
                      id={`faq-${faq.id}`}
                      className="rounded-lg overflow-hidden border border-purple-100 bg-white/80 backdrop-blur-sm"
                    >
                      <button
                        onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                        className="w-full px-4 py-3 hover:bg-purple-50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
                          selectedFaq === faq.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${
                        selectedFaq === faq.id
                          ? 'max-h-96 p-4 bg-gradient-to-br from-purple-50/50 to-indigo-50/50'
                          : 'max-h-0 p-0 overflow-hidden'
                      }`}>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {afterContent}
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 max-w-3xl w-full shadow-xl animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Heat Pump Service Provider Certificate
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetZoom}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 
                    hover:text-gray-900 text-sm flex items-center"
                >
                  <span className="mr-1">Reset</span>
                  {Math.round(imageScale * 100)}%
                </button>
                <button
                  onClick={() => setShowImageModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div 
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-move bg-gray-900"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src="https://i.postimg.cc/BnVhfM4Q/Heat-Pump-Service-Provider.jpg"
                alt="Merrit HVAC Service Provider Certificate"
                className="w-full h-full object-contain transition-transform select-none"
                style={{
                  transform: `scale(${imageScale}) translate(${position.x / imageScale}px, ${position.y / imageScale}px)`,
                  transformOrigin: 'center',
                }}
                draggable="false"
              />
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <button
                onClick={() => setImageScale(Math.max(1, imageScale - 0.5))}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                disabled={imageScale <= 1}
              >
                Zoom Out
              </button>
              <button
                onClick={() => setImageScale(Math.min(4, imageScale + 0.5))}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                disabled={imageScale >= 4}
              >
                Zoom In
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Official Heat Pump Service Provider Certificate
            </p>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Use mouse wheel to zoom or drag to pan when zoomed
            </p>
          </div>
        </div>
      )}
      
      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl animate-in fade-in duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Homeowner Responsibility Notice
                </h3>
                <div className="text-gray-600 space-y-2 mb-6">
                  <p>This issue falls under homeowner responsibility. Please note:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>If you are an owner, you will need to find a licensed professional contractor</li>
                    <li>If you are a tenant, you must contact your unit owner</li>
                  </ul>
                  <p className="text-sm text-amber-600 mt-4">
                    Would you still like to proceed with contacting property management?
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleConfirm}
                    className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 
                      transition-colors font-medium"
                  >
                    Yes, Proceed
                  </button>
                  <button
                    onClick={() => {
                      setShowConfirmDialog(false);
                      setPendingAction(null);
                    }}
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

      {/* Business Hours Warning Dialog */}
      {showBusinessHoursWarning && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl animate-in fade-in duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Outside Business Hours
                </h3>
                <div className="text-gray-600 space-y-2 mb-6">
                  <p>Property Management is currently unavailable.</p>
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 space-y-2">
                    <div className="flex items-center text-amber-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Monday to Friday, 9 AM - 5 PM</span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{getAvailabilityMessage}</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    For immediate assistance with urgent matters, please contact Security at +1 437 352 8049 (available 24/7).
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <a
                    href="mailto:gloucester.on@fsresidential.com"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg 
                      hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Instead
                  </a>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        if (pendingPhoneNumber) {
                          window.location.href = `tel:${pendingPhoneNumber}`;
                        }
                        setShowBusinessHoursWarning(false);
                        setPendingPhoneNumber(null);
                      }}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 
                        transition-colors font-medium"
                    >
                      Call Anyway
                    </button>
                    <button
                      onClick={() => {
                        setShowBusinessHoursWarning(false);
                        setPendingPhoneNumber(null);
                      }}
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
        </div>
      )}

      {/* Chatbot Widget */}
      <button
        onClick={() => setShowChatbot(prev => !prev)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-full shadow-lg flex items-center justify-center text-white hover:from-blue-600 
          hover:to-purple-600 transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border 
          border-purple-100 flex flex-col animate-in slide-in-from-bottom">
          <div className="p-3 border-b border-purple-100 bg-gradient-to-r from-indigo-500 to-purple-500 
            rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Maintenance Assistant</h3>
                <p className="text-white/80 text-xs">Powered by Gloucester Helper</p>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};