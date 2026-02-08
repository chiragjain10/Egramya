import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ name: "", interest: "" });
  const [messages, setMessages] = useState([
    { text: "Namaste! 🙏 Welcome to Gramya.", sender: "bot" }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Add the first question after a slight delay if not already there
      setTimeout(() => {
        setMessages(prev => {
          if (prev.length === 1) {
            return [...prev, { text: "May I know your name please?", sender: "bot" }];
          }
          return prev;
        });
      }, 1000);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    const userInput = input;
    setInput("");

    // Bot Logic
    setTimeout(() => {
      if (step === 0) {
        // User provided name
        setUserData(prev => ({ ...prev, name: userInput }));
        setMessages(prev => [...prev, { 
          text: `Nice to meet you, ${userInput}! 😊 What are you interested in? (Training / Partnership / General)`, 
          sender: "bot" 
        }]);
        setStep(1);
      } else if (step === 1) {
        // User provided interest
        setUserData(prev => ({ ...prev, interest: userInput }));
        setMessages(prev => [...prev, { 
          text: "Great! Redirecting you to our WhatsApp expert... 🚀", 
          sender: "bot" 
        }]);
        setStep(2);
        
        // Redirect logic
        setTimeout(() => {
          const phoneNumber = "919876543210"; // Replace with actual number
          const text = `Namaste, my name is ${userData.name}. I am interested in ${userInput} regarding the Village Dairy Counsellors program.`;
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
          window.open(url, '_blank');
          setIsOpen(false); // Close widget after redirect
          // Reset chat for next time (optional)
          setStep(0);
          setMessages([{ text: "Namaste! 🙏 Welcome to Gramya. May I know your name please?", sender: "bot" }]);
        }, 2000);
      }
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* Robo Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border-2 border-[#be123c]"
          >
            {/* Robo Header */}
            <div className="bg-[#be123c] p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden border-2 border-rose-200">
                  <img 
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=GramyaBot" 
                    alt="Robo" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Gramya Assistant</h4>
                  <p className="text-rose-100 text-[10px] uppercase tracking-wider">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-80 bg-rose-50/50 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-rose-200">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-3 text-sm shadow-sm ${
                    msg.sender === 'bot' 
                      ? 'self-start bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-gray-700 border border-gray-100' 
                      : 'self-end bg-[#be123c] text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={step === 0 ? "Enter your name..." : "Type your message..."}
                className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#be123c] focus:bg-white transition-all text-gray-700"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2.5 rounded-full text-white transition-all shadow-md ${
                  input.trim() ? 'bg-[#be123c] hover:bg-[#9f1239] hover:scale-105' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button (Animated) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm z-20">1</span>
        <div className="absolute inset-0 bg-[#be123c] rounded-full animate-ping opacity-20 duration-1000"></div>
        <div className="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 border-white z-10 relative overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow">
           <AnimatePresence mode='wait'>
             {isHovered ? (
               <motion.img 
                 key="robo"
                 src="https://api.dicebear.com/7.x/bottts/svg?seed=GramyaBot" 
                 alt="Robo"
                 initial={{ opacity: 0, rotate: -90 }}
                 animate={{ opacity: 1, rotate: 0 }}
                 exit={{ opacity: 0, rotate: 90 }}
                 className="w-10 h-10"
               />
             ) : (
               <motion.div
                 key="whatsapp"
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0 }}
               >
                 <MessageCircle color="white" size={36} />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </motion.button>

    </div>
  );
};

export default WhatsAppWidget;
