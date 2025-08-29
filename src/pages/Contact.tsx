
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs-config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Form validation schema
const contactSchema = yup.object({
    firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
    lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    phone: yup.string().optional().default(''),
    serviceInterest: yup.string().required('Please select a service'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceInterest: string;
    message: string;
};

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        try {
            // EmailJS configuration - you'll need to set these up in your EmailJS account
            const templateParams = {
                from_name: `${data.firstName} ${data.lastName}`,
                from_email: data.email,
                phone: data.phone || 'Not provided',
                service_interest: data.serviceInterest,
                message: data.message,
                to_name: 'Trerons Team'
            };

            // Send email using EmailJS
            await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                templateParams,
                emailjsConfig.publicKey
            );

            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
            reset(); // Reset form after successful submission
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <p className="text-green-800">{submitMessage}</p>
                                        </div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                                            <AlertCircle className="h-5 w-5 text-red-600" />
                                            <p className="text-red-800">{submitMessage}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">First Name *</label>
                                                <input
                                                    {...register('firstName')}
                                                    type="text"
                                                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                                                        errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                                    }`}
                                                    placeholder="John"
                                                />
                                                {errors.firstName && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Last Name *</label>
                                                <input
                                                    {...register('lastName')}
                                                    type="text"
                                                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                                                        errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                                    }`}
                                                    placeholder="Doe"
                                                />
                                                {errors.lastName && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email *</label>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                                                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                                }`}
                                                placeholder="mail@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                                            <input
                                                {...register('phone')}
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                placeholder="+91"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Service Interest *</label>
                                            <select 
                                                {...register('serviceInterest')}
                                                className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                                                    errors.serviceInterest ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                                }`}
                                            >
                                                <option value="">Select a service</option>
                                                <option value="events">Event Services</option>
                                                <option value="film-video">Film & Video Production</option>
                                                <option value="tech">Technology Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.serviceInterest && (
                                                <p className="mt-1 text-sm text-red-600">{errors.serviceInterest.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Message *</label>
                                            <textarea
                                                {...register('message')}
                                                rows={5}
                                                className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 ${
                                                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                                }`}
                                                placeholder="Tell us about your project..."
                                            ></textarea>
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                            )}
                                        </div>
                                        <Button 
                                            type="submit" 
                                            size="lg" 
                                            disabled={isSubmitting}
                                            className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Send Message</span>
                                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
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
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                                            <Mail className="h-6 w-6 text-white drop-shadow-sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                            <a href="mailto:hello@trerons.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">hello@trerons.com</a>
                                            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300">
                                            <Phone className="h-6 w-6 text-white drop-shadow-sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                                            <a href="tel:+91-7008-550077" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">+91-7008-550077</a>
                                            {/* <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p> */}
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                                            <MapPin className="h-6 w-6 text-white drop-shadow-sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">Plot No.- 1882, Unit- 8</p>
                                            <p className="text-muted-foreground">Nayapalli, Bhubaneswar, 751012</p>
                                        </div>
                                    </div>

                                    {/* <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                                            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                                            <p className="text-muted-foreground">Sunday: Closed</p>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                                    <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        For urgent matters or same-day consultations, please call us directly.
                                    </p>
                                    <a href="tel:+917008550077" className="block">
                                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-105">
                                            <Phone className="mr-2 h-4 w-4" />
                                            Call Now
                                        </Button>
                                    </a>
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
