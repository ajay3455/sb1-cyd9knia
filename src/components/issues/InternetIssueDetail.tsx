import React from 'react';
import { MaintenanceIssue } from '../../types/issue';
import { InternetProvidersIssue } from './internet/InternetProvidersIssue';

interface InternetIssueDetailProps {
  issue: MaintenanceIssue;
}

export const InternetIssueDetail: React.FC<InternetIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'internet-providers':
      return <InternetProvidersIssue issue={issue} />;
    default:
      return null;
  }
};