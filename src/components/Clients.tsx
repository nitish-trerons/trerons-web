
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

const Clients = () => {
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
                    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">Our Valued Clients</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
                        {clientLogos.map((client, index) => (
                            <div key={index} className="group">
                                <div className="w-full aspect-square bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg overflow-hidden">
                                    <div className="flex flex-col items-center justify-center h-full p-2">
                                        <div className="flex items-center justify-center mb-2 flex-1">
                                            <img
                                                src={client.logo}
                                                alt={`${client.name} logo`}
                                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-medium leading-tight text-center">{client.name}</div>
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
