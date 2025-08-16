
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

const Clients = () => {
    const clientLogos = [
        { name: 'TechCorp', logo: 'TC', industry: 'Technology' },
        { name: 'EventPro', logo: 'EP', industry: 'Events' },
        { name: 'MediaFlow', logo: 'MF', industry: 'Media' },
        { name: 'InnovateLab', logo: 'IL', industry: 'Innovation' },
        { name: 'GlobalEvents', logo: 'GE', industry: 'Events' },
        { name: 'DigitalCraft', logo: 'DC', industry: 'Digital' },
        { name: 'CreativeHub', logo: 'CH', industry: 'Creative' },
        { name: 'FutureTech', logo: 'FT', industry: 'Technology' }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechCorp',
            content: 'Trerons transformed our corporate event into an unforgettable experience. Their attention to detail and creativity exceeded all expectations.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Marketing Director',
            company: 'MediaFlow',
            content: 'The video production quality is outstanding. Trerons delivered a campaign that perfectly captured our brand essence and drove real results.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder',
            company: 'CreativeHub',
            content: 'Working with Trerons on our website redesign was seamless. They understood our vision and delivered a stunning, functional site.',
            rating: 5
        }
    ];

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

                {/* Client Logos Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-center mb-12">Our Valued Clients</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                        {clientLogos.map((client, index) => (
                            <div key={index} className="group">
                                <div className="w-full aspect-square bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] rounded-2xl flex items-center justify-center border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-110 hover:shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-1">{client.logo}</div>
                                        <div className="text-xs text-[hsl(var(--muted-foreground))]">{client.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div>
                    <h3 className="text-2xl font-semibold text-center mb-12">What Our Clients Say</h3>
                    <Carousel className="w-full max-w-4xl mx-auto">
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
