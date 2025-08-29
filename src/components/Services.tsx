import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, Code, ArrowRight, Film, Palette, Globe, Smartphone, Monitor, Share2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const eventSectionRef = useRef<HTMLElement>(null);
    const filmSectionRef = useRef<HTMLElement>(null);
    const techSectionRef = useRef<HTMLElement>(null);
    const ctaSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!servicesRef.current) return;

        // Wait for a moment to ensure DOM is ready
        const timer = setTimeout(() => {
            // Event Services Section Animation
            if (eventSectionRef.current) {
                const eventCards = eventSectionRef.current.querySelectorAll('.event-card');
                const eventHeading = eventSectionRef.current.querySelector('.section-heading');
                const eventDescription = eventSectionRef.current.querySelector('.section-description');
                const eventCTA = eventSectionRef.current.querySelector('.section-cta');

                // Ensure elements are visible initially
                gsap.set([eventHeading, eventDescription, eventCards, eventCTA], {
                    opacity: 1,
                    y: 0,
                    scale: 1
                });

                // Create scroll trigger for the entire section
                ScrollTrigger.create({
                    trigger: eventSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        // Animate heading and description
                        gsap.fromTo([eventHeading, eventDescription],
                            { opacity: 0, y: 50 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: "power2.out"
                            }
                        );

                        // Animate service cards with stagger
                        gsap.fromTo(eventCards,
                            { opacity: 0, y: 50, scale: 0.9 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                stagger: 0.2,
                                ease: "power2.out"
                            }
                        );

                        // Animate CTA
                        gsap.fromTo(eventCTA,
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                delay: 0.5,
                                ease: "power2.out"
                            }
                        );
                    }
                });
            }

            // Film & Video Section Animation
            if (filmSectionRef.current) {
                const filmCards = filmSectionRef.current.querySelectorAll('.film-card');
                const filmHeading = filmSectionRef.current.querySelector('.section-heading');
                const filmDescription = filmSectionRef.current.querySelector('.section-description');
                const filmCTA = filmSectionRef.current.querySelector('.section-cta');

                // Ensure elements are visible initially
                gsap.set([filmHeading, filmDescription, filmCards, filmCTA], {
                    opacity: 1,
                    y: 0,
                    scale: 1
                });

                // Create scroll trigger for the entire section
                ScrollTrigger.create({
                    trigger: filmSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        // Animate heading and description
                        gsap.fromTo([filmHeading, filmDescription],
                            { opacity: 0, y: 50 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: "power2.out"
                            }
                        );

                        // Animate service cards with stagger
                        gsap.fromTo(filmCards,
                            { opacity: 0, y: 50, scale: 0.9 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                stagger: 0.2,
                                ease: "power2.out"
                            }
                        );

                        // Animate CTA
                        gsap.fromTo(filmCTA,
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                delay: 0.5,
                                ease: "power2.out"
                            }
                        );
                    }
                });
            }

            // Tech Services Section Animation
            if (techSectionRef.current) {
                const techCards = techSectionRef.current.querySelectorAll('.tech-card');
                const techHeading = techSectionRef.current.querySelector('.section-heading');
                const techDescription = techSectionRef.current.querySelector('.section-description');
                const techCTA = techSectionRef.current.querySelector('.section-cta');

                // Ensure elements are visible initially
                gsap.set([techHeading, techDescription, techCards, techCTA], {
                    opacity: 1,
                    y: 0,
                    scale: 1
                });

                // Create scroll trigger for the entire section
                ScrollTrigger.create({
                    trigger: techSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        // Animate heading and description
                        gsap.fromTo([techHeading, techDescription],
                            { opacity: 0, y: 50 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: "power2.out"
                            }
                        );

                        // Animate service cards with stagger
                        gsap.fromTo(techCards,
                            { opacity: 0, y: 50, scale: 0.9 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                stagger: 0.2,
                                ease: "power2.out"
                            }
                        );

                        // Animate CTA
                        gsap.fromTo(techCTA,
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                delay: 0.5,
                                ease: "power2.out"
                            }
                        );
                    }
                });
            }

            // CTA Section Animation
            if (ctaSectionRef.current) {
                // Ensure CTA is visible initially
                gsap.set(ctaSectionRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1
                });

                ScrollTrigger.create({
                    trigger: ctaSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        gsap.fromTo(ctaSectionRef.current,
                            { opacity: 0, y: 50, scale: 0.95 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 1,
                                ease: "power2.out"
                            }
                        );
                    }
                });
            }
        }, 100);

        // Hover animations for service cards
        const allCards = servicesRef.current.querySelectorAll('.service-card');
        allCards.forEach(card => {
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

        // Cleanup function
        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const eventServices = [
        { title: "Corporate Events", description: "Professional conferences, product launches, and team building events", icon: Calendar, color: "from-orange-500 to-red-500" },
        { title: "Weddings", description: "Magical wedding ceremonies and receptions with personalized touches", icon: Calendar, color: "from-pink-500 to-rose-500" },
        { title: "Sports Tournaments", description: "Exciting sports events with professional production and streaming", icon: Calendar, color: "from-green-500 to-emerald-500" },
        { title: "Branding Campaigns", description: "Creative brand activations and experiential marketing events", icon: Calendar, color: "from-purple-500 to-indigo-500" }
    ];

    const filmServices = [
        { title: "Advertisements", description: "High-impact commercials and promotional videos", icon: Video, color: "from-blue-500 to-cyan-500" },
        { title: "Live Shows", description: "Professional live streaming and broadcast production", icon: Film, color: "from-indigo-500 to-purple-500" },
        { title: "Short Films", description: "Creative storytelling with cinematic quality", icon: Globe, color: "from-violet-500 to-fuchsia-500" },
        { title: "Post-Production", description: "Advanced editing, VFX, and color grading", icon: Palette, color: "from-sky-500 to-blue-500" }
    ];

    const techServices = [
        { title: "Web Development", description: "Modern, responsive websites and web applications", icon: Monitor, color: "from-emerald-500 to-teal-500" },
        { title: "Mobile Apps", description: "iOS and Android applications with native performance", icon: Smartphone, color: "from-cyan-500 to-blue-500" },
        { title: "Digital Products", description: "Innovative software solutions and digital platforms", icon: Code, color: "from-teal-500 to-green-500" },
        { title: "Social Media", description: "Strategic social media management and content creation", icon: Share2, color: "from-blue-500 to-indigo-500" }
    ];

    return (
        <div ref={servicesRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
            {/* Event Services Section */}
            <section ref={eventSectionRef} id="events" className="mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Event
                        </h2>
                        <p className="section-description text-xl text-muted-foreground max-w-3xl mx-auto">
                            Create unforgettable experiences with our comprehensive event management services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {eventServices.map((service) => (
                            <Card key={service.title} className="event-card service-card group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12 section-cta">
                        <Link to="/event-services">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More About Event Organiser</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Film & Video Section */}
            <section ref={filmSectionRef} id="film-video" className="mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Film & Video Production
                        </h2>
                        <p className="section-description text-xl text-muted-foreground max-w-3xl mx-auto">
                            Professional video content that tells your story with cinematic excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filmServices.map((service) => (
                            <Card key={service.title} className="film-card service-card group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12 section-cta">
                        <Link to="/film-video">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More About Film & Video</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tech Services Section */}
            <section ref={techSectionRef} id="tech" className="mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Tech Services
                        </h2>
                        <p className="section-description text-xl text-muted-foreground max-w-3xl mx-auto">
                            Cutting-edge technology solutions to drive your digital transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techServices.map((service) => (
                            <Card key={service.title} className="tech-card service-card group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12 section-cta">
                        <Link to="/tech-services">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More About Tech Services</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section with GSAP animation */}
            <section ref={ctaSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-12 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Ready to Transform Your Vision?
                        </h3>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's collaborate to bring your ideas to life with our comprehensive services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/contact">
                                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Get Started Today</span>
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Schedule a Call</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
