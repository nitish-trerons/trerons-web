import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Trophy, Heart, Star, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EventServices = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const processRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!pageRef.current) return;

        // Hero section animation
        if (heroRef.current) {
            const heroElements = heroRef.current.querySelectorAll('.hero-element');

            gsap.fromTo(heroElements,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }

        // Services section animation
        if (servicesRef.current) {
            const serviceCards = servicesRef.current.querySelectorAll('.service-card');
            const sectionHeading = servicesRef.current.querySelector('.section-heading');
            const sectionDescription = servicesRef.current.querySelector('.section-description');

            // Animate heading and description
            gsap.fromTo([sectionHeading, sectionDescription],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate service cards with stagger
            gsap.fromTo(serviceCards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Process section animation
        if (processRef.current) {
            const processSteps = processRef.current.querySelectorAll('.process-step');
            const sectionHeading = processRef.current.querySelector('.section-heading');
            const sectionDescription = processRef.current.querySelector('.section-description');

            // Animate heading and description
            gsap.fromTo([sectionHeading, sectionDescription],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: processRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate process steps with stagger
            gsap.fromTo(processSteps,
                { opacity: 0, y: 50, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: processRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // CTA section animation
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Hover animations for service cards
        const allServiceCards = pageRef.current.querySelectorAll('.service-card');
        allServiceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Hover animations for process steps
        const allProcessSteps = pageRef.current.querySelectorAll('.process-step');
        allProcessSteps.forEach(step => {
            step.addEventListener('mouseenter', () => {
                gsap.to(step, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            step.addEventListener('mouseleave', () => {
                gsap.to(step, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Button hover animations
        const allButtons = pageRef.current.querySelectorAll('button');
        allButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const services = [
        {
            icon: Users,
            title: "Corporate Events",
            description: "Professional corporate gatherings that drive business growth and team collaboration",
            features: ["Conference Management", "Product Launches", "Team Building", "Annual Meetings", "Trade Shows"],
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Calendar,
            title: "Conferences & Seminars",
            description: "Industry-leading conferences and professional development events",
            features: ["Speaker Management", "Registration Systems", "Venue Coordination", "Marketing Support", "Live Streaming"],
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: Heart,
            title: "Weddings & Celebrations",
            description: "Magical wedding ceremonies and milestone celebrations with attention to every detail",
            features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Guest Experience", "Photography/Videography"],
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: Trophy,
            title: "Sports Tournaments",
            description: "Exciting sports events with professional management and production",
            features: ["Tournament Brackets", "Live Streaming", "Sponsorship Management", "Media Coverage", "Award Ceremonies"],
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Star,
            title: "Branding Campaigns",
            description: "Strategic brand activation and experiential marketing campaigns",
            features: ["Brand Strategy", "Event Design", "Digital Integration", "Social Media", "ROI Tracking"],
            color: "from-purple-500 to-violet-500"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We start by understanding your vision, goals, and requirements to create a comprehensive event strategy."
        },
        {
            step: "02",
            title: "Design & Concept",
            description: "Our creative team develops unique concepts, themes, and visual identities that align with your brand."
        },
        {
            step: "03",
            title: "Coordination & Execution",
            description: "We handle all logistics, vendor management, and on-site coordination to ensure flawless execution."
        },
        {
            step: "04",
            title: "Delivery & Follow-up",
            description: "We deliver your event and provide comprehensive post-event analysis and support."
        }
    ];

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section ref={heroRef} className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-element mb-8">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Event
                        </h1>
                        <p className="hero-element text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            Creating unforgettable experiences through meticulous planning, creative execution, and professional management
                        </p>
                    </div>

                    <div className="hero-element flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Start Planning</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-orange-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                            <Phone className="mr-2 h-5 w-5" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={servicesRef} className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-4xl font-bold mb-6">Our Event Services</h2>
                        <p className="section-description text-xl text-muted-foreground max-w-3xl mx-auto">
                            From intimate gatherings to large-scale productions, we handle every aspect of your event
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="service-card group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">{service.title}</CardTitle>
                                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section ref={processRef} className="py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-4xl font-bold mb-6">Our Process</h2>
                        <p className="section-description text-xl text-muted-foreground max-w-3xl mx-auto">
                            We follow a proven methodology to ensure every event exceeds expectations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step) => (
                            <div key={step.step} className="process-step text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-2xl font-bold text-white">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-600 transition-colors duration-300">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-500/20">
                        <h3 className="text-3xl font-bold mb-6">Ready to Create Something Extraordinary?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss your vision and create an event that will be remembered for years to come
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-orange-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                                <Phone className="mr-2 h-5 w-5" />
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventServices;
