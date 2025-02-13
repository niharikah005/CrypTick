import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'What is a pump and dump scheme?',
      answer: 'A pump and dump is a fraudulent trading practice where the price of a cryptocurrency is artificially inflated ("pumped") through misleading or false information, followed by a sudden sell-off ("dump") that causes the price to crash.'
    },
    {
      question: 'How can users benefit from identifying pump and dump schemes?',
      answer: 'By spotting pump and dump schemes, users can avoid investing in manipulated assets, protecting their investments from sudden losses.'
    },
    {
      question: 'Can this system prevent financial losses in cryptocurrency trading?',
      answer: 'While it cannot guarantee complete protection, identifying these schemes helps users make more informed decisions and reduce the risk of financial loss.'
    },
    {
      question: 'What are the key indicators or patterns that indicate these schemes?',
      answer: 'Look for rapid price spikes with little to no news or fundamental changes, an unusually high volume of trades, and coordinated social media activity promoting the coin.'
    }
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-radial from-[#451795] to-[#12032b]">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="transition-all duration-300 ease-in-out"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full px-6 py-4 text-left rounded-lg flex items-center justify-between
                transition-all duration-200 hover:bg-white/5
                ${openIndex === index ? 'bg-white/10 backdrop-blur-lg' : 'bg-white/5 backdrop-blur-sm'}`}
            >
              <span className="text-lg font-medium text-white">{item.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="w-6 h-6 text-[#00ff88] ml-4 flex-shrink-0" />
              ) : (
                <FiChevronDown className="w-6 h-6 text-gray-300 ml-4 flex-shrink-0" />
              )}
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 py-4 text-gray-300 border-l-2 border-[#00ff88] ml-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;