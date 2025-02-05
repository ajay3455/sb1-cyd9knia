import { MaintenanceIssue } from '../../types/issue';

export const waterShutoff: MaintenanceIssue = {
  id: 'water-shutoff',
  title: 'Emergency Water Shut-off',
  description: '🚨 Learn how to quickly shut off your water supply during emergencies like leaks or floods. Every minute counts in preventing water damage to your unit and others.',
  responsibility: 'both',
  emergency: true,
  category: 'Plumbing',
  steps: [
    {
      title: '🚨 Contact Security First',
      description: 'IMMEDIATELY call Security at +1 437 352 8049 (available 24/7). Water damage can quickly spread to other units, making fast response critical.',
    },
    {
      title: '🔍 Locate the Valve',
      description: 'Why you need to know this: The water shut-off valve is your first defense against water damage. It stops water flow immediately, preventing extensive damage.\n\n' +
        'Valve locations:\n' +
        '• Under sink in main/ensuite bathroom\n' +
        '• Inside the lazy susan cabinet\n' +
        '\nNote: One set of main shut-off valves per suite.',
    },
    {
      title: '🔧 Operating the Valve',
      description: '1. Remove the plastic cover plate\n' +
        '2. Locate the two levers\n' +
        '3. Turn each lever 90 degrees to the water line\n' +
        '\n⚠️ Only attempt if safe and after notifying Security',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1LKIgVP8qiWswht1-pvqtiYepAb5_l_c4/view',
  contacts: [
    {
      name: 'Regal Security',
      role: '🚨 24/7 Emergency Response',
      phone: '+1 437 352 8049',
      hours: 'Available 24/7'
    },
    {
      name: 'Property Management',
      role: 'General Inquiries',
      phone: '(647) 368-7395',
      email: 'gloucester.on@fsresidential.com',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    }
  ]
};