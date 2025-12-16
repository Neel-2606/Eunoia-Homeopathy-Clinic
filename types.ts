import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string; // The "Tooltip" or short description
  icon: LucideIcon;
  details: string[]; // List of specific ailments (e.g., Asthma, Acne)
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Seminar {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  fullContent?: string; // Placeholder for full text
  category: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  timings: string;
  mapLink: string;
  whatsappLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  condition: string;
}