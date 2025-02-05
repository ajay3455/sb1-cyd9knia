import { MaintenanceIssue } from '../../../types/issue';

export const dishwasherGuide: MaintenanceIssue = {
  id: 'dishwasher',
  title: 'Blomberg Dishwasher Guide',
  description: 'Your suite may have either an 18" slim tub (DWS51500SS1) or 24" tall tub (DW51600SS) Blomberg dishwasher. Both models require regular maintenance for optimal performance. Please refer to the appropriate manual below for your specific model.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '📖 User Manuals',
      description: 'Select the correct manual for your model:\n\n' +
        '18" Slim Tub (DWS51500SS1):\n' +
        '• ADA Compatible\n' +
        '• Top Control Design\n' +
        '• Manual available below\n\n' +
        '24" Tall Tub (DW51600SS):\n' +
        '• Standard Size\n' +
        '• Top Control Design\n' +
        '• Manual available below'
    },
    {
      title: '📝 Daily Use',
      description: '• Scrape plates before loading\n' +
        '• Don\'t pre-rinse unless necessary\n' +
        '• Load larger items on bottom rack\n' +
        '• Place cups and glasses on top rack\n' +
        '• Use recommended detergent only'
    },
    {
      title: '🧹 Monthly Maintenance',
      description: '1. Clean filter system:\n' +
        '   • Remove and rinse filter\n' +
        '   • Clean filter housing\n' +
        '   • Reassemble carefully\n\n' +
        '2. Check spray arms:\n' +
        '   • Remove any blockages\n' +
        '   • Ensure free rotation\n\n' +
        '3. Clean door seal:\n' +
        '   • Wipe with damp cloth\n' +
        '   • Check for damage'
    },
    {
      title: '⚠️ Troubleshooting',
      description: 'Common issues:\n\n' +
        '1. Poor Cleaning:\n' +
        '   • Check water temperature\n' +
        '   • Verify filter is clean\n' +
        '   • Ensure proper loading\n\n' +
        '2. Not Draining:\n' +
        '   • Clean filter\n' +
        '   • Check drain hose\n' +
        '   • Run garbage disposal'
    }
  ],
  manuals: [
    {
      name: '18" Slim Tub Manual (DWS51500SS1)',
      url: 'https://drive.google.com/file/d/1VyPOPecILKqnWPEii8AZzgQxQ2xZtgwY/view'
    },
    {
      name: '24" Tall Tub Manual (DW51600SS)',
      url: 'https://drive.google.com/file/d/1_0lsYJtiefiyJivz2-MmPczEPmA1JePD/view'
    }
  ],
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