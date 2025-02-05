import { MaintenanceIssue } from '../../../types/issue';

export const cooktopGuide: MaintenanceIssue = {
  id: 'electric-cooktop',
  title: 'Blomberg Touch Control Electric Cooktop',
  description: 'Your suite features a 24-inch Blomberg Touch Control Electric Cooktop (CTE24402). Regular maintenance ensures safe operation and longevity.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '⚠️ Safety Guidelines',
      description: 'Critical safety measures:\n' +
        '• Never leave cooktop unattended while in use\n' +
        '• Keep flammable materials away\n' +
        '• Use appropriate cookware sizes\n' +
        '• Allow surface to cool before cleaning'
    },
    {
      title: '🧹 Cleaning & Care',
      description: 'Maintenance tips:\n' +
        '1. Clean spills immediately after cooling\n' +
        '2. Use ceramic cooktop cleaner\n' +
        '3. Avoid sliding cookware\n' +
        '4. Remove burned-on residue with scraper\n' +
        '5. Polish surface after cleaning'
    },
    {
      title: '⚡ Troubleshooting',
      description: 'Common issues:\n' +
        '• Touch controls not responding:\n' +
        '  - Check if controls are locked\n' +
        '  - Clean control panel\n' +
        '• Heating issues:\n' +
        '  - Verify proper cookware\n' +
        '  - Check for error codes\n' +
        '• Strange noises:\n' +
        '  - Normal operation sounds\n' +
        '  - Fan cooling system'
    }
  ],
  manualUrl: 'https://drive.google.com/file/d/1OpQTl3nlke15nHrG2N_IGYvqYW1nNLWb/view',
  contacts: [
    {
      name: 'Property Management',
      role: 'General Inquiries',
      phone: '(647) 368-7395',
      email: 'gloucester.on@fsresidential.com',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    }
  ]
};