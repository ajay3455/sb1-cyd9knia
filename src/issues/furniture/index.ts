import { MaintenanceIssue } from '../../types/issue';

export const furnitureIssues: MaintenanceIssue[] = [
  {
    id: 'furniture-maintenance',
    title: 'Furniture Care & Maintenance',
    description: '⚠️ All furniture maintenance, repairs, and replacements are the homeowner\'s responsibility. This guide provides resources for furniture care and repair services.',
    responsibility: 'owner',
    emergency: false,
    category: 'Furniture',
    steps: [
      {
        title: '🛋️ Furniture Care Guidelines',
        description: 'Basic maintenance tips:\n\n' +
          '1. Regular Cleaning\n' +
          '   • Follow manufacturer\'s cleaning instructions\n' +
          '   • Use appropriate cleaning products\n' +
          '   • Regular dusting and vacuuming\n\n' +
          '2. Preventive Care\n' +
          '   • Rotate cushions regularly\n' +
          '   • Avoid direct sunlight exposure\n' +
          '   • Use furniture protectors\n' +
          '   • Address spills immediately'
      },
      {
        title: '🔧 Repairs & Parts',
        description: 'For furniture repairs or replacement parts:\n\n' +
          '1. Manufacturer Contact\n' +
          '   • Check product warranty\n' +
          '   • Contact manufacturer directly\n' +
          '   • Request genuine replacement parts\n\n' +
          '2. Local Resources\n' +
          '   • Furniture repair services\n' +
          '   • Hardware stores\n' +
          '   • Upholstery shops\n\n' +
          '3. Online Parts\n' +
          '   • Manufacturer websites\n' +
          '   • Furniture parts retailers\n' +
          '   • Hardware suppliers'
      },
      {
        title: '🛠️ Assembly Services',
        description: 'For furniture assembly assistance:\n\n' +
          '1. Professional Services\n' +
          '   • TaskRabbit\n' +
          '   • HomeStars\n' +
          '   • Local handyman services\n\n' +
          '2. DIY Resources\n' +
          '   • Manufacturer instructions\n' +
          '   • Online tutorials\n' +
          '   • Assembly videos'
      },
      {
        title: '⚠️ Important Notes',
        description: 'Please be aware:\n\n' +
          '• All furniture maintenance is owner responsibility\n' +
          '• Property management cannot assist with furniture issues\n' +
          '• Warranty claims must be handled directly with manufacturer\n' +
          '• Professional assembly recommended for warranty compliance'
      }
    ],
    faqs: [
      {
        id: 'warranty',
        question: 'What should I do if my furniture is still under warranty?',
        answer: 'Contact the manufacturer directly with your warranty information and proof of purchase. They will guide you through their warranty claim process and may provide repair services or replacement parts at no cost.'
      },
      {
        id: 'moving-damage',
        question: 'My furniture was damaged during moving. Who is responsible?',
        answer: 'If the damage occurred during a move, the responsibility lies with either you (if self-moved) or your moving company. Check your moving company\'s insurance coverage and file a claim if applicable. Property management is not responsible for any furniture damage during moves.'
      },
      {
        id: 'repair-service',
        question: 'How do I find a reliable furniture repair service?',
        answer: 'Look for licensed and insured professionals through platforms like HomeStars or ask for recommendations from your furniture retailer. Always check reviews, get multiple quotes, and verify their experience with your type of furniture before hiring.'
      },
      {
        id: 'replacement-parts',
        question: 'Where can I find replacement parts for my furniture?',
        answer: 'Start by contacting the manufacturer directly as they often stock original parts. For discontinued items, try online marketplaces specializing in furniture parts or local furniture repair shops who may have compatible replacements.'
      },
      {
        id: 'assembly-help',
        question: 'I need help assembling new furniture. What are my options?',
        answer: 'You can hire professional assembly services through platforms like TaskRabbit or HomeStars. Many furniture retailers also offer assembly services. For DIY assembly, carefully follow manufacturer instructions and consider watching tutorial videos for your specific piece.'
      },
      {
        id: 'maintenance-tips',
        question: 'What are some essential furniture maintenance tips?',
        answer: 'Regular maintenance includes: dusting weekly, vacuuming upholstery monthly, rotating cushions every 3-6 months, keeping furniture out of direct sunlight, using coasters and protective pads, and addressing spills immediately. Always follow manufacturer-specific care instructions.'
      },
      {
        id: 'property-management',
        question: 'Can property management help with furniture issues?',
        answer: 'No, property management cannot assist with furniture-related issues as these fall under homeowner responsibility. This includes maintenance, repairs, assembly, and any damage to furniture items.'
      },
      {
        id: 'insurance',
        question: 'Does my home insurance cover furniture damage?',
        answer: 'Home insurance typically covers furniture damage caused by covered perils (like fire or water damage from building issues) but not general wear and tear or accidental damage. Check your policy details and consider additional coverage if needed.'
      }
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