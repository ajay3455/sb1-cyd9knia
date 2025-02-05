import React from 'react';
import { MaintenanceIssue } from '../../types/issue';
import { GeneralInquiryIssue } from './general/GeneralInquiryIssue';

interface GeneralIssueDetailProps {
  issue: MaintenanceIssue;
}

export const GeneralIssueDetail: React.FC<GeneralIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'general-inquiry':
      return <GeneralInquiryIssue issue={issue} />;
    default:
      return null;
  }
};