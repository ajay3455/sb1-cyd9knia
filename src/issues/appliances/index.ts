import { MaintenanceIssue } from '../../types/issue';
import { kitchenAppliances } from './kitchen';

export const applianceIssues: MaintenanceIssue[] = [
  {
    id: 'appliance-repair',
    title: "Professional Appliance Repair Services 🛠️",
    description: "Get expert help from our trusted repair partners for all your appliance needs.",
    responsibility: 'owner',
    emergency: false,
    category: 'Appliances',
    steps: [
      {
        title: 'MAX Appliance Repair',
        description: 'Premium appliance repair service:\n' +
          '• Phone: (647) 477-0946\n' +
          '• Website: maxappliancerepair.ca\n' +
          '• Emergency repairs available 24/7\n' +
          '• Licensed & insured technicians\n' +
          '• Same-day service\n' +
          '• All major brands'
      },
      {
        title: 'ARS Appliance Repair Service',
        description: 'Trusted repair solutions:\n' +
          '• Phone: (866) 415-3937\n' +
          '• Website: appliancesrepairservice.ca\n' +
          '• Emergency service available\n' +
          '• Factory-trained technicians\n' +
          '• Warranty service\n' +
          '• Competitive rates'
      },
      {
        title: 'ALBA Appliance Repair',
        description: 'Expert repair services:\n' +
          '• Phone: (416) 836-1576\n' +
          '• Website: www.albaappliance.ca\n' +
          '• Professional diagnostics\n' +
          '• Certified technicians\n' +
          '• Quality parts\n' +
          '• Service guarantee'
      }
    ],
    contacts: [
      {
        name: 'MAX Appliance Repair',
        role: 'Appliance Repair Service',
        phone: '(647) 477-0946',
        hours: 'Available for emergency service'
      },
      {
        name: 'ARS Appliance Repair Service',
        role: 'Appliance Repair Service',
        phone: '(866) 415-3937',
        hours: 'Available for emergency service'
      },
      {
        name: 'ALBA Appliance Repair',
        role: 'Appliance Repair Service',
        phone: '(416) 836-1576',
        hours: 'Available for emergency service'
      }
    ]
  },
  ...kitchenAppliances.map((appliance, index) => ({
    ...appliance,
    title: appliance.title.replace(/^\d+\.\s/, `${index + 1}. `)
  }))
];