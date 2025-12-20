import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Calendar, Phone, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Student Portal', path: '/student' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Professional Medical Style */}
      <div className="bg-primary text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
              <MapPin size={14} /> Gotri, Vadodara
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={14} /> {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity hover:scale-110 transform" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_INFO.facebookLink} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity hover:scale-110 transform" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-rose-50 rounded-full border border-primary/20 overflow-hidden group-hover:shadow-md transition-all">
              <img src="/logo.jpg" alt="Lotus Logo" className="object-cover w-full h-full opacity-90" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                Eunoia Homoeopathy
              </h1>
              <p className="text-[10px] md:text-xs text-secondary font-bold tracking-widest uppercase">
                Dr. Hetal Pandav
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-1">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive && link.path !== '/'
                      ? 'text-primary bg-rose-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/book-appointment"
              className="flex items-center gap-2 bg-secondary hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Calendar size={16} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-rose-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-secondary text-white w-full py-3 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;