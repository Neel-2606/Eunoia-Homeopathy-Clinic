import React from 'react';
import { X, Video, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <h2 className="text-lg font-bold">Book Appointment</h2>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            How would you like to consult with Dr. Hetal Pandav?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Option A: WhatsApp / Online */}
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-6 border-2 border-green-100 bg-green-50 rounded-lg hover:border-green-500 hover:shadow-md transition-all group text-center"
            >
              <div className="bg-green-100 p-3 rounded-full mb-3 group-hover:bg-green-200 transition-colors">
                <Video size={24} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Online Consultation</h3>
              <p className="text-xs text-gray-500">Connect via WhatsApp Video</p>
              <span className="mt-4 text-xs font-bold text-green-600 underline">Start Chat</span>
            </a>

            {/* Option B: In-Clinic */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-rose-100 bg-rose-50 rounded-lg text-center">
              <div className="bg-rose-100 p-3 rounded-full mb-3">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">In-Person Visit</h3>
              <p className="text-xs text-gray-500 mb-2">Gotri, Vadodara</p>
              <p className="text-xs font-semibold text-gray-700 mb-3">{CONTACT_INFO.phone}</p>
              
              <a 
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-300 text-gray-700 text-xs px-3 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get Directions
              </a>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-500">
            Clinic Timings: {CONTACT_INFO.timings}
          </p>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;