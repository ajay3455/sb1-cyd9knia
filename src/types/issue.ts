export interface MaintenanceIssue {
  id: string;
  title: string;
  description: string;
  responsibility: 'owner' | 'management' | 'both';
  emergency: boolean;
  category: string;
  summary?: {
    [key: string]: string;
  };
  pricing?: {
    name: string;
    amount: number;
    features: string[];
  }[];
  steps: {
    title: string;
    description: string;
  }[];
  images?: {
    url: string;
    alt: string;
    caption: string;
    className?: string;
    details?: string;
  }[];
  videoUrl?: string;
  manualUrl?: string;
  faqs?: {
    id: string;
    question: string;
    answer: string;
  }[];
  manuals?: {
    name: string;
    url: string;
  }[];
  technicalSupport?: {
    provider: string;
    description: string;
    url: string;
    phone: string;
    hours: string;
  }[];
  troubleshooting?: string[];
  contacts: {
    name: string;
    role: string;
    phone?: string;
    email?: string;
    hours?: string;
  }[];
}