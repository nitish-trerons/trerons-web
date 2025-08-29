
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Award, Target, Heart, Zap, MapPin, Phone, Mail, Globe } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: "Passion",
            description: "We're passionate about creating exceptional experiences and delivering results that exceed expectations."
        },
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in every project, maintaining the highest standards of quality and professionalism."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe in the power of teamwork and building strong partnerships with our clients and team members."
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" }
    ];

    const team = [
        {
            name: "Alex Johnson",
            role: "Founder & CEO",
            description: "Visionary leader with 10+ years in creative industries",
            image: "👨‍💼"
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            description: "Award-winning designer with expertise in brand development",
            image: "👩‍🎨"
        },
        {
            name: "Mike Rodriguez",
            role: "Technical Lead",
            description: "Full-stack developer passionate about innovative solutions",
            image: "👨‍💻"
        },
        {
            name: "Emily Watson",
            role: "Event Manager",
            description: "Experienced event planner with attention to detail",
            image: "👩‍💼"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            About Trerons
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            We're a creative powerhouse dedicated to transforming visions into reality through innovation, passion, and excellence
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Get in Touch</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110">
                            <Globe className="mr-2 h-5 w-5" />
                            View Portfolio
                        </Button>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Founded in 2019, Trerons began as a small creative agency with a big dream: to help businesses and individuals bring their visions to life through exceptional events, compelling video content, and innovative technology solutions.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                What started as a passion project has grown into a full-service creative agency, serving clients across multiple industries. We've learned that success comes from understanding our clients' needs, staying ahead of industry trends, and maintaining the highest standards of quality.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Today, we're proud to be trusted partners for businesses looking to make an impact, create memorable experiences, and build meaningful connections with their audiences.
                            </p>
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                                <div className="text-center">
                                    <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Award-Winning Excellence</h3>
                                    <p className="text-muted-foreground">
                                        Recognized for our creativity, innovation, and commitment to delivering exceptional results
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Our Values</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            The principles that guide everything we do and shape our company culture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={value.title} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/25">
                                    <value.icon className="h-10 w-10 text-white drop-shadow-sm" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            The talented professionals behind every successful project
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={member.name} className="text-center group animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 200}ms` }}>
                                <CardHeader>
                                    <div className="text-6xl mb-4">{member.image}</div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{member.name}</CardTitle>
                                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {member.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 animate-fade-in-up">
                        <h3 className="text-3xl font-bold mb-6">Ready to Work Together?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss your project and explore how we can help bring your vision to life
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Start a Project</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110">
                                <Phone className="mr-2 h-5 w-5" />
                                Schedule a Call
                            </Button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                hello@trerons.com
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                +91-7008-550077
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                Bhubaneswar, Odisha
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
