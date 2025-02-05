import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface GeneralInquiryIssueProps {
  issue: MaintenanceIssue;
}

export const GeneralInquiryIssue: React.FC<GeneralInquiryIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
          <p className="text-sm text-gray-700">
            For maintenance requests or issues not covered in our guides, please contact
            Property Management directly during business hours.
          </p>
        </div>
      }
    />
  );
};