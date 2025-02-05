import { MaintenanceIssue } from '../../types/issue';

export const internetIssues: MaintenanceIssue[] = [
  {
    id: 'internet-providers',
    title: 'Internet Service Providers',
    description:
      'Contact technical support for service issues or speak with an authorized representative for new installations and service inquiries.',
    responsibility: 'owner',
    emergency: false,
    category: 'Internet',
    technicalSupport: [
      {
        provider: 'Bell',
        description: 'For technical issues with your Bell Internet service:',
        url: 'https://support.bell.ca/contact-us', 
        phone: '1-800-668-6878 (Internet Support)',
        hours: '24/7 Technical Support'
      },
      {
        provider: 'Rogers',
        description: 'For technical support with your Rogers Internet service:',
        url: 'https://www.rogers.com/support',
        phone: '1-855-381-7834',
        hours: '24/7 Technical Support'
      },
      {
        provider: 'Beanfield',
        description: 'For technical assistance with your Beanfield connection:',
        url: 'https://www.beanfield.com/business/contact/',
        phone: '1-855-532-1555',
        hours: '24/7 Technical Support'
      }
    ],
    steps: [
      {
        title: 'Bell Internet',
        description: 'For service information and installation inquiries, contact our authorized representative.'
      },
      {
        title: 'Rogers Internet',
        description: 'For service information and installation inquiries, contact Rogers sales team.'
      },
      {
        title: 'Beanfield Internet',
        description: 'For service information and installation inquiries, contact our authorized representative.'
      }
    ],
    images: [
      {
        url: 'https://i.postimg.cc/dVQhRkYw/Bell.png',
        alt: 'Bell Logo',
        caption: 'Bell Fiber Internet'
      },
      {
        url: 'https://i.postimg.cc/VktVR6BZ/Rogers-full-logo.png',
        alt: 'Rogers Logo',
        caption: 'Rogers Ignite Internet'
      },
      {
        url: 'https://i.postimg.cc/TYJyWjBt/Beanfield.png',
        alt: 'Beanfield Logo',
        caption: 'Beanfield Fiber Internet'
      }
    ],
    contacts: [
      {
        name: 'Bell Internet',
        role: 'Authorized Sales Representative',
        phone: '416-459-7917',
        email: 'TORpromo@bell.ca',
        hours: 'Monday to Friday, 9 AM - 6 PM',
        description: 'Your dedicated Bell representative for Gloucester on Yonge residents. Specializes in:\n' +
          '• Exclusive resident pricing\n' +
          '• Custom package configuration\n' +
          '• Professional installation scheduling\n' +
          '• Bundle discounts\n' +
          '• Service upgrades',
        representative: {
          name: 'Karan',
          title: 'Bell Authorized Agent',
          territory: 'Downtown Toronto MDU Specialist',
          languages: ['English', 'Hindi', 'Punjabi']
        }
      },
      {
        name: 'Rogers Internet',
        role: 'Ignite™ Sales Team',
      },
      {
        name: 'Beanfield Internet',
        role: 'MDU Sales Representative',
        phone: '416.532.1555 ext. 1918',
        email: 'aaryan@beanfield.com',
        hours: 'Monday to Friday, 9 AM - 5 PM',
        representative: {
          name: 'Aryan Aryan',
          title: 'MDU Sales Representative',
          territory: 'Toronto Residential Buildings',
          languages: ['English']
        }
      }
    ]
  }
];