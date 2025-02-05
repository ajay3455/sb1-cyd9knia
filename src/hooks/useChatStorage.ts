import { useState, useEffect } from 'react';
import { ChatMessage } from '../types/chat';

export const useChatStorage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = localStorage.getItem('chat_messages');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  }, [messages]);

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem('chat_messages');
  };

  return { messages, setMessages, clearMessages };
};