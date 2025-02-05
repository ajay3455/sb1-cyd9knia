import React from 'react';
import { FileText, AlertTriangle, Info } from 'lucide-react';
import { MaintenanceIssue } from '../../types/issue';
import { FilterIssue } from './hvac/FilterIssue';
import { ThermostatIssue } from './hvac/ThermostatIssue';
import { NoHeatCoolingIssue } from './hvac/NoHeatCoolingIssue';
import { FanIssue } from './hvac/FanIssue';

interface HVACIssueDetailProps {
  issue: MaintenanceIssue;
}

export const HVACIssueDetail: React.FC<HVACIssueDetailProps> = ({ issue }) => {
  const BeforeContent = () => (
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
            <div className="mt-6 aspect-[8.5/11] rounded-xl overflow-hidden border border-purple-100 shadow-sm">
              <iframe
                src="https://drive.google.com/file/d/1FktwTyh6P-1mna3Qh-r0QN2hy9h9H51N/preview"
                className="w-full h-full"
                allow="autoplay"
              />
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
  );

  switch (issue.id) {
    case 'hvac-filter':
      return <FilterIssue issue={issue} />;
    case 'thermostat-battery':
      return <ThermostatIssue issue={issue} />;
    case 'no-heat-cooling':
      return <NoHeatCoolingIssue issue={issue} />;
    case 'fan-issues':
      return <FanIssue issue={issue} />;
    default:
      return null;
  }
};