import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface WaterShutoffIssueProps {
  issue: MaintenanceIssue;
}

export const WaterShutoffIssue: React.FC<WaterShutoffIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-red-50 rounded-xl p-4 border border-red-100 mb-6">
          <p className="text-sm text-red-700 font-medium">
            ⚠️ EMERGENCY: For ANY water leak, contact Security IMMEDIATELY at +1 437 352 8049 (24/7)
          </p>
        </div>
      }
    />
  );
};