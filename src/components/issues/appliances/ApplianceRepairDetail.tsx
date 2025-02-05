import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { Wrench, Phone, Globe, Clock, Shield, PenTool, CheckCircle2 } from 'lucide-react';

interface ApplianceRepairDetailProps {
  issue: MaintenanceIssue;
}

export const ApplianceRepairDetail: React.FC<ApplianceRepairDetailProps> = ({ issue }) => {
  return (
    <main className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center mb-3 sm:mb-4">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Trusted Appliance Repair Partners</h1>
            <p className="text-sm sm:text-base text-gray-600">
              Our recommended contractors for reliable appliance repair services
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl p-3 sm:p-4 border border-amber-100 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">All contractors are fully certified</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">24/7 Service</h3>
                  <p className="text-sm text-gray-600">Emergency repairs available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">Quality Guaranteed</h3>
                  <p className="text-sm text-gray-600">Professional workmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contractors Grid */}
          <div className="grid gap-6">
            {issue.contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl border border-amber-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{contact.role}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                      {contact.hours}
                    </span>
                  </div>

                  {/* Service Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Same-day Service</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Licensed Technicians</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Warranty Service</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Emergency Repairs</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                    <a
                      href={`tel:${contact.phone?.replace(/[^0-9+]/g, '')}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 
                        text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-sm 
                        hover:shadow-md"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm sm:text-base">{contact.phone}</span>
                    </a>
                    <a
                      href={`https://${issue.steps[index].description.split('Website: ')[1].split('\n')[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-white border border-amber-200 
                        text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm sm:text-base"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1">Why Choose Our Partners?</h3>
                <p className="text-sm text-gray-600">
                  Our recommended contractors are carefully selected based on their expertise, reliability, and quality of service. 
                  They specialize in all major appliance brands and provide comprehensive repair services with warranty coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};