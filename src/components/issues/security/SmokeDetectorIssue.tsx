import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface SmokeDetectorIssueProps {
  issue: MaintenanceIssue;
}

export const SmokeDetectorIssue: React.FC<SmokeDetectorIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            For smoke detector or carbon monoxide alarm issues, please contact Security immediately. 
            These are critical life safety devices that require proper maintenance and testing.
          </p>
        </div>
      }
    />
  );
};