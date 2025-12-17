import React from 'react';

const HealthImagesCarousel: React.FC = () => {
    const images = [
        { src: '/Client images/Digestive.jpg', alt: 'Digestive Health' },
        { src: '/Client images/Dipression.webp', alt: 'Depression Treatment' },
        { src: '/Client images/Female-Menstrual-system.webp', alt: 'Female Menstrual Health' },
        { src: '/Client images/Hair_removal.webp', alt: 'Hair Treatment' },
        { src: '/Client images/Nerve_disorder.jpg', alt: 'Nerve Disorders' },
        { src: '/Client images/child_cartoon.avif', alt: 'Child Health' },
        { src: '/Client images/fungus_khujali.jpg', alt: 'Skin Conditions' },
        { src: '/Client images/lung-cancer.jpg', alt: 'Respiratory Health' },
        { src: '/Client images/mental_health.jpg', alt: 'Mental Health' },
        { src: '/Client images/musculoskeletal-disorders.webp', alt: 'Musculoskeletal Health' },
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
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Container */}
                <div className="flex animate-scroll-infinite hover:pause-animation">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4 group"
                            style={{ width: '320px' }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-100">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-white font-bold text-lg">{image.alt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default HealthImagesCarousel;
