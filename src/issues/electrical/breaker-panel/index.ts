import { MaintenanceIssue } from '../../../types/issue';

export const breakerPanel: MaintenanceIssue = {
  id: 'breaker-panel',
  title: '1. Breaker Panel Guide',
  description: 'Your suite has one electrical breaker panel with circuit breakers arranged in two columns. Each breaker controls power to a specific area and will trip (switch off) if overloaded or short-circuited.',
  responsibility: 'owner',
  emergency: false,
  category: 'Electrical',
  steps: [
    {
      title: '📍 Locate Your Panel',
      description: 'Find your breaker panel and familiarize yourself with the legend inside the panel door. This legend lists which breaker controls each area of your suite.',
    },
    {
      title: '🔍 Identify Tripped Breaker',
      description: 'A tripped breaker will be positioned opposite to the middle line of the panel (to the right or left side).',
    },
    {
      title: '🔌 Unplug Devices',
      description: 'Before resetting the breaker, unplug everything connected to the affected circuit to prevent power surge damage.',
    },
    {
      title: '↪️ Reset the Breaker',
      description: '1. Push the breaker fully to the "OFF" position\n2. Then flip it back to the "ON" position\n3. Power should be restored\n\nIf the breaker trips again immediately, contact an electrician as this indicates a serious problem.',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1mDuS5fiBK_X383_Pg9KdtEINR4qhhAO2/view',
  contacts: [
    {
      name: 'Property Management',
      role: 'General Inquiries',
      phone: '(647) 368-7395',
      email: 'gloucester.on@fsresidential.com',
      hours: 'Monday to Friday, 9 AM - 5 PM'
    },
    {
      name: 'Regal Security',
      role: '24/7 Emergency Response',
      phone: '+1 437 352 8049',
      hours: 'Available 24/7'
    }
  ]
};