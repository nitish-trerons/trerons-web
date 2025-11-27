
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';

const Clients = () => {
    const clientsSectionRef = useRef<HTMLDivElement>(null);
    const clientCardsRef = useRef<HTMLDivElement>(null);
    const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
    const clientLogos = [
        { name: 'LYFE', logo: 'https://www.lyfehotels.com/images/logo.svg', industry: 'Technology' },
        { name: 'SOA', logo: 'https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/1510404984171-ODP67JSA35YQTMKZ6ATF/favicon.ico?format=100w.', industry: 'Events' },
        { name: 'IPCA', logo: 'https://ipca.com/wp-content/htmlMenu/images/logo-color.svg', industry: 'Media' },
        { name: 'HDFC', logo: 'https://www.hdfcbank.com/static/features/%5BBBHOST%5D/theme-nb-hdfc/favicon.ico', industry: 'Innovation' },
        { name: 'Paschima Publications', logo: 'https://stock.paschima.in/favicon.png', industry: 'Events' },
        { name: 'YoBytech', logo: 'https://yobytech.com/assets/img/AUTOMATION.webp', industry: 'Digital' },
        { name: 'MusicTechnica', logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991110.png', industry: 'Creative' },
        { name: 'Laptop Forum', logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991110.png', industry: 'Technology' },
    ];

    const testimonials = [

        {

            name: 'Ashok Mohanty',
            role: 'Founder',
            company: 'Paschima Publications',
            content: 'We\'ve worked with Trerons for multiple book launch events and promotional videos. Their event management skills are outstanding - they handle everything from venue setup to guest management seamlessly. The promotional content they create always resonates with our audience.',
            rating: 5
        },
        {
            name: 'Amitabh Patra',
            role: 'Filmmaker',
            company: 'Independent Director',
            content: 'As a filmmaker, I\'ve collaborated with Trerons on multiple projects including my short film "ALTER". Their technical expertise, creative input, and professional equipment made all the difference. They truly understand the art of storytelling through visuals.',
            rating: 4
        },
        {
            name: 'Subham Riku',
            role: 'Music Artist',
            company: 'Independent Musician',
            content: 'Trerons produced my music video "Baja Mora Bhai Re" and I couldn\'t be happier. They captured the essence of the song perfectly, and the production quality was top-notch. The team was creative, collaborative, and delivered exactly what I envisioned.',
            rating: 4
        },
        {
            name: 'Dr. Smitashree Das',
            role: 'Content Creator',
            company: 'YouTube Channel',
            content: 'Trerons helped me launch my YouTube channel with a professional introduction video. Their attention to detail, editing skills, and understanding of digital content creation helped me establish a strong online presence from day one.',
            rating: 5
        },
        {
            name: 'Gayatri & Vikram',
            role: 'Couple',
            company: 'Wedding Clients',
            content: 'Our engagement sangeet was beautifully captured by Trerons. They documented every special moment with such care and artistry. The highlight video they created is something we\'ll treasure forever. Highly professional and genuinely passionate about their work.',
            rating: 5
        }

    ];

    useEffect(() => {
        if (!clientCardsRef.current) return;

        const scrollContainer = clientCardsRef.current;
        const scrollContent = scrollContainer.querySelector('.scroll-content') as HTMLElement;

        if (!scrollContent) return;

        // Calculate the width of the scroll content
        const contentWidth = scrollContent.scrollWidth / 2; // Divide by 2 because we duplicated the content

        // Create infinite scroll animation
        const animation = gsap.to(scrollContent, {
            x: -contentWidth,
            duration: 30, // Adjust speed (higher = slower)
            ease: "none",
            repeat: -1 // Infinite loop
        });

        // Cleanup
        return () => {
            animation.kill();
        };
    }, []);

    // Auto-scroll testimonials carousel
    useEffect(() => {
        if (!carouselApi) return;

        const interval = setInterval(() => {
            if (carouselApi.canScrollNext()) {
                carouselApi.scrollNext();
            } else {
                // Loop back to start
                carouselApi.scrollTo(0);
            }
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [carouselApi]);

    return (
        <section id="clients" className="py-20 bg-gradient-to-b from-[hsl(var(--muted)/0.2)] to-[hsl(var(--background))] scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Trusted by <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.8)] bg-clip-text text-transparent">Leading Brands</span>
                    </h2>
                    <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                        We've had the privilege of working with amazing companies across various industries, delivering exceptional results that drive success.
                    </p>
                </div>

                {/* Client Logos Scrolling Marquee */}
                <div ref={clientsSectionRef} className="mb-20">
                    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">Our Valued Clients</h3>
                    <div ref={clientCardsRef} className="overflow-hidden relative">
                        <div className="scroll-content flex gap-4 sm:gap-6 lg:gap-8 w-max">
                            {/* First set of logos */}
                        {clientLogos.map((client, index) => (
                                <div key={`first-${index}`} className="group client-card flex-shrink-0">
                                    <div className="w-32 sm:w-40 aspect-square bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-lg overflow-hidden">
                                    <div className="flex flex-col items-center justify-center h-full p-2">
                                        <div className="flex items-center justify-center mb-2 flex-1">
                                            <img
                                                src={client.logo}
                                                alt={`${client.name} logo`}
                                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-medium leading-tight text-center">{client.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                            {/* Duplicate set for seamless loop */}
                            {clientLogos.map((client, index) => (
                                <div key={`second-${index}`} className="group client-card flex-shrink-0">
                                    <div className="w-32 sm:w-40 aspect-square bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-lg overflow-hidden">
                                        <div className="flex flex-col items-center justify-center h-full p-2">
                                            <div className="flex items-center justify-center mb-2 flex-1">
                                                <img
                                                    src={client.logo}
                                                    alt={`${client.name} logo`}
                                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-medium leading-tight text-center">{client.name}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div>
                    <h3 className="text-2xl font-semibold text-center mb-12">What Our Clients Say</h3>
                    <Carousel className="w-full max-w-4xl mx-auto" setApi={setCarouselApi}>
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="h-full border-[hsl(var(--border)/0.5)] hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300 hover:shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-4">
                                                <Quote className="h-8 w-8 text-[hsl(var(--primary)/0.6)] mr-2" />
                                                <div className="flex ml-auto">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="border-t border-[hsl(var(--border)/0.5)] pt-4">
                                                <div className="font-semibold text-[hsl(var(--foreground))]">{testimonial.name}</div>
                                                <div className="text-sm text-[hsl(var(--muted-foreground))]">{testimonial.role}, {testimonial.company}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                </div>

                {/* Stats Section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">500+</div>
                            <div className="text-[hsl(var(--muted-foreground))]">Events Managed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">200+</div>
                            <div className="text-[hsl(var(--muted-foreground))]">Videos Produced</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">100+</div>
                            <div className="text-[hsl(var(--muted-foreground))]">Websites Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">98%</div>
                            <div className="text-[hsl(var(--muted-foreground))]">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
