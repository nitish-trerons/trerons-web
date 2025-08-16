import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Video, Code, ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        // Initial setup - hide elements but keep service cards visible
        gsap.set([headingRef.current, descriptionRef.current, ctaRef.current], {
            opacity: 0,
            y: 100
        });

        // Keep service cards visible by default
        gsap.set(servicesRef.current, {
            opacity: 1,
            y: 0
        });

        // Background floating animation
        if (backgroundRef.current) {
            gsap.to(backgroundRef.current.querySelectorAll('.floating-bg'), {
                y: -20,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.5
            });
        }

        // Main timeline
        const tl = gsap.timeline();

        // Animate heading with text reveal
        if (headingRef.current) {
            tl.to(headingRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Text reveal animation for each word
            const words = headingRef.current.querySelectorAll('span');
            words.forEach((word, index) => {
                gsap.fromTo(word,
                    { opacity: 0, y: 50, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: 1.5 + (index * 0.2),
                        ease: "back.out(1.7)"
                    }
                );
            });
        }

        // Animate description
        if (descriptionRef.current) {
            tl.to(descriptionRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5");
        }

        // Animate CTA buttons
        if (ctaRef.current) {
            tl.to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.3");
        }

        // Animate service cards with stagger (but keep them visible)
        if (servicesRef.current) {
            const serviceCards = servicesRef.current.querySelectorAll('.service-card');

            // Ensure service cards are visible
            gsap.set(serviceCards, {
                opacity: 1,
                y: 0,
                scale: 1
            });

            // Add entrance animation with delay
            gsap.fromTo(serviceCards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: 1.5
                }
            );
        }

        // Floating particles animation
        const particles = heroRef.current.querySelectorAll('.floating-particle');
        gsap.to(particles, {
            y: -30,
            x: "random(-20, 20)",
            duration: "random(2, 4)",
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.3
        });

        // Hover animations for service cards
        const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
        serviceCards?.forEach(card => {
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

        // Button hover animations
        const buttons = ctaRef.current?.querySelectorAll('button');
        buttons?.forEach(button => {
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

        // Continuous background morphing
        if (backgroundRef.current) {
            const morphingElement = backgroundRef.current.querySelector('.morphing-bg');
            if (morphingElement) {
                gsap.to(morphingElement, {
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    duration: 8,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }
        }

    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-20">
            {/* Animated Background decorative elements */}
            <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
                <div className="floating-bg absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

                {/* Morphing background shape */}
                <div className="morphing-bg absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-2xl"></div>

                {/* Floating particles */}
                <div className="floating-particle absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="floating-particle absolute top-40 right-32 w-1 h-1 bg-blue-500/40 rounded-full"></div>
                <div className="floating-particle absolute bottom-40 left-32 w-1.5 h-1.5 bg-purple-500/30 rounded-full"></div>
                <div className="floating-particle absolute top-1/3 right-20 w-1 h-1 bg-green-500/40 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main heading with GSAP animations */}
                <div ref={headingRef} className="mb-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                            Transform
                        </span>
                        <br />
                        <span className="text-foreground">Your Vision Into</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Reality
                        </span>
                    </h1>
                </div>

                {/* Description with GSAP animation */}
                <div ref={descriptionRef} className="mb-8">
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From spectacular events to cutting-edge technology, we bring your ideas to life with creativity, innovation, and excellence.
                    </p>
                </div>

                {/* CTA Buttons with GSAP animation */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 group">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">Get Started</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">Watch Demo</span>
                    </Button>
                </div>

                {/* Services Grid with GSAP stagger animation */}
                <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Event Services */}
                    <Link to="/event-services" className="service-card group relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                <Calendar className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-orange-500 transition-colors duration-300">Event</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                Corporate events, conferences, weddings, sports tournaments, and branding campaigns that create unforgettable experiences.
                            </p>
                        </div>
                    </Link>

                    {/* Film & Video */}
                    <Link to="/film-video" className="service-card group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                                <Video className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300">Film & Video</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                Advertisements, live shows, short films, music videos, and post-production services with cutting-edge VFX and animation.
                            </p>
                        </div>
                    </Link>

                    {/* Tech Services */}
                    <Link to="/tech-services" className="service-card group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                                <Code className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-green-500 transition-colors duration-300">Tech Services</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                Website development, mobile applications, digital products, and social media management for the modern digital landscape.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
