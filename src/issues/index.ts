import { hvacIssues } from './hvac';
import { plumbingIssues } from './plumbing';
import { electricalIssues } from './electrical';
import { lightingIssues } from './lighting';
import { securityIssues } from './security';
import { accessIssues } from './access';
import { applianceIssues } from './appliances';
import { internetIssues } from './internet';
import { furnitureIssues } from './furniture';
import { generalIssues } from './general';

export const issuesByCategory = {
  HVAC: hvacIssues,
  Plumbing: plumbingIssues,
  Electrical: electricalIssues,
  Lighting: lightingIssues,
  Security: securityIssues,
  Access: accessIssues,
  Appliances: applianceIssues,
  Internet: internetIssues,
  Furniture: furnitureIssues,
  General: generalIssues,
};