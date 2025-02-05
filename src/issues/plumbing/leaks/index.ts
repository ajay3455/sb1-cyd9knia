import { MaintenanceIssue } from '../../../types/issue';

export const leakMaintenance: MaintenanceIssue = {
  id: 'plumbing-leak',
  title: 'Water Shut-off Guide',
  description: '🚨 EMERGENCY: For ANY water leak, contact Security IMMEDIATELY at +1 437 352 8049 (24/7)',
  responsibility: 'both',
  emergency: true,
  category: 'Plumbing',
  steps: [
    {
      title: '🚨 STEP 1: Call Security IMMEDIATELY',
      description: 'Contact Security at +1 437 352 8049 (available 24/7) before attempting to shut off water.',
    },
    {
      title: '🔍 STEP 2: Locate Water Shut-off Valve',
      description: 'Main water shut-off valves are located in one of these places:\n\n' +
        '• Cabinet below sink in main bathroom or ensuite\n' +
        '• Inside the lazy susan cabinet\n' +
        '\nNote: There is only one set of main water shut-off valves for your entire suite.',
    },
    {
      title: '🔧 STEP 3: Shut Off Water',
      description: '1. Remove the plastic cover plate\n' +
        '2. You will see 2 levers\n' +
        '3. Turn each lever so it is at a 90-degree angle to the water line\n' +
        '\n⚠️ IMPORTANT: Only attempt this if it\'s safe to do so and Security has been notified.',
    },
    {
      title: '📸 STEP 4: Document Damage',
      description: 'Take photos of any water damage for insurance purposes, but only after ensuring your safety.',
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