import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';

interface DishwasherIssueProps {
  issue: MaintenanceIssue;
}

export const DishwasherIssue: React.FC<DishwasherIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Monthly filter cleaning and proper loading practices will ensure optimal performance
            and prevent drainage issues.
          </p>
        </div>
      }
    />
  );
};