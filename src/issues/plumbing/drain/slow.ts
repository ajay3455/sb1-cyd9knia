import { MaintenanceIssue } from '../../../types/issue';

export const slowDrain: MaintenanceIssue = {
  id: 'slow-drain',
  title: '3. Slow Drain',
  description: 'Address slow drains early to prevent complete blockages and potential backups.',
  responsibility: 'owner',
  emergency: false,
  category: 'Plumbing',
  steps: [
    {
      title: 'Try Natural Solutions',
      description: 'Pour boiling water down the drain, followed by 1/2 cup baking soda and 1/2 cup vinegar. Wait 15 minutes, then flush with hot water.',
    },
    {
      title: 'Use a Plumber\'s Snake',
      description: 'If natural solutions don\'t work, use a plumber\'s snake or drain auger to remove the clog.',
    },
    {
      title: 'Preventive Measures',
      description: 'Install drain strainers to catch hair and debris. Never pour grease down drains.',
    }
  ],
  videoUrl: 'https://drive.google.com/file/d/1QvjnHCLb6TpUJL2uLpisU2OUezfbky7v/view',
  contacts: [
    {
      name: 'GTA Plumbing',
      role: 'Licensed Plumber',
      phone: '416-555-0123',
      email: 'service@gtaplumbing.ca'
    }
  ]
};