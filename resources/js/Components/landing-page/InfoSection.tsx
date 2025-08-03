import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

export default function InfoSection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Pellentesque ac bibendum tortor?",
      answer: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "In mi nulla, fringilla vestibulum?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const navigationItems = [
    { label: "Visit FAQ center", icon: ArrowRight },
    { label: "Visit our blog", icon: ArrowRight },
    { label: "Ask for more", icon: ArrowRight }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Title and Navigation */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl md:text-5xl font-bold font-greek text-[#581D00] mb-8 tracking-wide">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h1>
            
            {/* Blue accent line */}
            <div className="w-16 h-1 bg-blue-300 mb-8"></div>
            
            {/* Navigation Buttons */}
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full bg-[#FFDAD6] hover:bg-orange-300 transition-colors duration-200 p-4 rounded-lg flex items-center justify-between group"
                >
                  <span className="text-gray-800 font-medium">{item.label}</span>
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Section - FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full p-4 md:p-6 text-left flex items-center justify-between transition-colors duration-200 ${
                      index === 0 
                        ? 'bg-[#da5b1c] text-white hover:bg-amber-900' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    <span className="font-medium text-sm md:text-base pr-4">
                      {item.question}
                    </span>
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems[index] && (
                    <div className="p-4 md:p-6 bg-white animate-in slide-in-from-top-2 duration-200">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}