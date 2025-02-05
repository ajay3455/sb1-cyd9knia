import React from 'react';
import { MaintenanceIssue } from '../../types/issue';
import { KeysFobsIssue } from './security/KeysFobsIssue';
import { AlarmPanelIssue } from './security/AlarmPanelIssue';
import { SmokeDetectorIssue } from './security/SmokeDetectorIssue';
import { UnitKeysIssue } from './security/UnitKeysIssue';
import { BuzzerIssue } from './security/BuzzerIssue';

interface SecurityIssueDetailProps {
  issue: MaintenanceIssue;
}

export const SecurityIssueDetail: React.FC<SecurityIssueDetailProps> = ({ issue }) => {
  switch (issue.id) {
    case 'keys-fobs':
      return <KeysFobsIssue issue={issue} />;
    case 'unit-keys':
      return <UnitKeysIssue issue={issue} />;
    case 'alarm-panel':
      return <AlarmPanelIssue issue={issue} />;
    case 'smoke-detectors':
      return <SmokeDetectorIssue issue={issue} />;
    case 'buzzer-enterphone':
      return <BuzzerIssue issue={issue} />;
    default:
      return null;
  }
};