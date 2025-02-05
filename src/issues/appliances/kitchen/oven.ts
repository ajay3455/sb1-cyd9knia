import { MaintenanceIssue } from '../../../types/issue';

export const ovenGuide: MaintenanceIssue = {
  id: 'electric-oven',
  title: 'Blomberg Single Electric Built-in Oven',
  description: 'Your suite is equipped with a Blomberg Single Electric Built-in Oven. All maintenance and repairs are the homeowner\'s responsibility.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '⚠️ Safety First',
      description: 'Before any maintenance:\n' +
        '• Ensure the oven is completely cool\n' +
        '• Turn off power at the breaker panel\n' +
        '• Never use abrasive cleaners\n' +
        '• Keep children away during cleaning'
    },
    {
      title: '🧹 Regular Cleaning',
      description: '1. Remove racks and wash separately\n' +
        '2. Wipe interior with damp cloth\n' +
        '3. Clean control panel with soft cloth\n' +
        '4. Check door seal regularly'
    },
    {
      title: '⚡ Power Issues',
      description: 'If oven won\'t turn on:\n' +
        '1. Check circuit breaker\n' +
        '2. Verify door is fully closed\n' +
        '3. Ensure controls are properly set\n' +
        '4. If problems persist, contact a qualified technician'
    }
  ],
  manualUrl: 'https://drive.google.com/file/d/1aI9IrfbjjqS1rsJOxokjypuySPRI_zfr/view',
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