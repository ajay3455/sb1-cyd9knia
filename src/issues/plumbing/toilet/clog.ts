import { MaintenanceIssue } from '../../../types/issue';

export const toiletClog: MaintenanceIssue = {
  id: 'toilet-clog',
  title: '2. Toilet Maintenance',
  description: 'The operation of your toilet is sensitive to the amount of waste and toilet paper. Only toilet paper should be flushed to avoid warranty invalidation.',
  responsibility: 'owner',
  emergency: false,
  category: 'Plumbing',
  steps: [
    {
      title: '⚠️ Important Guidelines',
      description: 'Only flush toilet paper. Flushing other items may invalidate the Statutory Warranty for plumbing.',
    },
    {
      title: '🚽 Multiple Flushes',
      description: 'Multiple flushes may be required depending on the amount of waste and toilet paper.',
    },
    {
      title: '🔧 Clearing Blockages',
      description: 'If clogged, the blockage is usually in the trap. Try using a plunger first.',
    },
    {
      title: '📞 Professional Help',
      description: 'If plunging doesn\'t resolve the issue, contact a professional plumber.',
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