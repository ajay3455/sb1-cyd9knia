import { MaintenanceIssue } from '../../types/issue';
import { breakerPanel } from './breaker-panel';
import { lightBulb } from './light-bulb';

export const electricalIssues: MaintenanceIssue[] = [
  {
    ...breakerPanel,
    title: "1. Breaker Panel Guide",
    emergency: false
  },
  {
    ...lightBulb,
    title: "2. Light Bulb Installation",
    emergency: false
  }
];