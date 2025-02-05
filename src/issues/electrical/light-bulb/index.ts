import { MaintenanceIssue } from '../../../types/issue';

export const lightBulb: MaintenanceIssue = {
  id: 'light-bulb',
  title: 'Light Bulb Installation',
  description: '⚠️ Light bulb replacement and electrical work falls under homeowner responsibility. For safety reasons, please contact a licensed electrician for any electrical work beyond basic bulb replacement.',
  responsibility: 'owner',
  emergency: false,
  category: 'Electrical',
  images: [
    {
      url: 'https://i.postimg.cc/85zpVqYJ/Bulb.png',
      alt: 'Light Bulb Installation',
      caption: 'Light Bulb Installation Guide',
      className: 'w-32 h-auto mx-auto',
      details: 'Visual guide for safely installing and replacing light bulbs'
    },
    {
      url: 'https://i.postimg.cc/pr9PmKRP/Bulb-type-table.png',
      alt: 'Light Bulb Types Guide',
      caption: 'Common Light Bulb Types',
      details: 'Reference guide for identifying and selecting the correct light bulb type for your fixtures'
    }
  ],
  steps: [
    {
      title: '⚠️ Safety First',
      description: 'CRITICAL SAFETY STEPS:\n\n' +
        '1. POWER OFF: Turn off the light switch\n' +
        '2. COOL DOWN: Allow bulb to cool if recently used\n' +
        '3. STABILITY: Use a stable ladder or step stool\n' +
        '4. WATTAGE: Never exceed maximum wattage ratings\n' +
        '5. SAFETY: Ensure your hands are dry\n\n' +
        '⚡ Failure to follow these steps could result in injury or damage',
    },
    {
      title: '💡 Light Bulb Guidelines',
      description: '🏠 Common Areas\n\n' +
        '🛋️ Foyer/Den/Kitchen/WIC\n' +
        '• Type: LED (See bulb type guide below)\n' +
        '• Fixture: Thin Profile Surface Mount (S4)\n\n' +
        '🍽️ Dining Area\n' +
        '• Type: LED (See bulb type guide below)\n' +
        '• Fixture: Ceiling Rose (S3)\n\n' +
        '🚿 Bathroom Fixtures\n\n' +
        '🛁 Main Bathroom\n' +
        '• Type: LED (See bulb type guide below)\n' +
        '• Fixture: Recessed Fixture (S1)\n' +
        '• Vanity: LED Strip Lighting (S5)\n\n' +
        '🚿 Shower/Tub Area\n' +
        '• Type: LED (See bulb type guide below)\n' +
        '• Fixture: Recessed Downlight (S7)\n\n' +
        '🏗️ Other Locations\n\n' +
        '📍 General Ceiling\n' +
        '• Type: LED (See bulb type guide below)\n' +
        '• Fixture: Recessed Downlight (S2)\n\n' +
        '🍳 Kitchen Cabinets\n' +
        '• Type: LED\n' +
        '• Fixture: Strip Lighting (S5)\n\n' +
        '👕 Closets\n' +
        '• Type: LED\n' +
        '• Fixture: Strip Lighting (S10)\n\n' +
        '🏰 Penthouse Islands\n' +
        '• Type: MR16\n' +
        '• Fixture: Pendant Light (S11)\n\n' +
        '⚠️ Important Notes\n\n' +
        '⚡ RESPONSIBILITY: Homeowner must handle all bulb replacements\n' +
        '🏪 AVAILABILITY: Bulbs can be purchased at local hardware stores\n' +
        '📦 PREPARATION: Keep spare bulbs for emergency replacements',
    },
    {
      title: '🔄 Replacement Steps',
      description: 'Follow these steps in order:\n\n' +
        '1. IDENTIFY: Check your fixture type from the guide above\n' +
        '2. PURCHASE: Get the correct LED bulb type\n' +
        '3. SAFETY: Turn off the light switch\n' +
        '4. REMOVE: Take out the old bulb carefully\n' +
        '5. INSTALL: Place new bulb without overtightening\n' +
        '6. TEST: Verify the new installation works\n\n' +
        '💡 Tip: Take a photo of the old bulb before removal for reference',
    },
    {
      title: '⚡ Professional Services Required',
      description: '⚠️ LICENSED ELECTRICIAN REQUIRED\n\n' +
        '🔌 New fixture installation\n' +
        '🔧 Wiring modifications\n' +
        '🛠️ Electrical repairs\n' +
        '⚡ Any electrical work beyond bulb replacement\n\n' +
        'IMPORTANT: Attempting these tasks yourself voids warranty and may be dangerous',
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
};