import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface FanIssueProps {
  issue: MaintenanceIssue;
}

export const FanIssue: React.FC<FanIssueProps> = ({ issue }) => {
  const issueWithoutManual = { ...issue };
  delete issueWithoutManual.manualUrl;

  return (
    <BaseIssueDetail
      issue={issueWithoutManual}
      beforeContent={<>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Fan operation can be adjusted through your thermostat settings. If experiencing persistent noise issues,
            professional inspection may be required to prevent damage to your HVAC system.
          </p>
        </div>
        {issue.manualUrl && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Thermostat Manual</h3>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-purple-100 shadow-sm">
              <iframe
                src={issue.manualUrl.replace('view', 'preview')}
                className="w-full h-full"
                allow="autoplay"
              />
            </div>
          </div>
        )}
      </>}
    />
  );
};