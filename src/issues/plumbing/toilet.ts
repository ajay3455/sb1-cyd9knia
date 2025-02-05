import { MaintenanceIssue } from '../../types/issue';

export const toiletMaintenance: MaintenanceIssue = {
  id: 'toilet-maintenance',
  title: 'Toilet Care & Troubleshooting',
  description: 'Learn how to prevent and fix common toilet problems. Proper maintenance helps avoid costly repairs and water damage.',
  responsibility: 'owner',
  emergency: false,
  category: 'Plumbing',
  steps: [
    {
      title: '⚠️ Important Guidelines',
      description: 'Only flush toilet paper. Other items may cause clogs and invalidate your warranty.',
    },
    {
      title: '🚽 Basic Operation',
      description: 'Multiple flushes may be needed depending on waste and paper amount.',
    },
    {
      title: '🔧 Handling Clogs',
      description: 'For clogs:\n' +
        '1. Use a plunger\n' +
        '2. If unsuccessful, contact a licensed plumber\n' +
        '\nNote: Plumbing repairs are homeowner responsibility',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1Sz38aUIhedePannuq1ctUT5GXRGkDmWu/view',
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