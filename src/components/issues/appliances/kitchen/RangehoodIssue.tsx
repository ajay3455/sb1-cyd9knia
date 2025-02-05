import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';

interface RangehoodIssueProps {
  issue: MaintenanceIssue;
}

export const RangehoodIssue: React.FC<RangehoodIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Regular cleaning of grease filters ensures proper ventilation and reduces fire hazards.
            Clean filters monthly for optimal performance.
          </p>
        </div>
      }
    />
  );
};