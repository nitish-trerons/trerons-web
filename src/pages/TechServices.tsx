
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Globe, Share2, Database, Shield, ArrowRight, CheckCircle, Monitor } from 'lucide-react';

const TechServices = () => {
    const services = [
        {
            icon: Code,
            title: "Web Development",
            description: "Modern, responsive websites and web applications built with cutting-edge technologies",
            features: ["React/Next.js Development", "E-commerce Solutions", "Custom Web Apps", "API Development", "Performance Optimization"],
            color: "from-emerald-500 to-teal-500"
        },
        {
            icon: Smartphone,
            title: "Mobile Applications",
            description: "Native iOS and Android applications with intuitive user experience and high performance",
            features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Optimization", "Maintenance & Updates"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: Globe,
            title: "Digital Products",
            description: "Innovative software solutions and digital platforms that drive business growth",
            features: ["SaaS Platforms", "Enterprise Software", "Custom Solutions", "System Integration", "Cloud Infrastructure"],
            color: "from-teal-500 to-green-500"
        },
        {
            icon: Share2,
            title: "Social Media Management",
            description: "Strategic social media presence and content management for brand growth",
            features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting", "Brand Monitoring"],
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: Database,
            title: "Data Solutions",
            description: "Comprehensive data management and analytics solutions for informed decision-making",
            features: ["Database Design", "Data Analytics", "Business Intelligence", "Data Migration", "Security & Compliance"],
            color: "from-purple-500 to-violet-500"
        },
        {
            icon: Shield,
            title: "Cybersecurity",
            description: "Robust security solutions to protect your digital assets and maintain compliance",
            features: ["Security Audits", "Penetration Testing", "Security Training", "Incident Response", "Compliance Management"],
            color: "from-rose-500 to-pink-500"
        }
    ];

    const technologies = [
        {
            category: "Frontend",
            items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Material-UI"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Python", "Java", "C#", "PHP", "Go", "Rust"]
        },
        {
            category: "Mobile",
            items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            Tech Services
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            Building digital solutions that drive growth, enhance user experience, and keep you ahead of the competition
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-emerald-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                            <Monitor className="mr-2 h-5 w-5" />
                            View Portfolio
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Our Technology Services</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            End-to-end technology solutions that transform your business and drive innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={service.title} className="group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors duration-300">{service.title}</CardTitle>
                                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We leverage the latest technologies and frameworks to build robust, scalable solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((category, index) => (
                            <div key={category.category} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Code className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-600 transition-colors duration-300">{category.category}</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="group-hover:text-foreground transition-colors duration-300">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A proven methodology that ensures quality, transparency, and successful project delivery
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", description: "Requirements gathering, planning, and project scope definition" },
                            { step: "02", title: "Design", description: "UI/UX design, architecture planning, and technical specifications" },
                            { step: "03", title: "Development", description: "Agile development with regular updates and testing" },
                            { step: "04", title: "Deployment", description: "Testing, deployment, and ongoing support & maintenance" }
                        ].map((step, index) => (
                            <div key={step.step} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-2xl font-bold text-white">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-600 transition-colors duration-300">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-12 border border-emerald-500/20 animate-fade-in-up">
                        <h3 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss your project and create innovative technology solutions that drive your business forward
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-emerald-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                                <Monitor className="mr-2 h-5 w-5" />
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechServices;
