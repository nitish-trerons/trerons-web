import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Header */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Ready to start your project? Let's discuss how we can help bring your vision to life
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="animate-fade-in-up">
                            <Card className="p-8">
                                <CardHeader>
                                    <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">First Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Service Interest</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                                <option value="">Select a service</option>
                                                <option value="events">Event Services</option>
                                                <option value="film-video">Film & Video Production</option>
                                                <option value="tech">Technology Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Message</label>
                                            <textarea
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Tell us about your project..."
                                            ></textarea>
                                        </div>
                                        <Button type="submit" size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">Send Message</span>
                                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        We're here to help and answer any questions you might have. We look forward to hearing from you.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                            <p className="text-muted-foreground">hello@trerons.com</p>
                                            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                            <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">123 Business Street, Suite 100</p>
                                            <p className="text-muted-foreground">New York, NY 10001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                                            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                                            <p className="text-muted-foreground">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                                    <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        For urgent matters or same-day consultations, please call us directly.
                                    </p>
                                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-105">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
