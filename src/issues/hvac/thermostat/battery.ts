import { MaintenanceIssue } from '../../../types/issue';

export const thermostatBattery: MaintenanceIssue = {
  id: 'thermostat-battery',
  title: 'Thermostat Battery Replacement',
  description: 'Regular battery replacement ensures your thermostat functions properly and maintains comfortable temperature levels.',
  responsibility: 'owner',
  emergency: false,
  category: 'HVAC',
  faqs: [
    {
      id: 'battery-type',
      question: 'What type of batteries does my thermostat use?',
      answer: 'Your thermostat requires 2 AA alkaline batteries. Do not use rechargeable batteries as they may not provide consistent voltage for optimal performance.'
    },
    {
      id: 'battery-life',
      question: 'How long do thermostat batteries typically last?',
      answer: 'With normal use, thermostat batteries typically last 8-12 months. However, it\'s recommended to replace them annually to prevent unexpected failures.'
    },
    {
      id: 'low-battery',
      question: 'How will I know when batteries need replacement?',
      answer: 'The thermostat will display a low battery indicator. You might also notice the display becoming dim or temperature readings becoming inaccurate.'
    },
    {
      id: 'settings-reset',
      question: 'Will I lose my thermostat settings when changing batteries?',
      answer: 'No, your programmed settings are stored in the thermostat\'s memory and will not be lost when changing batteries. However, you may need to reset the current time and date.'
    },
    {
      id: 'battery-disposal',
      question: 'How should I dispose of old thermostat batteries?',
      answer: 'Used batteries should be disposed of in the designated battery recycling bins located in the P2 garbage room. Never dispose of batteries in regular trash.'
    }
  ],
  steps: [
    {
      title: 'Check Battery Type',
      description: 'Your thermostat requires 2 AA alkaline batteries.',
    },
    {
      title: 'Remove Cover',
      description: 'Gently pull the thermostat cover straight off the base.',
    },
    {
      title: 'Replace Batteries',
      description: 'Remove old batteries and insert new ones, ensuring proper polarity (+/-) alignment.',
    },
    {
      title: 'Reattach Cover',
      description: 'Align the cover with the base and push gently until it clicks into place.',
    },
    {
      title: 'Verify Operation',
      description: 'Check the display and test basic functions to ensure proper operation.',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1F9qD7CXTwNE20iCT7OjWYDYr1ciovkkg/view',
  troubleshooting: [
    'If display is blank, ensure batteries are properly inserted',
    'Try fresh batteries if issues persist',
    'If problems continue, contact HVAC support'
  ],
  contacts: [
    {
      name: 'Property Management',
      role: 'General Inquiries',
      email: 'gloucester.on@fsresidential.com',
      phone: '(647) 368-7395',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    },
    {
      name: 'Merrit HVAC',
      role: 'HVAC Contractor',
      phone: '416-238-5782 ext. 202',
      email: 'info@merrit.ca'
    }
  ]
};