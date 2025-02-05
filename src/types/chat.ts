export interface ChatOption {
  text: string;
  action: () => void;
  icon?: string;
  emergency?: boolean;
  category?: string;
  subcategory?: string;
}

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: ChatOption[];
  category?: string;
  subcategory?: string;
}