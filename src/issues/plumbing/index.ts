import { MaintenanceIssue } from '../../types/issue';
import { waterShutoff } from './water-shutoff';
import { toiletMaintenance } from './toilet';

// Only include essential plumbing guides
export const plumbingIssues: MaintenanceIssue[] = [
  {
    ...waterShutoff,
    title: "1. Emergency Water Shut-off 🚰",
    emergency: true
  },
  {
    ...toiletMaintenance,
    title: "2. Toilet Care & Maintenance 🚽",
    emergency: false
  }
];