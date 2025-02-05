import { MaintenanceIssue } from '../../types/issue';

export const generalIssues: MaintenanceIssue[] = [
  {
    id: 'general-inquiry',
    title: 'General Maintenance Inquiries',
    description: 'For maintenance requests or issues not covered in our troubleshooting guides, please contact Property Management directly.',
    responsibility: 'both',
    emergency: false,
    category: 'General',
    steps: [
      {
        title: '📝 Submit Your Request',
        description: 'Contact Property Management through one of these methods:\n' +
          '• Phone: Call during business hours\n' +
          '• Email: Send a detailed description of your issue\n' +
          '• Visit: Stop by the office on the 5th floor'
      },
      {
        title: '✍️ Provide Details',
        description: 'When submitting your request, please include:\n' +
          '• Your unit number\n' +
          '• Detailed description of the issue\n' +
          '• Best time to contact you\n' +
          '• Photos of the issue (if applicable)'
      },
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
  }
];