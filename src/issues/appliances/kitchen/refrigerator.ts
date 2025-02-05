import { MaintenanceIssue } from '../../../types/issue';

export const refrigeratorGuide: MaintenanceIssue = {
  id: 'refrigerator',
  title: 'Blomberg Bottom Freezer Refrigerator',
  description: 'Your suite features a 22" Blomberg Built-In Bottom Freezer Refrigerator (BRFB1051FFBIN). Regular maintenance ensures optimal performance and energy efficiency.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '🌡️ Temperature Settings',
      description: 'Recommended settings:\n' +
        '• Refrigerator: 37°F (3°C)\n' +
        '• Freezer: 0°F (-18°C)\n\n' +
        'Allow 24 hours for temperature to stabilize after adjustments.'
    },
    {
      title: '🧹 Monthly Cleaning',
      description: '1. Clean interior:\n' +
        '   • Remove all items\n' +
        '   • Wipe surfaces with baking soda solution\n' +
        '   • Clean door gaskets\n\n' +
        '2. Clean condenser coils:\n' +
        '   • Vacuum or brush coils\n' +
        '   • Check for dust buildup\n\n' +
        '3. Check door seal:\n' +
        '   • Test with paper test\n' +
        '   • Clean gaskets monthly'
    },
    {
      title: '❄️ Defrosting Tips',
      description: 'Auto-defrost system maintenance:\n' +
        '• Keep drain hole clear\n' +
        '• Remove ice buildup\n' +
        '• Check defrost cycle operation\n' +
        '• Clean water collection tray'
    },
    {
      title: '⚠️ Common Issues',
      description: 'Troubleshooting guide:\n\n' +
        '1. Not Cooling Properly:\n' +
        '   • Check temperature settings\n' +
        '   • Verify door seals\n' +
        '   • Clean condenser coils\n\n' +
        '2. Unusual Noise:\n' +
        '   • Level the unit\n' +
        '   • Check fan operation\n' +
        '   • Verify normal cycling'
    }
  ],
  manualUrl: 'https://drive.google.com/file/d/1T-Y-LqHiuOayHoykp_LpLZMry0deE1kt/view',
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