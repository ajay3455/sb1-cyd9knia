import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';
import { ChevronRight, DollarSign, Clock, MapPin } from 'lucide-react';

interface FilterIssueProps {
  issue: MaintenanceIssue;
}

export const FilterIssue: React.FC<FilterIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-700">
              Regular filter replacement ensures optimal HVAC performance and air quality.
              Purchase your replacement filter from the Property Management office.
            </p>
          </div>

          {/* Filter Options */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {issue.pricing?.map((price, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-purple-100 
                  hover:border-purple-200 transition-all hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 opacity-10">
                    <img
                      src={index === 0 ? 'https://i.postimg.cc/0jzQFkfN/premium-filter.png' : 'https://i.postimg.cc/j5g2Mwy9/Basic-filter.png'}
                      alt={`${price.name} illustration`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 
                      bg-clip-text text-transparent">
                      {price.name}
                    </h4>
                    <span className="text-2xl font-bold text-purple-600">
                      ${price.amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="mb-4 relative">
                    <img
                      src={index === 0 ? 'https://i.postimg.cc/0jzQFkfN/premium-filter.png' : 'https://i.postimg.cc/j5g2Mwy9/Basic-filter.png'}
                      alt={`${price.name}`}
                      className="w-full h-32 object-contain rounded-lg bg-gray-50 p-2"
                    />
                  </div>
                  <ul className="space-y-2">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-blue-100 
                          to-purple-100 flex items-center justify-center flex-shrink-0 text-xs 
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
              <div className="bg-white rounded-xl p-4 border border-purple-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Monday to Friday, 9 AM - 5 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">5th Floor Office</span>
                  </div>
                </div>
                <a
                  href="https://linktr.ee/gloucesterpay#collection-3ad0e3ad-22c4-4637-9b98-ca283bf283cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r 
                    from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 
                    hover:to-purple-600 transition-all shadow-sm hover:shadow-md text-lg 
                    font-semibold group"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Purchase Filter Online
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Pay online and pick up your filter at the Property Management office
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};