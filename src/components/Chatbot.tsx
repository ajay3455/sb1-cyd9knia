import React from 'react';
import { MessageCircle, X, ChevronRight, ArrowLeft, Thermometer, Settings, Fan, AlertTriangle, 
  Droplets, Lock, Power, Wifi, Wrench, Refrigerator, UtensilsCrossed } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useChatStorage } from '../hooks/useChatStorage';
import { generateMainOptions, generateHVACOptions, generateApplianceOptions } from '../utils/chatOptions';
import { ChatMessage, ChatOption } from '../types/chat';
const getIconComponent = (iconName: string, emergency?: boolean) => {
  const iconProps = {
    className: `w-5 h-5 ${emergency ? 'text-red-500' : 'text-gray-500'}`
  };

  switch (iconName) {
    case 'thermometer':
      return <Thermometer {...iconProps} />;
    case 'settings':
      return <Settings {...iconProps} />;
    case 'fan':
      return <Fan {...iconProps} />;
    case 'alert-triangle':
      return <AlertTriangle {...iconProps} />;
    case 'droplets':
      return <Droplets {...iconProps} />;
    case 'lock':
      return <Lock {...iconProps} />;
    case 'power':
      return <Power {...iconProps} />;
    case 'wifi':
      return <Wifi {...iconProps} />;
    case 'wrench':
      return <Wrench {...iconProps} />;
    case 'refrigerator':
      return <Refrigerator {...iconProps} />;
    case 'utensils-crossed':
      return <UtensilsCrossed {...iconProps} />;
    default:
      return <Wrench {...iconProps} />;
  }
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { messages, setMessages, clearMessages } = useChatStorage();
  const [isTyping, setIsTyping] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState<string | null>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOptionSelect = (text: string, nextOptions?: ChatOption[]) => {
    const userMessage: ChatMessage = {
      text,
      sender: 'user',
      timestamp: new Date(),
      category: currentCategory
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      let botResponse: string;
      let options = nextOptions;

      // Generate appropriate response based on user selection
      if (text.toLowerCase().includes('hvac')) {
        botResponse = "Here are some common HVAC-related issues. What can I help you with?";
        options = generateHVACOptions(navigate);
        setCurrentCategory('HVAC');
      } else if (text.toLowerCase().includes('appliance')) {
        botResponse = "What appliance are you having issues with?";
        options = generateApplianceOptions(navigate);
        setCurrentCategory('Appliances');
      } else if (text.toLowerCase().includes('water') || text.toLowerCase().includes('leak')) {
        botResponse = "This is considered an emergency. I'll direct you to the water shutoff guide immediately.";
        navigate('/issue/water-shutoff');
      } else {
        botResponse = nextOptions 
          ? "Here are some options that might help:"
          : "I'll take you to the relevant guide now.";
      }

      const botMessage: ChatMessage = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        options: options || generateMainOptions(navigate),
        category: currentCategory
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleReset = () => {
    setCurrentCategory(null);
    setMessages([{
      text: "👋 How else can I help you?",
      sender: 'bot',
      timestamp: new Date(),
      options: generateMainOptions(navigate)
    }]);
  };

  // Initialize chat when opened
  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        text: "👋 Hi! I'm your Gloucester maintenance assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        options: generateMainOptions(navigate)
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 
          to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white 
          hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-50 group"
        aria-label="Open chat assistant"
      >
        <div className="relative">
          <div className="absolute inset-0 w-7 h-7 bg-white/20 rounded-full animate-ping" />
          <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 
          border-white animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center 
          justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col 
            max-h-[85vh] animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-indigo-500 to-purple-500 
              rounded-t-2xl">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-6 h-6 bg-white/20 rounded-full animate-ping" />
                      <MessageCircle className="w-6 h-6 text-white relative z-10" />
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold">Maintenance Assistant</h3>
                    <p className="text-white/80 text-sm">Online & Ready to Help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {currentCategory && (
                    <button
                      onClick={handleReset}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white flex items-center"
                      title="Back to main menu"
                    >
                      <ArrowLeft className="w-5 h-5 mr-1" />
                      <span className="text-sm">Main Menu</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index}>
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <p className="whitespace-pre-wrap text-sm">{message.text}</p>
                      <time className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-indigo-100' : 'text-gray-500'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </time>
                    </div>
                  </div>

                  {message.options && (
                    <div className="mt-4 grid gap-2">
                      {message.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          onClick={() => handleOptionSelect(option.text, option.action())}
                          className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between
                            ${option.emergency
                              ? 'bg-red-50 hover:bg-red-100 border border-red-200 text-red-700'
                              : 'bg-white hover:bg-gray-50 border border-gray-200'
                            } group`}
                        >
                          <div className="flex items-center space-x-3">
                            {option.icon && getIconComponent(option.icon, option.emergency)}
                            <span className="font-medium">{option.text}</span>
                          </div>
                          <ChevronRight className={`w-5 h-5 ${
                            option.emergency ? 'text-red-500' : 'text-gray-400'
                          } group-hover:translate-x-0.5 transition-transform`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;