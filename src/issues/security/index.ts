import { MaintenanceIssue } from '../../types/issue';

export const securityIssues: MaintenanceIssue[] = [
  {
    id: 'keys-fobs',
    title: '1. FOBs & Building Access 🔑',
    description: 'Everything you need to know about building access, including FOBs, garage remotes, and mobile access.',
    responsibility: 'both',
    emergency: false,
    category: 'Security',
    summary: {
      fob: 'Building access FOB for all entry points. $40 each, max 3 per suite.',
      remote: 'Garage remote for parking spot owners. $120 each, max 2 per spot.'
    },
    images: [
      {
        url: 'https://i.postimg.cc/Bb5gdLbM/Fob.png',
        alt: 'Building Access FOB',
        caption: 'Building Access FOB',
        className: 'w-32 h-auto mx-auto',
        details: 'Click to purchase and view activation details'
      },
      {
        url: 'https://i.postimg.cc/hPgMVrZw/Remote.png',
        alt: 'Garage Remote',
        caption: 'Garage Remote Control',
        className: 'w-32 h-auto mx-auto',
        details: 'Click to purchase and view activation details'
      }
    ],
    steps: [
      {
        title: '3️⃣ Mobile Access',
        description: 'Mobile access is available to resident owners:\n' +
          '• Register at Property Management office\n' +
          '• Download mobile app\n' +
          '• Follow setup instructions\n' +
          '• Available for main entrance only'
      },
      {
        title: '4️⃣ Suite Keys',
        description: 'For unit door key replacement:\n' +
          '• Visit Property Management office\n' +
          '• Request authorization form\n' +
          '• Contact City Wide Locksmith\n' +
          '• Choose delivery or pickup'
      }
    ],
    contacts: [
      {
        name: 'Security Supervisor Ajay',
        role: 'FOB & Remote Activation',
        phone: '+1 437 352 8049',
        hours: 'Monday to Friday, 8 AM to 4 PM'
      },
      {
        name: 'Property Management',
        role: 'Purchase & Authorization',
        phone: '(647) 368-7395',
        email: 'gloucester.on@fsresidential.com',
        hours: 'Monday to Friday, 9 AM - 5 PM'
      }
    ],
    pricing: [
      {
        name: 'Building FOB',
        amount: 40.00,
        features: [
          'Building access FOB',
          'Maximum 3 per suite',
          'Non-refundable',
          'Activation by Security Supervisor',
          'Same-day activation available'
        ]
      },
      {
        name: 'Garage Remote',
        amount: 120.00,
        features: [
          'Parking garage remote',
          'Maximum 2 per spot',
          'For parking spot owners only',
          'Activation by Security Supervisor',
          'Same-day activation available'
        ]
      }
    ],
    paymentUrl: 'https://linktr.ee/gloucesterpay'
  },
  {
    id: 'unit-keys',
    title: '2. Suite Door Keys 🔒',
    description: 'Information about unit door key replacement and locksmith services.',
    responsibility: 'both',
    emergency: false,
    category: 'Security',
    steps: [
      {
        title: '🔑 Key Replacement Process',
        description: '1. Visit Property Management Office:\n' +
          '• Request authorization form for key replacement\n' +
          '• Provide proof of ownership/tenancy\n' +
          '• Get approval for key cutting\n\n' +
          '2. Contact City Wide Locksmith:\n' +
          '• Present authorization form\n' +
          '• Choose delivery or pickup\n' +
          '• Schedule service if needed'
      },
      {
        title: '📋 Required Documents',
        description: 'To obtain replacement keys:\n\n' +
          '• Government-issued ID\n' +
          '• Proof of ownership/tenancy\n' +
          '• Completed authorization form\n' +
          '• Payment for service'
      }
    ],
    faqs: [
      {
        id: 'lost-key',
        question: 'I lost my unit key. What should I do?',
        answer: 'Contact Property Management immediately to obtain an authorization form for key replacement. You will need to provide proper identification and proof of residency. Once approved, City Wide Locksmith can cut new keys for you.'
      },
      {
        id: 'locksmith-options',
        question: 'Can I use any locksmith service?',
        answer: 'No, for security reasons, only City Wide Locksmith is authorized to cut keys for the building. Using unauthorized locksmiths may compromise building security and could result in damage to your lock.'
      },
      {
        id: 'delivery-options',
        question: 'What are my options for getting new keys?',
        answer: 'City Wide Locksmith offers both delivery to the building and pickup at their location. Keys can be delivered to the Property Management office for pickup, or you can collect them directly from the locksmith.'
      },
      {
        id: 'tenant-keys',
        question: 'I am a tenant. Can I request new keys?',
        answer: 'Tenants must contact their landlord/unit owner first. The owner needs to authorize key replacement through Property Management. For emergency situations, contact Property Management directly.'
      }
    ],
    contacts: [
      {
        name: 'Property Management',
        role: 'Authorization Forms & Approval',
        phone: '(647) 368-7395',
        email: 'gloucester.on@fsresidential.com',
        hours: 'Monday to Friday, 9 AM - 5 PM'
      }
    ]
  },
  {
    id: 'alarm-panel',
    title: '3. Suite Security Panel 🚨',
    description: 'Your suite is equipped with a CyberSuite Touch Sense LCD Keypad security system for enhanced condominium security with flexible local monitoring and offsite communication.',
    responsibility: 'both',
    emergency: false,
    category: 'Security',
    images: [
      {
        url: 'https://i.postimg.cc/MGX9vp3p/Cyber-Suite-Touch-Sense-LCD-Keypad.png',
        alt: 'CyberSuite Touch Sense LCD Keypad',
        caption: 'In-Suite Security Panel',
        details: 'CyberSuite Touch Sense LCD Keypad for suite security'
      }
    ],
    steps: [
      {
        title: '🔐 System Features',
        description: 'CyberSuite Touch Sense Features:\n\n' +
          '🚪 Entry Door Control:\n' +
          '• Arm/disarm suite entry door\n' +
          '• Set personal security code\n' +
          '• Monitor door status'
      },
      {
        title: '⚙️ Setup Process',
        description: 'Initial configuration:\n\n' +
          '1️⃣ Request Manual:\n' +
          '• Contact Management Office\n' +
          '• Obtain user guide\n' +
          '• Review safety features\n\n' +
          '2️⃣ Set Your Code:\n' +
          '• Choose personal PIN\n' +
          '• Test system operation\n' +
          '• Verify with security desk'
      },
      {
        title: '🚨 Alarm Response',
        description: 'When alarm triggers:\n\n' +
          '1. Alert appears on Security Desk\n' +
          '2. Security calls your unit\n' +
          '3. Response team dispatched if needed\n\n' +
          '⚠️ Important:\n' +
          '• Keep security contact info updated\n' +
          '• Report system issues promptly\n' +
          '• Test system monthly'
      }
    ],
    manualUrl: 'https://drive.google.com/file/d/1jMTm_-NjawhxD7s-BOYBOPdlZi6objR1/view',
    contacts: [
      {
        name: 'Regal Security',
        role: '24/7 Security Monitoring',
        phone: '+1 437 352 8049',
        hours: 'Available 24/7'
      },
      {
        name: 'Property Management',
        role: 'System Support & Manuals',
        phone: '(647) 368-7395',
        email: 'gloucester.on@fsresidential.com',
        hours: 'Monday to Friday, 9 AM - 5 PM'
      }
    ]
  },
  {
    id: 'smoke-detectors',
    title: '4. Fire & Safety Alarms 🔥',
    description: 'Your suite is equipped with mandatory smoke detectors and carbon monoxide alarms as per Ontario Building and Fire Codes. Regular maintenance is essential for your safety.',
    responsibility: 'both',
    emergency: false,
    category: 'Security',
    steps: [
      {
        title: '🔥 Safety Devices Overview',
        description: 'Your suite is equipped with:\n\n' +
          '1. Smoke Detector:\n' +
          '   • Hard-wired to building power with battery backup\n' +
          '   • Located in main hallway and bedrooms\n' +
          '   • Interconnected with building fire system\n' +
          '   • Automatically triggers building alarm when smoke detected\n\n' +
          '2. Carbon Monoxide Alarm:\n' +
          '   • Hard-wired with 9V backup\n' +
          '   • Required by Fire Code\n' +
          '   • Located near bedrooms\n' +
          '   • Alerts both suite and building security\n\n' +
          '⚠️ Important: These devices are critical life safety equipment. Tampering with or disabling them is strictly prohibited and may result in fines.'
      },
      {
        title: '🔋 Battery Replacement',
        description: 'Battery maintenance guidelines:\n\n' +
        'Smoke Detector:\n' +
        '• Replace backup battery annually\n' +
        '• Use high-quality alkaline batteries\n' +
        '• Record replacement date\n' +
        '• Contact security if chirping persists after battery change\n\n' +
        'Carbon Monoxide Alarm:\n' +
        '• Use 9V alkaline battery\n' +
        '• Replace when low battery alert sounds\n' +
        '• Test after replacement\n' +
        '• Professional inspection required if alarm triggers'
      },
      {
        title: '📋 Maintenance Schedule',
        description: 'Monthly Testing:\n\n' +
        '1. Monthly Testing:\n' +
        '   • Press test button\n' +
        '   • Verify alarm sounds\n' +
        '   • Check indicator lights\n' +
        '   • Notify neighbors before testing\n\n' +
        '2. Annual Inspection:\n' +
        '   • Check all connections\n' +
        '   • Clean dust and debris\n' +
        '   • Verify proper operation\n\n' +
        '3. Building Integration:\n' +
        '   • Annual testing by fire marshal\n' +
        '   • Part of building-wide safety system\n' +
        '   • Automatically notifies fire department\n' +
        '   • Connected to 24/7 monitoring'
      },
      {
        title: '🚨 Emergency Response',
        description: 'When alarm activates:\n\n' +
        '1. Building Response:\n' +
        '   • Security investigates immediately\n' +
        '   • Fire department automatically notified\n' +
        '   • Building-wide alert if multiple detectors trigger\n\n' +
        '2. Resident Actions:\n' +
        '   • Evacuate immediately if alarm sounds\n' +
        '   • Use stairs, not elevators\n' +
        '   • Follow emergency exit signs\n' +
        '   • Meet at designated assembly point\n\n' +
        '3. False Alarms:\n' +
        '   • Call security immediately\n' +
        '   • Do not disable the alarm\n' +
        '   • Professional inspection may be required'
      }
    ],
    images: [
      {
        url: 'https://i.postimg.cc/ZRMj8tgx/fire-alarm.png',
        alt: 'Fire Alarm System',
        caption: 'Building Fire Alarm System',
        details: 'Building-wide fire detection system with 24/7 monitoring and direct fire department connection'
      },
      {
        url: 'https://i.postimg.cc/G22qThMp/smoke-detector.png',
        alt: 'In-Suite Smoke Detector',
        caption: 'In-Suite Smoke Detector',
        details: 'Hard-wired smoke detector with battery backup. Interconnected with building fire system.'
      }
    ],
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
        role: 'Emergency Response',
        phone: '+1 437 352 8049',
        hours: 'Available 24/7'
      }
    ]
  },
  {
    id: 'buzzer-enterphone',
    title: '5. Visitor Entry System 📞',
    description: 'Learn how to use and manage your suite\'s buzzer system, including registration, troubleshooting, and mobile number updates.',
    responsibility: 'both',
    emergency: false,
    category: 'Security',
    steps: [
      {
        title: '📝 Initial Registration',
        description: 'To set up your buzzer code:\n\n' +
          '1. Visit Property Management Office:\n' +
          '   • Bring government-issued ID\n' +
          '   • Provide preferred mobile number\n' +
          '   • Complete registration form\n\n' +
          '2. Receive Your Code:\n' +
          '   • Get your unique 4-digit code\n' +
          '   • Test code functionality\n' +
          '   • Save instructions for reference'
      },
      {
        title: '📱 Mobile Number Updates',
        description: 'To change your registered phone number:\n\n' +
          '1. Visit Property Management Office:\n' +
          '   • Request phone number update form\n' +
          '   • Provide new contact information\n' +
          '   • Verify identity with ID\n\n' +
          '2. System Update:\n' +
          '   • Changes processed within 24 hours\n' +
          '   • Test system after update\n' +
          '   • Confirm with front desk'
      },
      {
        title: '🔍 Troubleshooting',
        description: 'If experiencing issues:\n\n' +
          '1. Common Problems:\n' +
          '   • Verify correct code entry\n' +
          '   • Check phone number accuracy\n' +
          '   • Ensure phone accepts calls\n\n' +
          '2. Get Help:\n' +
          '   • Visit front desk for assistance\n' +
          '   • Contact security for testing\n' +
          '   • Report persistent issues'
      }
    ],
    manualUrl: 'https://drive.google.com/file/d/1yp38jIcH1T6kbDjfy0MIbEJeeDXe1oFA/view',
    faqs: [
      {
        id: 'buzzer-not-working',
        question: 'My buzzer is not working. What should I do?',
        answer: 'First, verify your phone number is correct with the front desk. If the number is correct, security can test the system. For persistent issues, contact Property Management to investigate further.'
      },
      {
        id: 'change-phone',
        question: 'How do I change my phone number for the buzzer system?',
        answer: 'Visit the Property Management office during business hours with government-issued ID. Complete a phone number update form, and changes will be processed within 24 hours.'
      },
      {
        id: 'multiple-numbers',
        question: 'Can I register multiple phone numbers?',
        answer: 'The system supports one primary phone number per suite. For special circumstances, please discuss your needs with Property Management.'
      },
      {
        id: 'forgot-code',
        question: 'I forgot my buzzer code. How can I retrieve it?',
        answer: 'Visit the front desk with proper identification, and security can verify your code. For security reasons, codes can only be provided in person with ID verification.'
      }
    ],
    contacts: [
      {
        name: 'Property Management',
        role: 'Registration & Updates',
        phone: '(647) 368-7395',
        email: 'gloucester.on@fsresidential.com',
        hours: 'Monday to Friday, 9 AM - 5 PM'
      },
      {
        name: 'Regal Security',
        role: 'System Testing & Support',
        phone: '+1 437 352 8049',
        hours: 'Available 24/7'
      }
    ]
  }
];