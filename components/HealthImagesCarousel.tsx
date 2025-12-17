import React from 'react';

const HealthImagesCarousel: React.FC = () => {
    const images = [
        { src: '/Client images/child_cartoon.avif', alt: 'Child Care' },
        { src: '/Client images/Digestive.jpg', alt: 'Digestive Health' },
        { src: '/Client images/Dipression.webp', alt: 'Lifestyle Diseases' },
        { src: '/Client images/Female-Menstrual-system.webp', alt: "Women's Health" },
        { src: '/Client images/fungus_khujali.jpg', alt: 'Skin Conditions' },
        { src: '/Client images/Hair_removal.webp', alt: 'Hair Rejuvenation' },
        { src: '/Client images/lung-cancer.jpg', alt: 'Respiratory' },
        { src: '/Client images/mental_health.jpg', alt: 'Mental Wellness' },
        { src: '/Client images/musculoskeletal-disorders.webp', alt: 'Musculoskeletal' },
        { src: '/Client images/Nerve_disorder.jpg', alt: 'Nerve Disorders' },
        { src: '/Client images/urinary.jpg', alt: 'Urinary Health' },
    ];

    // Duplicate images for seamless infinite loop
    const duplicatedImages = [...images, ...images];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                        Conditions We Treat
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600">
                        Comprehensive homeopathic solutions for a wide range of health conditions
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Gradient Overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-green-50 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Container */}
                <div className="flex animate-scroll-infinite">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4"
                            style={{ width: '320px' }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-md bg-white border-[3px] border-rose-400 transition-all duration-300 hover:shadow-xl active:shadow-2xl active:ring-4 active:ring-rose-300/50 active:border-rose-500 cursor-pointer">
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Label Below Image */}
                                <div className="p-4 bg-white border-t-2 border-gray-100">
                                    <p className="text-gray-800 font-bold text-center text-base">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-320px * 11 - 32px * 11));
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 55s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default HealthImagesCarousel;
