import React from 'react';
import { Calendar, BookOpen, UserCheck, ArrowRight, Library, GraduationCap } from 'lucide-react';
import { STUDENT_SEMINARS, CASE_STUDIES } from '../constants';

const StudentPortal: React.FC = () => {
  return (
    <main className="flex-grow bg-gray-50">
      
      {/* Student Header */}
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Student and Intern Portal</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Enhance your clinical knowledge. Access advanced resources on the Organon, Materia Medica, and Repertory exclusively for students of Dr. Hetal Pandav.
          </p>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-rose-100 rounded-lg text-primary">
            <Calendar size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Seminars</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STUDENT_SEMINARS.map(seminar => (
            <div key={seminar.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all group">
              <div className="w-full md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                <img src={seminar.image} alt={seminar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                  {seminar.date}
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{seminar.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{seminar.description}</p>
                </div>
                <button className="self-start text-primary font-bold text-sm hover:text-rose-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Register Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-green-100 rounded-lg text-secondary">
              <Library size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Clinical Case Archive</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map(study => (
              <div key={study.id} className="bg-neutral rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-gray-900 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <BookOpen size={20} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
                <button className="w-full py-3 border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                  Read Full Case
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default StudentPortal;