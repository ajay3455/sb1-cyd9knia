import React from 'react';
import { MaintenanceIssue } from '../../types/issue';
import { OvenIssue } from './appliances/kitchen/OvenIssue';
import { CooktopIssue } from './appliances/kitchen/CooktopIssue';
import { RangehoodIssue } from './appliances/kitchen/RangehoodIssue';
import { MicrowaveIssue } from './appliances/kitchen/MicrowaveIssue';
import { DishwasherIssue } from './appliances/kitchen/DishwasherIssue';
import { RefrigeratorIssue } from './appliances/kitchen/RefrigeratorIssue';
import { ApplianceRepairDetail } from './appliances/ApplianceRepairDetail';

interface ApplianceIssueDetailProps {
  issue: MaintenanceIssue;
}

export const ApplianceIssueDetail: React.FC<ApplianceIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'appliance-repair':
      return <ApplianceRepairDetail issue={issue} />;
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