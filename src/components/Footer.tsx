
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <Link to="/">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                                    Trerons
                                </h3>
                            </Link>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Transforming visions into reality through innovative event management,
                                creative film production, and cutting-edge technology solutions.
                            </p>
                            <div className="flex space-x-4">
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                                    <Facebook className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                                    <Instagram className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                                    <Youtube className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><Link to="/event-services" className="text-muted-foreground hover:text-primary transition-colors">Event Organiser</Link></li>
                                <li><Link to="/film-video" className="text-muted-foreground hover:text-primary transition-colors">Film & Video</Link></li>
                                <li><Link to="/tech-services" className="text-muted-foreground hover:text-primary transition-colors">Tech Services</Link></li>
                                <li><a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-3">
                            <h3 className="font-semibold">Company</h3>
                            <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">About</Link>
                            <Link to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Careers</Link>
                            <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Blog</Link>
                            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Contact</Link>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span className="text-muted-foreground">hello@trerons.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-muted-foreground">123 Business Ave, Suite 100<br />New York, NY 10001</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Footer */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                        © 2024 Trerons. All rights reserved. |
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors"> Privacy Policy</Link> |
                        <Link to="/terms-of-service" className="hover:text-primary transition-colors"> Terms of Service</Link>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full hover:bg-primary hover:text-primary-foreground"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
