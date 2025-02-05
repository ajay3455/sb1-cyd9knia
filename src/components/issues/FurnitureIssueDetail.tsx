import React from 'react';
import { MaintenanceIssue } from '../../types/issue';
import { FurnitureIssueDetail as FurnitureDetail } from './furniture/FurnitureIssueDetail';

interface FurnitureIssueDetailProps {
  issue: MaintenanceIssue;
}

export const FurnitureIssueDetail: React.FC<FurnitureIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'furniture-maintenance':
      return <FurnitureDetail issue={issue} />;
    default:
      return null;
  }
};