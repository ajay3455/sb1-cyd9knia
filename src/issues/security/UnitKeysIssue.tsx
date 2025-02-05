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
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-6">
          <p className="text-sm text-amber-700">
            ⚠️ Important: For security reasons, only authorized locksmiths can cut keys for the building.
            Please contact Property Management for key cutting authorization and approved locksmith information.
          </p>
        </div>
      }
    />
  );
};