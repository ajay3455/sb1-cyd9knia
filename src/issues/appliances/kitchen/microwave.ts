import { MaintenanceIssue } from '../../../types/issue';

export const microwaveGuide: MaintenanceIssue = {
  id: 'microwave',
  title: 'Panasonic Inverter Microwave (NNST663S)',
  description: 'Your suite features a Panasonic Inverter Microwave Oven. Regular maintenance helps ensure safe and efficient operation.',
  responsibility: 'owner',
  emergency: false,
  category: 'Appliances',
  steps: [
    {
      title: '🧹 Regular Cleaning',
      description: '1. Clean interior after each use\n' +
        '2. Wipe exterior with damp cloth\n' +
        '3. Clean turntable regularly\n' +
        '4. Check door seal for food debris'
    },
    {
      title: '⚠️ Safety Checks',
      description: 'Monthly safety inspection:\n' +
        '• Check door closes properly\n' +
        '• Verify door seals are intact\n' +
        '• Ensure turntable rotates freely\n' +
        '• Test all control buttons'
    },
    {
      title: '❌ Common Issues',
      description: 'If microwave won\'t operate:\n' +
        '1. Verify power connection\n' +
        '2. Check if door is fully closed\n' +
        '3. Ensure timer is set\n' +
        '4. Contact repair service if problems persist'
    }
  ],
  manualUrl: 'https://drive.google.com/file/d/1UnFug3eJML4ozb-D_iBxG4Ei5o1H-jHJ/view',
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