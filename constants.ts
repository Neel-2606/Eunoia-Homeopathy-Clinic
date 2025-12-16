import { 
  Wind, Smile, User, Utensils, Activity, 
  Zap, Droplets, Heart, Baby, Brain, 
  Thermometer, Monitor, Microscope, Truck
} from 'lucide-react';
import { ServiceCategory, FaqItem, Seminar, CaseStudy, ContactDetails, Testimonial } from './types';

export const CONTACT_INFO: ContactDetails = {
  address: "FF7, First Floor, Sharanam Complex, Opp. FortuneAir, Krunal Cross Road, Gotri, Vadodara, 390021",
  phone: "+91 81413 27947",
  email: "hetalpandav712@gmail.com",
  timings: "Monday to Saturday, 5:30 PM to 8:30 PM",
  // Google Maps Search Link based on address
  mapLink: "https://www.google.com/maps/search/?api=1&query=Sharanam+Complex+Gotri+Vadodara",
  // WhatsApp API link
  whatsappLink: "https://wa.me/918141327947?text=Hello%20Dr.%20Hetal,%20I%20would%20like%20to%20book%20an%20appointment."
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'respiratory',
    title: 'Respiratory',
    description: 'Natural relief for chronic asthma and allergies without steroids.',
    icon: Wind,
    details: ['Asthma', 'Allergic Rhinitis', 'Sinusitis', 'Bronchitis', 'Pneumonia']
  },
  {
    id: 'skin',
    title: 'Skin Conditions',
    description: 'Deep healing for eczema, psoriasis, and persistent infections.',
    icon: Smile,
    details: ['Eczema', 'Psoriasis', 'Acne', 'Warts', 'Fungal Infection']
  },
  {
    id: 'hair',
    title: 'Hair Rejuvenation',
    description: 'Targeting root causes of hair fall and alopecia naturally.',
    icon: User,
    details: ['Hair-fall', 'Alopecia']
  },
  {
    id: 'digestive',
    title: 'Digestive Health',
    description: 'Gentle correction for IBS, acidity, and chronic indigestion.',
    icon: Utensils,
    details: ['Indigestion', 'Acidity', 'IBS', 'Ulcers', 'Piles', 'Fissures']
  },
  {
    id: 'musculo',
    title: 'Musculoskeletal',
    description: 'Pain management and mobility restoration for joints and bones.',
    icon: Activity,
    details: ['Arthritis', 'Joint pain', 'Sprains', 'Gout']
  },
  {
    id: 'nerve',
    title: 'Nerve Disorders',
    description: 'Soothing relief for sciatica and nerve-related neuralgia.',
    icon: Zap,
    details: ['Sciatica', 'Neuralgia']
  },
  {
    id: 'urinary',
    title: 'Urinary Health',
    description: 'Effective resolution for recurrent infections and stones.',
    icon: Droplets,
    details: ['Infections', 'Stones']
  },
  {
    id: 'women',
    title: "Women's Health",
    description: 'Hormonal balance for PCOS, menopause, and menstrual health.',
    icon: Heart,
    details: ['PCOS', 'Irregular periods', 'Menopause', 'Leucorrhea']
  },
  {
    id: 'children',
    title: 'Child Care',
    description: 'Safe, sweet pills for immunity, behavior, and growth.',
    icon: Baby,
    details: ['Behavioral issues', 'Common illnesses']
  },
  {
    id: 'mental',
    title: 'Mental Wellness',
    description: 'Holistic support for anxiety, depression, and stress management.',
    icon: Brain,
    details: ['Anxiety', 'Depression', 'Stress Management']
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Diseases',
    description: 'Constitutional management of diabetes, BP, and thyroid issues.',
    icon: Activity,
    details: ['Diabetes', 'Hypertension', 'Thyroid (Hypo/Hyper)']
  },
  {
    id: 'acute',
    title: 'Acute Illness',
    description: 'Rapid recovery from seasonal flu, fevers, and colds.',
    icon: Thermometer,
    details: ['Cold', 'Cough', 'Fever', 'Flu']
  }
];

export const FACILITIES = [
  { icon: Monitor, text: "Online Consultation" },
  { icon: Microscope, text: "Diagnostic Lab Tie-ups" },
  { icon: Truck, text: "Medicine Home Delivery" }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is Homeopathy slow to act?",
    answer: "This is a common myth. In acute conditions like fevers or colds, homeopathy can act as fast as conventional medicine. In chronic cases (like arthritis or eczema) that have existed for years, cure takes time because we treat the root cause, not just suppress symptoms."
  },
  {
    question: "Can I take homeopathic medicines with other drugs?",
    answer: "Yes, generally. Homeopathic medicines are non-toxic and do not chemically interact with conventional drugs. However, always inform Dr. Hetal about your current prescriptions so she can manage the dosage effectively."
  },
  {
    question: "Are there any dietary restrictions?",
    answer: "Minimal restrictions may apply, such as avoiding strong flavors like raw onion, garlic, or coffee immediately before or after taking the dose, as they might interfere with the absorption of the sweet pills."
  },
  {
    question: "Do steroids exist in homeopathy?",
    answer: "Absolutely not. Homeopathic remedies are prepared from natural sources (plants, minerals) and undergo potentization. Dr. Hetal Pandav follows ethical practice standards and ensures 100% steroid-free treatment."
  },
  {
    question: "Is it safe for infants and pregnant women?",
    answer: "Yes, it is one of the safest systems of medicine for all ages, including newborns and pregnant women, as the doses are minute and devoid of toxic side effects."
  }
];

export const STUDENT_SEMINARS: Seminar[] = [
  {
    id: 'sem1',
    title: "Mastering the Organon: Philosophy in Practice",
    date: "October 15, 2023",
    description: "A deep dive into Hahnemannian principles applied to modern chronic diseases.",
    image: "https://picsum.photos/seed/seminar1/400/300"
  },
  {
    id: 'sem2',
    title: "Pediatric Constitutional Prescribing",
    date: "November 05, 2023",
    description: "Identifying the core constitution in children through behavioral observation.",
    image: "https://picsum.photos/seed/seminar2/400/300"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: "Case of Chronic Psoriasis",
    category: "Skin",
    summary: "A 45-year-old male with 10-year history of plaque psoriasis. Treated with constitutional remedy Natrum Mur with 90% clearance in 6 months."
  },
  {
    id: 'case2',
    title: "Reversing Pediatric Asthma",
    category: "Respiratory",
    summary: "7-year-old child dependent on inhalers. Anti-miasmatic treatment reduced frequency of attacks significantly within 3 months."
  },
  {
    id: 'case3',
    title: "PCOS and Infertility",
    category: "Women's Health",
    summary: "Successful conception after 1 year of homeopathic treatment for Polycystic Ovarian Syndrome coupled with lifestyle management."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Rajesh K.",
    location: "Vadodara",
    text: "I was suffering from chronic sinusitis for 15 years. Conventional medicine only gave temporary relief. Dr. Hetal's constitutional treatment completely cured me in 8 months.",
    condition: "Sinusitis"
  },
  {
    id: 't2',
    name: "Priya S.",
    location: "Online Patient (Mumbai)",
    text: "My daughter had recurring tonsillitis. Dr. Hetal's video consultation was very thorough. The sweet pills worked wonders and we avoided surgery.",
    condition: "Pediatric Tonsillitis"
  },
  {
    id: 't3',
    name: "Anita Desai",
    location: "Vadodara",
    text: "The best place for holistic healing. Dr. Pandav listens patiently and her diagnosis is spot on. My migraines have vanished.",
    condition: "Migraine"
  }
];