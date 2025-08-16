import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    // Refs for GSAP animations
    const navbarRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const rightSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!navbarRef.current) return;

        // Initial setup - hide elements
        gsap.set([logoRef.current, navRef.current, rightSideRef.current], {
            opacity: 0,
            y: -50
        });

        // Main timeline for navbar elements
        const tl = gsap.timeline();

        // Animate logo
        tl.to(logoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        // Animate navigation items with stagger
        tl.to(navRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4");

        // Animate right side elements
        tl.to(rightSideRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4");

        // Hover animations for logo
        if (logoRef.current) {
            logoRef.current.addEventListener('mouseenter', () => {
                gsap.to(logoRef.current, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            logoRef.current.addEventListener('mouseleave', () => {
                gsap.to(logoRef.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

        // Hover animations for navigation items
        const navItems = navRef.current?.querySelectorAll('a');
        navItems?.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.05,
                    y: -2,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Hover animations for theme toggle
        const themeToggle = rightSideRef.current?.querySelector('button');
        if (themeToggle) {
            themeToggle.addEventListener('mouseenter', () => {
                gsap.to(themeToggle, {
                    scale: 1.1,
                    rotation: 180,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            themeToggle.addEventListener('mouseleave', () => {
                gsap.to(themeToggle, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

        // Hover animations for CTA button
        const ctaButton = rightSideRef.current?.querySelector('a:last-child button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                gsap.to(ctaButton, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            ctaButton.addEventListener('mouseleave', () => {
                gsap.to(ctaButton, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link ref={logoRef} to="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">T</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Trerons
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div ref={navRef} className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'
                                }`}
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive('/event-services') || isActive('/film-video') || isActive('/tech-services') ? 'text-primary' : 'text-muted-foreground'
                                    }`}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <span>Our Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100`}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <div className="py-2">
                                    <Link
                                        to="/event-services"
                                        className={`block px-4 py-3 text-sm transition-colors duration-300 hover:bg-muted/50 ${isActive('/event-services') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">E</span>
                                            </div>
                                            <div>
                                                <div className="font-medium">Event</div>
                                                <div className="text-xs text-muted-foreground">Event planning & management</div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link
                                        to="/film-video"
                                        className={`block px-4 py-3 text-sm transition-colors duration-300 hover:bg-muted/50 ${isActive('/film-video') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">F</span>
                                            </div>
                                            <div>
                                                <div className="font-medium">Film & Video</div>
                                                <div className="text-xs text-muted-foreground">Production & post-production</div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link
                                        to="/tech-services"
                                        className={`block px-4 py-3 text-sm transition-colors duration-300 hover:bg-muted/50 ${isActive('/tech-services') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">T</span>
                                            </div>
                                            <div>
                                                <div className="font-medium">Tech Services</div>
                                                <div className="text-xs text-muted-foreground">Web, mobile & digital solutions</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/careers"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive('/careers') ? 'text-primary' : 'text-muted-foreground'
                                }`}
                        >
                            Career
                        </Link>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                                }`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div ref={rightSideRef} className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="w-9 h-9 p-0 hover:bg-muted"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>

                        {/* CTA Button */}
                        <Link to="/contact">
                            <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                Contact
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden w-9 h-9 p-0 hover:bg-muted"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/40">
                            <Link
                                to="/"
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Mobile Services Section */}
                            <div className="px-3 py-2">
                                <div className="text-sm font-medium text-muted-foreground mb-2">Our Services</div>
                                <div className="ml-4 space-y-2">
                                    <Link
                                        to="/event-services"
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/event-services') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Event
                                    </Link>
                                    <Link
                                        to="/film-video"
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/film-video') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Film & Video
                                    </Link>
                                    <Link
                                        to="/tech-services"
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/tech-services') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Tech Services
                                    </Link>
                                </div>
                            </div>

                            <Link
                                to="/careers"
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/careers') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Career
                            </Link>
                            <Link
                                to="/about"
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-muted ${isActive('/about') ? 'text-primary bg-muted' : 'text-muted-foreground'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
