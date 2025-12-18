import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <main className="flex-grow">
            
           
            {/* Meet Dr. Hetal Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://picsum.photos/seed/drhetalpandav/600/750"
                                    alt="Dr. Hetal Pandav"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply"></div>
                            </div>
                            {/* Decorative background blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-rose-100 rounded-full blur-3xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Meet Our Expert</span>
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">Dr. Hetal Pandav</h2>
                                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Dr. Hetal Pandav is a trusted, patient-focused, and experienced homeopathic doctor with a long history of successfully treating patients. She is renowned for her expertise in constitutional homeopathy and her compassionate approach to patient care.
                                </p>
                                <p>
                                    With a deep understanding of the human body and mind, Dr. Hetal believes in treating the root cause of ailments rather than just suppressing symptoms. Her dedication to holistic healing empowers patients to achieve lifelong good health.
                                </p>
                                <p>
                                    Specializing in lifestyle management, weight loss, and chronic disorders, Dr. Hetal combines traditional homeopathic wisdom with modern diagnostic insights to provide personalized treatment plans.
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="inline-block bg-neutral px-8 py-4 rounded-xl border border-gray-200">
                                    <p className="font-serif font-bold text-xl text-primary">"Healing begins when we listen to the body."</p>
                                    <p className="text-right text-gray-500 text-sm mt-2">- Dr. Hetal Pandav</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HETAL Section - Vertical List Style */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Our Core Values</h2>
                        <p className="text-gray-600">The pillars that define our practice and commitment to your well-being.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* H */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            {/* Icon Flag */}
                            <div className="md:w-24 bg-[#802640] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">H</span>
                                {/* Flap effect for detail */}
                                <div className="absolute top-0 right-full w-4 h-full bg-[#5a1b2d] rounded-l-lg -z-10 hidden md:block opacity-50 skew-y-6 origin-top-right"></div>
                            </div>

                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#802640] mb-2 flex items-center">
                                    Healing with Harmony <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Holistic Healing)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Addressing the physical, emotional, and mental aspects of health for complete well-being. At our core, we abide by the timeless virtue of honor.
                                </p>
                            </div>
                        </div>

                        {/* E */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#7fc343] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">E</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#4a7a23] mb-2 flex items-center">
                                  Empowering Patient Care <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Empathetic Care)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Listening to your story with compassion. Our pursuit of excellence is relentless, ensuring top-tier services and unparalleled satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* T */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#136da0] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">T</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#0d4d73] mb-2 flex items-center">
                                    Togetherness in Teamwork <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Trusted Expertise)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Building relationships based on integrity. We believe in fostering an atmosphere of cooperation where collective efforts lead to higher quality results.
                                </p>
                            </div>
                        </div>

                        {/* A */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#802640] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">A</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#802640] mb-2 flex items-center">
                                    Aligned with Modern Homeopathy <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Advanced Homoeopathy)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Utilizing modern advancements. We are fully conscious of our actions and embrace ownership with grace, poised to face any outcomes.
                                </p>
                            </div>
                        </div>

                        {/* L */}
                        <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-white rounded-r-[4rem] rounded-l-2xl shadow-lg border border-white group transition-transform hover:-translate-y-1">
                            <div className="md:w-24 bg-[#7fc343] relative flex items-center justify-center py-6 rounded-l-2xl rounded-br-[4rem] md:rounded-br-none md:rounded-r-[4rem] shadow-md z-10 shrink-0">
                                <span className="text-4xl font-bold text-white">L</span>
                            </div>
                            <div className="p-6 md:pl-10 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#4a7a23] mb-2 flex items-center">
                                    Lifestyle wellness <span className="ml-2 text-xs opacity-50 text-black font-normal uppercase tracking-wider">(Reverence for Diversity)</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Guiding you towards a healthier lifestyle. We cultivate an environment of mutual respect, cherishing the rich tapestry of our clientele.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 bg-rose-50 rounded-3xl border border-rose-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                "Our commitment is to educate and motivate individuals to reach their optimal fitness potential and inspire them to continue reaching for their highest ideal of health."
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 bg-green-50 rounded-3xl border border-green-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                "Mind and Body Fitness for Lifelong Good Health can be achieved through holistic health approaches. To assist people in attaining their vision, dreams, and goals; to inspire, motivate, and educate people to live lives of health and well-being."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutPage;
