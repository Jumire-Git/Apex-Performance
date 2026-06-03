import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm APEX Performance Medicine's assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const QUICK_ACTIONS = [
    { label: 'What is APEX?', question: 'What is APEX Performance Medicine?' },
    { label: 'Services & Treatments', question: 'What services do you offer?' },
    { label: 'Book an Appointment', question: 'How can I schedule an appointment?' },
    { label: 'Contact Info', question: 'How do I contact APEX?' },
  ];

  // Knowledge base for Q&A
  const knowledgeBase = {
    services: [
      { keywords: ['services', 'what do you offer', 'treatments', 'bloodwork', 'iv therapy', 'peptides', 'sauna'], 
        response: 'We offer comprehensive services:\n\n• Advanced Bloodwork Analysis (80+ biomarkers)\n• IV Therapy & Nutrient Optimization\n• Peptide Treatments\n• Hormone Optimization\n• Sauna Therapy & Recovery\n• Personalized Wellness Protocols\n\nWhich service interests you most?' },
    ],
    booking: [
      { keywords: ['book', 'appointment', 'schedule', 'reserve', 'how to book'],
        response: 'Booking is simple:\n\n1. Click "Book Consultation" or visit our Contact page\n2. Choose your preferred time (virtual or in-person)\n3. We\'ll reach out within 24 hours to confirm\n\nEmail: optimize@apexperformance.com\nPhone: (305) 555-0100' },
    ],
    location: [
      { keywords: ['location', 'address', 'where', 'office', 'miami'],
        response: 'APEX Performance Medicine\nLocation: Miami, Florida\n\nFor exact address & directions, visit our Contact page or call (305) 555-0100.' },
    ],
    hours: [
      { keywords: ['hours', 'open', 'when', 'time', 'available'],
        response: 'Operating Hours:\n\n• Monday - Friday: 9am - 6pm EST\n• Saturday: Select appointments available\n• Sunday: Closed\n\nContact us to book your slot!' },
    ],
    cost: [
      { keywords: ['cost', 'price', 'fee', 'how much', 'investment', 'expensive'],
        response: 'Pricing varies based on your personalized protocol:\n\n• Initial Assessment: Includes comprehensive labs\n• Customized Protocols: Tailored to your goals\n• Flexible Payment Plans: Available\n\nSchedule a consultation to get your personalized quote.' },
    ],
    team: [
      { keywords: ['doctor', 'team', 'provider', 'who', 'credentials'],
        response: 'Our Team:\n\nBoard-certified physicians specializing in:\n• Longevity & Performance Medicine\n• Advanced Diagnostics\n• Personalized Optimization\n\nLearn more about our experts on our About page.' },
    ],
    concierge: [
      { keywords: ['concierge', 'membership', 'benefit', 'advantage'],
        response: 'Concierge Medicine Benefits:\n\n✓ Direct access to your physician\n✓ Priority scheduling\n✓ Longer appointment times\n✓ Personalized attention\n✓ Proactive health optimization\n\nYes, we offer true concierge care!' },
    ],
    contact: [
      { keywords: ['contact', 'email', 'phone', 'number'],
        response: 'Contact Us:\n\n📧 Email: optimize@apexperformance.com\n📞 Phone: (305) 555-0100\n📍 Location: Miami, Florida\n\nWe respond within 24 hours!' },
    ],
    company: [
      { keywords: ['apex', 'about', 'company', 'mission', 'who are you', 'what is', 'performance'],
        response: 'APEX Performance Medicine\n\nWe\'re a premier concierge longevity practice specializing in:\n\n• High-achievers optimization\n• Advanced biomarker analysis (80+ markers)\n• Science-based performance protocols\n• Proactive disease prevention\n\nUnlike traditional medicine, we identify issues before they become problems. Our mission: help you reach peak optimization across health, energy, and longevity.' },
    ],
  };

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    for (const category in knowledgeBase) {
      for (const item of knowledgeBase[category]) {
        if (item.keywords.some(keyword => lowerMessage.includes(keyword))) {
          return item.response;
        }
      }
    }

    // Default response
    return "I'm not sure about that. Could you rephrase your question? Or feel free to contact us directly at optimize@apexperformance.com.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: findResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleQuickAction = (question) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: findResponse(question),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        title="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>APEX Assistant</h3>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  {msg.text.split('\n').map((line, index) => (
                    <div key={index} className="message-line">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Quick Action Buttons */}
            <div className="chatbot-quick-actions">
              <p className="quick-actions-label">Popular questions:</p>
              {QUICK_ACTIONS.map((action, index) => (
                <button
                  key={index}
                  className="quick-action-btn"
                  onClick={() => handleQuickAction(action.question)}
                >
                  {action.label}
                </button>
              ))}
            </div>
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
