import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface BuzzerIssueProps {
  issue: MaintenanceIssue;
}

export const BuzzerIssue: React.FC<BuzzerIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            For buzzer system registration or updates, please visit the Property Management office. 
            Security can assist with testing and troubleshooting your buzzer system 24/7.
          </p>
        </div>
      }
    />
  );
};