import { MaintenanceIssue } from '../../../types/issue';

export const filterMaintenance: MaintenanceIssue = {
  id: 'hvac-filter',
  title: '1. HVAC Filter Replacement',
  description: 'Replace your HVAC filter every 3 months for optimal performance. Please bring your old filter to ensure the correct size replacement.',
  responsibility: 'owner',
  emergency: false,
  category: 'HVAC',
  faqs: [
    {
      id: 'filter-size',
      question: 'How do I know which filter size I need?',
      answer: 'Bring your old filter to the Property Management office to ensure you get the correct size. Common sizes are 14x25x1 and 16x25x1, but it\'s important to match your specific unit\'s requirements.'
    },
    {
      id: 'filter-life',
      question: 'How often should I replace my filter?',
      answer: 'Filters should be replaced every 3 months for optimal performance. However, if you have pets or notice reduced airflow, you may need to replace it more frequently.'
    },
    {
      id: 'filter-types',
      question: 'What\'s the difference between Premium and Basic filters?',
      answer: 'Premium filters offer enhanced filtration for better air quality and are recommended for residents with allergies or respiratory concerns. Basic filters provide standard filtration suitable for normal use.'
    },
    {
      id: 'dirty-filter',
      question: 'How can I tell if my filter needs replacement?',
      answer: 'Signs of a dirty filter include: reduced airflow from vents, visible dirt/dust accumulation on the filter, increased energy bills, and poor heating/cooling performance.'
    },
    {
      id: 'filter-payment',
      question: 'How do I pay for replacement filters?',
      answer: 'Filters can be purchased through the online payment portal or at the Property Management office. Both credit card and debit payments are accepted.'
    }
  ],
  pricing: [
    {
      name: 'Premium Filter',
      amount: 12.00,
      features: [
        'Size: 14x25x1, 16x25x1'
      ]
    },
    {
      name: 'Basic Filter',
      amount: 8.00,
      features: [
        'Size: 14x25x1, 16x25x1'
      ]
    }
  ],
  steps: [
    {
      title: 'Important: Bring Old Filter',
      description: 'Please bring your old filter to the Property Management office to ensure you receive the correct size replacement.',
    },
    {
      title: 'Locate Filter Housing',
      description: 'Located behind the return air vent in your hallway ceiling.',
    },
    {
      title: 'Purchase & Payment',
      description: 'Visit the Property Management office (5th floor) during business hours. Payment can be made through the online payment portal or at the office.',
    },
    {
      title: 'Disposal',
      description: 'Please dispose of old filters in the P2 garbage room.',
    }
  ],
  paymentUrl: 'https://linktr.ee/gloucesterpay#collection-3ad0e3ad-22c4-4637-9b98-ca283bf283cb',
  videoUrl: 'https://drive.google.com/file/d/1QvjnHCLb6TpUJL2uLpisU2OUezfbky7v/view',
  contacts: [
    {
      name: 'Property Management',
      role: '5th Floor Office',
      phone: '+1 647 368 7395',
      email: 'gloucester.on@fsresidential.com',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    }
  ]
};