import { MaintenanceIssue } from '../../../types/issue';

export const noHeatCooling: MaintenanceIssue = {
  id: 'no-heat-cooling',
  title: 'No Heat/Cooling',
  description: 'If your unit is not heating or cooling properly, follow these troubleshooting steps before calling for service.',
  responsibility: 'both',
  emergency: true,
  category: 'HVAC',
  steps: [
    {
      title: 'Check Thermostat Settings',
      description: 'Verify the thermostat is set to the correct mode (HEAT/COOL) and desired temperature.',
    },
    {
      title: 'Inspect Circuit Breaker',
      description: 'Check if the HVAC circuit breaker in your electrical panel has tripped.',
    },
    {
      title: 'Check Filter',
      description: 'Ensure the filter is clean and properly installed. A clogged filter can significantly reduce system performance.',
    },
    {
      title: 'Verify Vents',
      description: 'Check that all vents are open and unobstructed. Blocked vents can cause uneven heating/cooling.',
    },
    {
      title: 'Listen for Unusual Sounds',
      description: 'Note any unusual noises (clicking, banging, whistling) as this information will help the technician.',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1Ytz_3lqkIlN9gyHeisOq1nYSHyke_NHE/view',
  contacts: [
    {
      name: 'Merrit HVAC',
      role: 'HVAC Contractor',
      phone: '416-238-5782 ext. 202',
      email: 'info@merrit.ca',
      hours: 'Available for emergency service 24/7'
    },
    {
      name: 'Property Management',
      role: 'General Inquiries',
      email: 'gloucester.on@fsresidential.com',
      phone: '(647) 368-7395',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    }
  ]
};