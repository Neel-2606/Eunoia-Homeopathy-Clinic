import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Have a question about your health or our treatments? We're here to help.</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-2/5 bg-gray-900 text-white p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8">Clinic Information</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200">Visit Us</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200">Call Us</h4>
                    <p className="text-gray-400 text-sm mt-1">{CONTACT_INFO.phone}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200">Email</h4>
                    <p className="text-gray-400 text-sm mt-1">{CONTACT_INFO.email}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200">Timings</h4>
                    <p className="text-gray-400 text-sm mt-1">{CONTACT_INFO.timings}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-800">
               <p className="text-gray-500 text-xs">
                 Follow us for health tips
               </p>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="lg:w-3/5 relative">
            
            {/* The Form */}
            <div className="p-10 lg:p-14">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600 mb-6">We will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary font-bold underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone</label>
                      <input type="tel" required className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your Number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Subject</label>
                    <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>General Inquiry</option>
                      <option>Appointment</option>
                      <option>Treatment Details</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Map Strip at bottom of form side */}
            <div className="h-64 bg-gray-200 w-full relative group">
               <iframe 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.998495632483!2d73.14912937504868!3d22.316531942316416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ebb1419725%3A0xc3247072972986f3!2sSharanam%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Map"
                ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;