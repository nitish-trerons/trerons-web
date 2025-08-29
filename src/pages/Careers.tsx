
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Heart, Zap, Target, Briefcase, MapPin, Clock, DollarSign, GraduationCap, Send } from 'lucide-react';

const Careers = () => {
    const openPositions = [
        {
            title: "Senior Event Manager",
            department: "Event Services",
            location: "Mumbai, MH",
            type: "Full-time",
            salary: "₹70,000 - ₹90,000",
            experience: "5+ years",
            description: "Lead and manage high-profile corporate events, conferences, and special occasions.",
            requirements: [
                "Bachelor's degree in Event Management or related field",
                "5+ years of experience in event planning and management",
                "Strong project management and leadership skills",
                "Excellent communication and client relationship skills",
                "Experience with large-scale corporate events"
            ]
        },
        {
            title: "Video Producer",
            department: "Film & Video",
            location: "Bangalore, KA",
            type: "Full-time",
            salary: "₹65,000 - ₹85,000",
            experience: "3+ years",
            description: "Create compelling video content for advertisements, corporate videos, and digital platforms.",
            requirements: [
                "Bachelor's degree in Film, Media, or related field",
                "3+ years of experience in video production",
                "Proficiency in Adobe Creative Suite and Final Cut Pro",
                "Strong storytelling and creative vision",
                "Experience with corporate and commercial video production"
            ]
        },
        {
            title: "Full-Stack Developer",
            department: "Technology",
            location: "Remote",
            type: "Full-time",
            salary: "₹80,000 - ₹110,000",
            experience: "4+ years",
            description: "Build innovative web applications and digital solutions using modern technologies.",
            requirements: [
                "Bachelor's degree in Computer Science or related field",
                "4+ years of experience in full-stack development",
                "Proficiency in React, Node.js, and modern web technologies",
                "Experience with cloud platforms (AWS, Azure, GCP)",
                "Strong problem-solving and analytical skills"
            ]
        },
        {
            title: "Creative Director",
            department: "Creative",
            location: "Delhi, DL",
            type: "Full-time",
            salary: "₹90,000 - ₹120,000",
            experience: "7+ years",
            description: "Lead creative vision and strategy across all service areas and client projects.",
            requirements: [
                "Bachelor's degree in Design, Fine Arts, or related field",
                "7+ years of experience in creative direction",
                "Strong portfolio showcasing diverse creative work",
                "Experience leading creative teams and projects",
                "Excellent client presentation and communication skills"
            ]
        }
    ];

    const benefits = [
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Comprehensive health insurance, dental, vision, and wellness programs"
        },
        {
            icon: DollarSign,
            title: "Financial Security",
            description: "Competitive salary, PF contributions, and performance bonuses"
        },
        {
            icon: Clock,
            title: "Work-Life Balance",
            description: "Flexible working hours, remote work options, and generous PTO"
        },
        {
            icon: GraduationCap,
            title: "Professional Growth",
            description: "Continuous learning opportunities, training programs, and career development"
        },
        {
            icon: Users,
            title: "Team Culture",
            description: "Collaborative environment, team events, and strong company culture"
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Work with cutting-edge technologies and creative projects"
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in everything we do, delivering exceptional results for our clients."
        },
        {
            icon: Heart,
            title: "Passion",
            description: "Our team is passionate about creativity, innovation, and making a positive impact."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe in the power of teamwork and building strong relationships with clients and colleagues."
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "We constantly push boundaries and embrace new ideas to stay ahead of the curve."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Join Our Team
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            Be part of a creative powerhouse that transforms visions into reality through innovation, passion, and excellence
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">View Open Positions</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110">
                            <Send className="mr-2 h-5 w-5" />
                            Send Resume
                        </Button>
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Why Work at Trerons?</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Join a team that values creativity, innovation, and making a real impact
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={value.title} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25">
                                    <value.icon className="h-10 w-10 text-white drop-shadow-sm" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We take care of our team with comprehensive benefits and a supportive work environment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={benefit.title} className="group animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 200}ms` }}>
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25">
                                        <benefit.icon className="h-8 w-8 text-white drop-shadow-sm" />
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {benefit.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Join our growing team and help us create amazing experiences for our clients
                        </p>
                    </div>

                    <div className="space-y-6">
                        {openPositions.map((position, index) => (
                            <Card key={position.title} className="group animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 200}ms` }}>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{position.title}</CardTitle>
                                            <CardDescription className="text-lg mt-2">{position.department}</CardDescription>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {position.location}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-600">
                                                <Clock className="h-4 w-4 mr-1" />
                                                {position.type}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-600">
                                                <DollarSign className="h-4 w-4 mr-1" />
                                                {position.salary}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-600">
                                                <Briefcase className="h-4 w-4 mr-1" />
                                                {position.experience}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {position.description}
                                    </p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">Requirements:</h4>
                                        <ul className="space-y-2">
                                            {position.requirements.map((requirement, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    {requirement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        Apply Now
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">How to Apply</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                            Ready to join our team? Here's what you need to know about our application process
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: "01", title: "Submit Application", description: "Send your resume and cover letter through our online portal or email" },
                                { step: "02", title: "Initial Review", description: "Our HR team reviews your application and qualifications" },
                                { step: "03", title: "Interview Process", description: "Multiple rounds of interviews with team members and leadership" }
                            ].map((step) => (
                                <div key={step.step} className="text-center group">
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25">
                                        <span className="text-2xl font-bold text-white drop-shadow-sm">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 animate-fade-in-up">
                        <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">View All Positions</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-110">
                                <Send className="mr-2 h-5 w-5" />
                                Send Resume
                            </Button>
                        </div>
                        <div className="mt-8 text-muted-foreground">
                            <p>Questions about working at Trerons? Contact us at <strong>careers@trerons.com</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
