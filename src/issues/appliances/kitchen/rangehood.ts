import { MaintenanceIssue } from '../../../types/issue';

export const rangehoodGuide: MaintenanceIssue = {
  id: 'range-hood',
  title: 'Faber Inca Smart Range Hood',
  description: 'Your suite is equipped with a Faber Inca Smart 28" SS Built-In Range Hood. Regular maintenance ensures proper ventilation and kitchen air quality.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '🧹 Monthly Maintenance',
      description: 'Regular cleaning routine:\n' +
        '1. Clean grease filters:\n' +
        '   • Remove filters carefully\n' +
        '   • Wash in warm soapy water\n' +
        '   • Let dry completely before reinstalling\n\n' +
        '2. Clean hood surface:\n' +
        '   • Wipe with damp cloth\n' +
        '   • Use stainless steel cleaner\n' +
        '   • Avoid abrasive materials'
    },
    {
      title: '💨 Ventilation Check',
      description: 'Performance verification:\n' +
        '• Test all fan speeds\n' +
        '• Check for unusual noise\n' +
        '• Verify proper air flow\n' +
        '• Ensure filters are seated correctly'
    },
    {
      title: '💡 Light Maintenance',
      description: 'Lighting care:\n' +
        '1. Check bulb operation\n' +
        '2. Clean light covers\n' +
        '3. Replace bulbs as needed\n' +
        '4. Verify proper wattage'
    },
    {
      title: '⚠️ Troubleshooting',
      description: 'Common issues:\n' +
        '• Poor ventilation:\n' +
        '  - Clean/replace filters\n' +
        '  - Check duct connections\n' +
        '• Noisy operation:\n' +
        '  - Verify filter installation\n' +
        '  - Check fan balance\n' +
        '• Controls not working:\n' +
        '  - Check power connection\n' +
        '  - Reset circuit breaker'
    }
  ],
  manualUrl: 'https://drive.google.com/file/d/1mH8ovR6EysotYnbAFIeYOn-8-J4twZNu/view',
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