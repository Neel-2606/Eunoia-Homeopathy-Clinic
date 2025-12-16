import React from 'react';
import { ServiceCategory } from '../types';

interface ServiceCardProps {
  service: ServiceCategory;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-rose-50 rounded-lg group-hover:bg-primary transition-colors duration-300">
          <service.icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
          <p className="text-xs text-secondary font-medium italic">"{service.description}"</p>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex flex-wrap gap-2">
          {service.details.map((detail, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {detail}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;