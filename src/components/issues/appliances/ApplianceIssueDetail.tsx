import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { OvenIssue } from './kitchen/OvenIssue';
import { CooktopIssue } from './kitchen/CooktopIssue';
import { RangehoodIssue } from './kitchen/RangehoodIssue';
import { MicrowaveIssue } from './kitchen/MicrowaveIssue';
import { DishwasherIssue } from './kitchen/DishwasherIssue';
import { RefrigeratorIssue } from './kitchen/RefrigeratorIssue';

interface ApplianceIssueDetailProps {
  issue: MaintenanceIssue;
}

export const ApplianceIssueDetail: React.FC<ApplianceIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'electric-oven':
      return <OvenIssue issue={issue} />;
    case 'electric-cooktop':
      return <CooktopIssue issue={issue} />;
    case 'range-hood':
      return <RangehoodIssue issue={issue} />;
    case 'microwave':
      return <MicrowaveIssue issue={issue} />;
    case 'dishwasher':
      return <DishwasherIssue issue={issue} />;
    case 'refrigerator':
      return <RefrigeratorIssue issue={issue} />;
    default:
      return null;
  }
};