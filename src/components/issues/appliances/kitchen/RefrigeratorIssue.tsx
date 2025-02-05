import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';

interface RefrigeratorIssueProps {
  issue: MaintenanceIssue;
}

export const RefrigeratorIssue: React.FC<RefrigeratorIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Regular cleaning of condenser coils and proper temperature settings ensure 
            energy efficiency and optimal food preservation.
          </p>
        </div>
      }
    />
  );
};