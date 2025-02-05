import React from 'react';
import { MaintenanceIssue } from '../../../../types/issue';
import { BaseIssueDetail } from '../../BaseIssueDetail';
import { Wrench } from 'lucide-react';

interface CooktopIssueProps {
  issue: MaintenanceIssue;
}

export const CooktopIssue: React.FC<CooktopIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 mb-6">
          <p className="text-sm text-orange-700">
            ⚠️ For your safety, never leave the cooktop unattended while in use and keep 
            flammable materials away from the cooking surface.
          </p>
        </div>
      }
    />
  );
};