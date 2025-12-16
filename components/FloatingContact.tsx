import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingContact: React.FC = () => {
  return (
    <a 
      href={CONTACT_INFO.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group animate-fade-in-up"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
      <span className="font-bold text-sm hidden group-hover:block transition-all duration-300">
        Chat with Dr. Hetal
      </span>
    </a>
  );
};

export default FloatingContact;