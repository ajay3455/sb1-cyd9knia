import React from 'react';
import { Wrench, Mail, Globe, Phone, Clock, Shield, PenTool as Tool, CheckCircle2 } from 'lucide-react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface FurnitureIssueDetailProps {
  issue: MaintenanceIssue;
}

export const FurnitureIssueDetail: React.FC<FurnitureIssueDetailProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="space-y-6">
          {/* Warning Banner */}
          <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-100">
            <p className="text-sm sm:text-base text-amber-700">
              ⚠️ Important: All furniture maintenance, repairs, and replacements are the homeowner's responsibility. 
              Property management cannot assist with furniture-related issues.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-amber-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Licensed & Insured</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Professional service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Flexible Hours</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Evening & weekend</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Satisfaction</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Handyman Service Card */}
          <div className="bg-white rounded-xl border border-amber-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Nailed it Toronto</h3>
                  <p className="text-gray-600 text-sm mt-1">Your friendly local Handyman</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                  Available Now
                </span>
              </div>

              {/* Services Grid */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Services Include:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Furniture Assembly', 'TV Installation', 'Wardrobes',
                    'Electrical', 'Plumbing', 'Carpentry',
                    'Drywall Repairs', 'Flooring', 'Backsplash'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 bg-amber-50/50 rounded-lg p-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <a
                  href="mailto:naileditgta@gmail.com"
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 
                    text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-sm 
                    hover:shadow-md text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
                <a
                  href="https://www.nailedittoronto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-white border border-amber-200 
                    text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm sm:text-base"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Book Online
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Tool className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Why Choose Our Partner?</h3>
                <p className="text-sm text-gray-600">
                  Our recommended handyman service is carefully selected based on their expertise, reliability, 
                  and quality of work. They specialize in furniture assembly, repairs, and various home improvement tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};