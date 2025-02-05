import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, AlertTriangle, FileText, Wrench, Thermometer, Settings, Info, Phone, Mail, Lightbulb, FlameKindling, UtensilsCrossed, Refrigerator, Waves, Move as Stove, Fan, Clock, MapPin, Lock, Wifi, Zap, Sofa, Shield, Battery, Key, Bell, Droplets, PenTool } from 'lucide-react';
import { issuesByCategory } from '../issues'
import { ImageModal } from '../components/modals/ImageModal';
import { EmergencyBanner } from '../components/banners/EmergencyBanner';
import { useBusinessHours } from '../hooks/useBusinessHours';

const getCategories = (category: string) => {
  if (category === 'HVAC') return [
    {
      title: "Regular Maintenance 🔧",
      description: "Regular upkeep tasks for optimal performance",
      icon: Settings,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-100",
      issues: issuesByCategory.HVAC.filter(issue => 
        ['hvac-filter', 'thermostat-battery'].includes(issue.id)
      )
    },
    {
      title: "System Troubleshooting 🌡️",
      description: "Heating and cooling system problems",
      icon: Thermometer,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      issues: issuesByCategory.HVAC.filter(issue => 
        ['no-heat-cooling', 'fan-issues'].includes(issue.id)
      )
    }
  ];
  
  if (category === 'Plumbing') return [
    {
      title: "Water Emergency Guide",
      description: "Emergency water shut-off procedures and contacts",
      icon: AlertTriangle,
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
      borderColor: "border-red-100",
      issues: issuesByCategory.Plumbing.filter(issue => issue.emergency)
    },
    {
      title: "Maintenance Guides",
      description: "Regular maintenance and troubleshooting",
      icon: Wrench,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      issues: issuesByCategory.Plumbing.filter(issue => !issue.emergency)
    }
  ];
  
  if (category === 'Security') return [
    {
      title: "Access & Keys",
      description: "FOBs, remotes, and building access",
      icon: Lock,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      issues: issuesByCategory.Security.filter(issue => 
        ['keys-fobs', 'unit-keys'].includes(issue.id)
      )
    },
    {
      title: "Security Systems",
      description: "Security panels and monitoring",
      icon: Shield,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      issues: issuesByCategory.Security.filter(issue => 
        ['alarm-panel', 'smoke-detectors', 'buzzer-enterphone'].includes(issue.id)
      )
    }
  ];

  if (category === 'Internet') return [
    {
      title: "Internet Service Providers 📡",
      description: "Internet and network connectivity options",
      icon: Wifi,
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      borderColor: "border-sky-100",
      issues: issuesByCategory.Internet.map(issue => ({
        ...issue,
        icon: Wifi
      }))
    }
  ];

  if (category === 'Electrical') return [
    {
      title: "Electrical Maintenance Guide",
      description: "Learn about electrical safety and maintenance in your unit",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-100",
      issues: issuesByCategory.Electrical
    }
  ];
  

  if (category === 'Security') return [
    {
      title: "Security & Access Guide",
      description: "Keys, FOBs, and security system information",
      icon: Lock,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      issues: issuesByCategory.Security
    }
  ];

  if (category === 'Appliances') return [
    {
      title: "Professional Repair Services",
      description: "Find our recommended appliance repair contractors",
      icon: PenTool,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50", 
      borderColor: "border-amber-100",
      issues: issuesByCategory.Appliances.filter(issue => issue.id === 'appliance-repair')
    },
    {
      title: "Kitchen Appliance Guides",
      description: "Self-help guides for your kitchen appliances",
      icon: UtensilsCrossed,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100",
      issues: issuesByCategory.Appliances.filter(issue => issue.id !== 'appliance-repair')
    }
  ];

  if (category === 'Furniture') return [
    {
      title: "Furniture Care & Maintenance 🛋️",
      description: "Furniture maintenance and repair guides",
      icon: Sofa,
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-100",
      issues: issuesByCategory.Furniture.map(issue => ({
        ...issue,
        icon: Sofa
      }))
    }
  ];

  if (category === 'General') return [
    {
      title: "General Maintenance Requests",
      description: "Contact Property Management directly for any maintenance requests or inquiries",
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      bgColor: "from-gray-50 to-slate-50",
      borderColor: "border-gray-100",
      issues: []
    }
  ];
  
  // Return empty array for other categories until they're implemented
  return [];
};

export const IssueList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = React.useState(false);
  const { isBusinessHours, getAvailabilityMessage } = useBusinessHours();
  
  const categories = getCategories(category || '');

  return (
    <main className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 issue-list-main">
      {category === 'Plumbing' && <EmergencyBanner />}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {category === 'HVAC' ? '🌡️ HVAC Maintenance Guide' : 
           category === 'Plumbing' ? '🚰 Plumbing Maintenance Guide' :
           category === 'Electrical' ? '⚡ Electrical Maintenance Guide' :
           category === 'Lighting' ? '💡 Lighting Maintenance Guide' :
           category === 'Security' ? '🔒 Security Guide' :
           category === 'Access' ? '🔑 Access & Keys Guide' :
           category === 'Appliances' ? '🔌 Appliances Guide' :
           category === 'Internet' ? '📡 Internet & Network Guide' :
           category === 'Furniture' ? '🛋️ Furniture Maintenance Guide' :
           category === 'General' ? '🛠️ General Maintenance Guide' : 'Maintenance Guide'}
        </h2>
        <p className="text-gray-600">
          {category ? `Select a category below to find solutions for your ${category} needs` : 'Select a category below'}
        </p>
      </div>

      {/* Mobile Category Navigation */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-3 px-3 mb-4">
        <div className="flex space-x-2 whitespace-nowrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                const element = document.getElementById(`category-${idx}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm transition-all
                bg-white/80 backdrop-blur-sm border border-purple-100 hover:bg-purple-50
                hover:border-purple-200 shadow-sm`}
            >
              <div className={`w-5 h-5 rounded-lg bg-gradient-to-r ${cat.color} 
                flex items-center justify-center text-white mr-2`}>
                <cat.icon className="w-3 h-3" />
              </div>
              <span className="font-medium">{cat.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
      
      {category === 'General' && (
        <div className="space-y-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Property Management</h3>
            <p className="text-gray-600 mt-2">
              For maintenance requests or general inquiries, please contact us:
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            <a
              href="tel:+16473687395"
              className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl relative
                hover:bg-blue-700 transition-all text-lg font-medium shadow-sm hover:shadow-md
                hover:scale-[1.02] active:scale-[0.98] group w-full"
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>Call Office</span>
              </div>
              {isBusinessHours ? (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center text-xs bg-emerald-500/90 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse"></span>
                  <span className="whitespace-nowrap">Staff On-Site Until 5 PM</span>
                </span>
              ) : (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center text-xs bg-gray-500/90 backdrop-blur-sm px-2 py-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 mr-1.5" />
                  <span className="whitespace-nowrap">{getAvailabilityMessage}</span>
                </span>
              )}
            </a>
            <a
              href="mailto:gloucester.on@fsresidential.com"
              className="flex items-center justify-center px-6 py-4 bg-purple-600 text-white rounded-xl 
                hover:bg-purple-700 transition-all text-lg font-medium shadow-sm hover:shadow-md
                hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-100">
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span>Monday to Friday, 9 AM - 5 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>5th Floor, 3 Gloucester St, Toronto, M4Y 0C6</span>
            </div>
          </div>
        </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-900">Emergency Situations</h3>
            </div>
            <p className="text-red-700 mb-4">
              For emergencies (flood, fire, security threats), contact Security immediately at:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+14373528049"
                className="flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-xl 
                  hover:bg-red-700 transition-all text-lg font-semibold shadow-sm hover:shadow-md
                  hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 437 352 8049
              </a>
              <a
                href="tel:+16473687397"
                className="flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-xl 
                  hover:bg-red-700 transition-all text-lg font-semibold shadow-sm hover:shadow-md
                  hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 647 368 7397
              </a>
            </div>
            <p className="mt-4 text-red-700 text-sm">
              Security is available 24/7 and will respond immediately to emergency situations.
            </p>
          </div>
        </div>
      )}
      
      {category === 'HVAC' && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                <Info className="w-7 h-7" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Before You Begin
              </h3>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100 mb-4">
                <p className="text-yellow-800 font-medium">⚠️ Important Notice</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Most HVAC maintenance and repairs fall under homeowner responsibility. If you are a tenant,
                  please contact your unit owner or landlord before proceeding with any repairs or maintenance.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-purple-100 space-y-3">
                <p className="text-gray-700 font-medium">To troubleshoot your malfunctioning heat pump, begin with these reset and maintenance steps:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                    Locate your heat pump and open the metal cover
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                    Turn off main switch housed behind the cover and leave off for 30 seconds before turning back on
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                    Check your filter - if it is very dirty you will need to replace it as this can cause performance issues
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                    If none of these steps fixed the issue, contact a qualified HVAC technician for further troubleshooting/repair
                  </li>
                </ul>
                <div 
                  onClick={() => setShowImageModal(true)}
                  className="mt-4 relative w-48 h-32 rounded-lg overflow-hidden border border-purple-200 
                    cursor-pointer group hover:border-purple-300 transition-all mx-auto"
                >
                  <img
                    src="https://i.postimg.cc/zG7yycV8/Heat-Pump-Troubleshooting.jpg"
                    alt="Heat Pump Troubleshooting Guide"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-sm">Click to view details</span>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1FktwTyh6P-1mna3Qh-r0QN2hy9h9H51N/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg 
                    hover:from-blue-600 hover:to-purple-600 transition-all mt-2"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Open Complete Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {categories.map((cat, idx) => (
        <div key={idx} id={`category-${idx}`} className="mb-6 sm:mb-8 scroll-mt-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center text-white`}>
              <cat.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          </div>
          
          {category === 'HVAC' && (
            <div className="mt-6 space-y-4">
              {cat.issues.some(issue => issue.id === 'no-heat-cooling') && (
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-blue-700 text-sm flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    If multiple units are experiencing the same HVAC issue simultaneously, please report it to security or property management as it may indicate a building-wide system problem.
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {cat.issues.map((issue) => (
              <button
                key={issue.id}
                onClick={() => navigate(`/issue/${issue.id}`)}
                className={`w-full p-4 sm:p-6 rounded-2xl shadow-sm border transition-all duration-300
                  group relative overflow-hidden text-left bg-gradient-to-br ${cat.bgColor} 
                  ${cat.borderColor} hover:shadow-lg hover:scale-[1.02] hover:bg-white/95 
                  backdrop-blur-sm active:scale-[0.98]`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 pr-6">
                      <div className="flex items-center space-x-2 mb-1.5 sm:mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${cat.color} 
                          flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {issue.id === 'electric-oven' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <FlameKindling className="w-4 h-4" />
                            </div> :
                          issue.id === 'hvac-filter' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Settings className="w-4 h-4" />
                            </div> :
                          issue.id === 'thermostat-battery' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Battery className="w-4 h-4" />
                            </div> :
                          issue.id === 'fan-issues' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Fan className="w-4 h-4" />
                            </div> :
                          issue.id === 'no-heat-cooling' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Thermometer className="w-4 h-4" />
                            </div> :
                          issue.id === 'water-shutoff' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <AlertTriangle className="w-4 h-4" />
                            </div> :
                          issue.id === 'toilet-maintenance' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Droplets className="w-4 h-4" />
                            </div> :
                          issue.id === 'keys-fobs' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Key className="w-4 h-4" />
                            </div> :
                          issue.id === 'unit-keys' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Lock className="w-4 h-4" />
                            </div> :
                          issue.id === 'alarm-panel' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Shield className="w-4 h-4" />
                            </div> :
                          issue.id === 'smoke-detectors' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Bell className="w-4 h-4" />
                            </div> :
                          issue.id === 'buzzer-enterphone' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Phone className="w-4 h-4" />
                            </div> :
                          issue.id === 'microwave' ? 
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Waves className="w-4 h-4" />
                            </div> :
                           issue.id === 'dishwasher' ? 
                            <div className="w-4 h-4 flex items-center justify-center">
                              <UtensilsCrossed className="w-4 h-4" />
                            </div> :
                          issue.id === 'electric-cooktop' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Stove className="w-4 h-4" />
                            </div> :
                          issue.id === 'range-hood' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Fan className="w-4 h-4" />
                            </div> :
                           issue.id === 'refrigerator' ? 
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Refrigerator className="w-4 h-4" />
                            </div> :
                          issue.id === 'internet-providers' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Wifi className="w-4 h-4" />
                            </div> :
                          issue.id === 'furniture-maintenance' ?
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Sofa className="w-4 h-4" />
                            </div> :
                           issue.id === 'breaker-panel' ? 
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Settings className="w-4 h-4" />
                            </div> :
                            <div className="w-4 h-4 flex items-center justify-center">
                              <Lightbulb className="w-4 h-4" />
                            </div>}
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {issue.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1">
                        {issue.description}
                      </p>
                     <div className="flex flex-wrap gap-2 mt-2">
                       {issue.steps && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                           📝 Step-by-step Guide
                         </span>
                       )}
                       {issue.videoUrl && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                           🎥 Video Tutorial
                         </span>
                       )}
                      {(issue.manualUrl || issue.manuals) && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                           📖 Manual
                         </span>
                       )}
                       {issue.faqs && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                           ❓ FAQs
                         </span>
                       )}
                       {issue.images && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                           🖼️ Images
                         </span>
                       )}
                       {issue.pricing && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                           💰 Pricing
                         </span>
                       )}
                       {issue.emergency && (
                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                           🚨 Emergency
                         </span>
                       )}
                     </div>
                    </div>
                    <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
      
      <ImageModal 
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        imageUrl="https://i.postimg.cc/zG7yycV8/Heat-Pump-Troubleshooting.jpg"
        imageAlt="Heat Pump Troubleshooting Guide"
        title="Heat Pump Troubleshooting Guide"
      />
    </main>
  );
};