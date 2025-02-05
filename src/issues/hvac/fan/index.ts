import { MaintenanceIssue } from '../../../types/issue';

export const fanIssues: MaintenanceIssue = {
  id: 'fan-issues',
  title: 'Fan Issues (Noise/Operation)',
  description: 'Troubleshoot and resolve fan-related issues with your Honeywell T4 Pro Thermostat system.',
  responsibility: 'owner',
  emergency: false,
  category: 'HVAC',
  manualUrl: 'https://drive.google.com/file/d/1Ytz_3lqkIlN9gyHeisOq1nYSHyke_NHE/view',
  steps: [
    {
      title: '🔧 Fan Mode Settings',
      description: 'Adjust fan operation mode:\n\n' +
        '1. Locate the "Fan" button on your thermostat\n' +
        '2. Press to cycle through available modes:\n' +
        '   • Auto: Fan runs only during heating/cooling\n' +
        '   • On: Fan runs continuously\n' +
        '3. Select preferred mode and wait for activation'
    },
    {
      title: '🔍 Noise Troubleshooting',
      description: 'If experiencing excessive fan noise:\n\n' +
        '1. Check and replace air filter if clogged\n' +
        '2. Listen for unusual sounds:\n' +
        '   • Rattling: May indicate loose components\n' +
        '   • Squealing: Could be belt issues\n' +
        '   • Grinding: Possible mechanical problem\n' +
        '3. Set to Auto mode to reduce operation'
    }
  ],
  faqs: [
    {
      id: 'turn-off',
      question: 'Can I turn off the fan completely?',
      answer: 'The fan cannot be turned off completely, but you can set it to "Auto" mode where it will only run when heating or cooling is needed. If the fan continues running in Auto mode, there might be an issue with your HVAC system or wiring that requires professional inspection.'
    },
    {
      id: 'constant-noise',
      question: 'Why is my fan constantly making noise?',
      answer: 'Constant fan noise can be caused by several factors: dirty/clogged filter, mechanical issues in the HVAC system, loose components, or the fan being set to "On" instead of "Auto" mode. Try changing the filter and switching to Auto mode first. If noise persists, professional inspection may be needed.'
    },
    {
      id: 'reset-thermostat',
      question: 'Will resetting the thermostat help with fan issues?',
      answer: 'Resetting the thermostat can sometimes resolve fan operation issues, especially if the problem is related to programming or settings. However, if the issue is mechanical or related to the HVAC system itself, a reset won\'t fix the underlying problem.'
    }
  ],
  contacts: [
    {
      name: 'Merrit HVAC',
      role: 'HVAC Contractor',
      phone: '416-238-5782 ext. 202',
      email: 'info@merrit.ca',
      hours: 'Available for service 24/7'
    }
  ]
};