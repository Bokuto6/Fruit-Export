import React, { useState } from 'react';
import { Send, User, UserCircle, Bot } from 'lucide-react';

const Communication: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John (Carrier)', content: 'Hello, I have a question about the shipment SH001.', timestamp: '10:30 AM' },
    { id: 2, sender: 'You', content: 'Sure, what would you like to know?', timestamp: '10:32 AM' },
    { id: 3, sender: 'John (Carrier)', content: 'Is there any special handling required for the fruits?', timestamp: '10:35 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      // Simulate AI response
      const aiResponse = await getAIResponse(newMessage);
      setMessages(prevMessages => [...prevMessages, {
        id: prevMessages.length + 1,
        sender: 'AI Assistant',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  const getAIResponse = async (message: string): Promise<string> => {
    // In a real application, this would be an API call to a GenAI service
    // For this demo, we'll use a simple response generation
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    const responses = [
      "I understand your concern. Special handling is indeed required for these fruits. They should be kept at a constant temperature of 10°C during transit.",
      "Great question! For shipment SH001, please ensure the fruits are packed in ventilated crates to maintain freshness.",
      "Based on the shipment details, no special handling is required beyond our standard procedures for perishable goods.",
      "Thank you for your inquiry. I've checked the records, and shipment SH001 contains mangoes which require careful handling to prevent bruising.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="h-[calc(100vh-6rem)]">
      <h1 className="text-3xl font-bold mb-6">Communication</h1>
      <div className="bg-white shadow-md rounded-lg flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'You' ? 'bg-blue-500 text-white' : message.sender === 'AI Assistant' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                <div className="flex items-center mb-1">
                  {message.sender === 'You' ? (
                    <UserCircle className="h-5 w-5 mr-2" />
                  ) : message.sender === 'AI Assistant' ? (
                    <Bot className="h-5 w-5 mr-2" />
                  ) : (
                    <User className="h-5 w-5 mr-2" />
                  )}
                  <span className="font-semibold">{message.sender}</span>
                  <span className="text-xs ml-2">{message.timestamp}</span>
                </div>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="border-t p-4 flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Communication;