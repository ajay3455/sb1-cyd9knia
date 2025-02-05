import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface ToiletIssueProps {
  issue: MaintenanceIssue;
}

export const ToiletIssue: React.FC<ToiletIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            ⚠️ Only flush toilet paper. Other items may cause clogs and invalidate your warranty.
          </p>
        </div>
      }
    />
  );
};