import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';

interface MicrowaveIssueProps {
  issue: MaintenanceIssue;
}

export const MicrowaveIssue: React.FC<MicrowaveIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Monthly safety checks of door seals and controls help ensure safe operation.
            Clean the interior after each use to maintain hygiene.
          </p>
        </div>
      }
    />
  );
};