import React, { useState } from 'react';
import { Search, MapPin, Calendar, Activity, ArrowRight, ShieldCheck, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, FAQS, FACILITIES, CONTACT_INFO, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';

const PatientPortal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.details.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="flex-grow">
      
      {/* HERO SECTION: Professional & Trust-Building */}
      <section className="relative bg-gradient-to-br from-rose-50/50 via-white to-green-50/30 pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-rose-100 rounded-full shadow-sm">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">Rated #1 Homoeopathy Clinic in Gotri</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">
                Healing <span className="text-primary italic">Root Causes</span>, <br/>
                Naturally.
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-light">
                Experience the precision of constitutional homeopathy with Dr. Hetal Pandav. Safe, non-toxic, and permanent cures for chronic diseases.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/book-appointment" 
                  className="bg-primary hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-rose-200 transition-all transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm transition-all transform hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex items-center gap-8 text-sm font-semibold text-gray-500 border-t border-gray-100 mt-8">
                 <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary"/> FDA Approved Medicines</span>
                 <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-secondary"/> No Side Effects</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-md">
                 {/* Main Image */}
                 <div className="relative rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl">
                    <img 
                      src="https://picsum.photos/seed/drhetal/600/750" 
                      alt="Dr. Hetal Pandav" 
                      className="w-full h-auto object-cover bg-gray-100"
                    />
                    
                    {/* Overlay Stats */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-gray-100">
                      <div className="flex justify-between text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">15+</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Years</p>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">5k+</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Patients</p>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">4.9</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Rating</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-100/40 to-green-100/40 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US: Feature Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Eunoia?</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500">We don't just treat symptoms; we treat the person. Our approach is holistic, gentle, and scientifically grounded.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
               <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                 <Activity size={28} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Root Cause Treatment</h3>
               <p className="text-gray-600 leading-relaxed text-sm">We analyze your genetic history, lifestyle, and emotional state to find the constitutional remedy that uproots the disease.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
               <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Side Effects</h3>
               <p className="text-gray-600 leading-relaxed text-sm">Safe for infants, pregnant women, and the elderly. Our medicines are non-toxic, non-addictive, and steroid-free.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
               <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                 <Heart size={28} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
               <p className="text-gray-600 leading-relaxed text-sm">Dr. Hetal personally dedicates time to listen to your story. No rushed appointments, just compassionate healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900">Specialized Treatments</h2>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-72 mt-6 md:mt-0">
               <input 
                  type="text" 
                  placeholder="Search condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
               />
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No services found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative mt-4">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-serif">"</div>
                <p className="text-gray-600 italic mb-6 pt-4 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-primary font-bold uppercase">{t.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES STRIP */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            {FACILITIES.map((facility, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">
                  <facility.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-bold text-lg">{facility.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-neutral rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-gray-100">
                <summary className="flex items-center justify-between font-bold text-gray-800">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ArrowRight size={20} className="rotate-90 group-open:-rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-rose-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Ready to restore your health?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a consultation today and start your journey towards a healthier, happier life.</p>
          <Link to="/book-appointment" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-rose-700 transition-all transform hover:-translate-y-1">
            Book Appointment Now
          </Link>
        </div>
      </section>

    </main>
  );
};

export default PatientPortal;