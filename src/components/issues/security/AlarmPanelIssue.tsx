import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface AlarmPanelIssueProps {
  issue: MaintenanceIssue;
}

export const AlarmPanelIssue: React.FC<AlarmPanelIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            For security system setup, changes, or troubleshooting, please contact Security or Property Management. 
            They will assist you with system configuration and provide necessary documentation.
          </p>
        </div>
      }
    />
  );
};