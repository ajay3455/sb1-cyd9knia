import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';

interface OvenIssueProps {
  issue: MaintenanceIssue;
}

export const OvenIssue: React.FC<OvenIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 mb-6">
          <p className="text-sm text-orange-700">
            ⚠️ Always ensure the oven is completely cool and power is turned off at the breaker 
            before performing any maintenance.
          </p>
        </div>
      }
    />
  );
};