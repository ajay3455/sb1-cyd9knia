import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface UnitKeysIssueProps {
  issue: MaintenanceIssue;
}

export const UnitKeysIssue: React.FC<UnitKeysIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            For key replacement requests, please contact Property Management. They will provide authorization 
            and coordinate with approved locksmiths to ensure building security is maintained.
          </p>
        </div>
      }
    />
  );
};