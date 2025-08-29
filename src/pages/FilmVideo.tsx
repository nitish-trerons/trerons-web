
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Film, Music, Palette, Globe, ArrowRight, CheckCircle, Camera, Play, Mic, Lightbulb, Monitor } from 'lucide-react';

const FilmVideo = () => {
    const services = [
        {
            icon: Video,
            title: "Advertisements",
            description: "High-impact commercials and promotional videos that drive engagement and conversions",
            features: ["TV Commercials", "Digital Ads", "Social Media Videos", "Product Demos", "Brand Stories"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Film,
            title: "Live Shows & Events",
            description: "Professional live streaming and broadcast production for events and performances",
            features: ["Live Streaming", "Multi-Camera Setup", "Audio Engineering", "Graphics Integration", "Real-time Editing"],
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: Music,
            title: "Music Videos",
            description: "Creative music video production with cinematic quality and artistic vision",
            features: ["Concept Development", "Location Scouting", "Cinematography", "Post-Production", "Color Grading"],
            color: "from-violet-500 to-fuchsia-500"
        },
        {
            icon: Palette,
            title: "Post-Production",
            description: "Advanced editing, VFX, animation, and color grading services",
            features: ["Video Editing", "Visual Effects", "Motion Graphics", "Color Correction", "Sound Design"],
            color: "from-sky-500 to-blue-500"
        },
        {
            icon: Globe,
            title: "Short Films",
            description: "Creative storytelling with cinematic excellence and artistic integrity",
            features: ["Script Development", "Production Planning", "Cinematography", "Sound Recording", "Final Delivery"],
            color: "from-emerald-500 to-teal-500"
        },
        {
            icon: Camera,
            title: "Corporate Videos",
            description: "Professional corporate content that communicates your message effectively",
            features: ["Company Profiles", "Training Videos", "Internal Communications", "Marketing Content", "Documentaries"],
            color: "from-rose-500 to-pink-500"
        }
    ];

    const equipment = [
        {
            category: "Cameras",
            items: ["4K/8K Professional Cameras", "Cinema Cameras", "Drone Cameras", "Action Cameras", "360° Cameras"]
        },
        {
            category: "Audio",
            items: ["Professional Microphones", "Wireless Systems", "Audio Recorders", "Mixers", "Studio Equipment"]
        },
        {
            category: "Lighting",
            items: ["LED Panels", "Studio Lights", "Natural Light Setup", "Color Gels", "Lighting Control"]
        },
        {
            category: "Post-Production",
            items: ["High-End Workstations", "Professional Software", "Color Grading Monitors", "Audio Studios", "Storage Solutions"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Film & Video Production
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            From concept to final cut, we deliver compelling visual content that tells your story with cinematic excellence
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                            <Play className="mr-2 h-5 w-5" />
                            Watch Showreel
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Our Video Services</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive video production services for every need and budget
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={service.title} className="group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <CardHeader className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{service.title}</CardTitle>
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

            {/* Equipment Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Professional Equipment</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We use state-of-the-art equipment to ensure the highest quality production
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {equipment.map((category, index) => {
                            const getIcon = (categoryName: string) => {
                                switch (categoryName) {
                                    case "Cameras":
                                        return <Camera className="h-10 w-10 text-white" />;
                                    case "Audio":
                                        return <Mic className="h-10 w-10 text-white" />;
                                    case "Lighting":
                                        return <Lightbulb className="h-10 w-10 text-white" />;
                                    case "Post-Production":
                                        return <Monitor className="h-10 w-10 text-white" />;
                                    default:
                                        return <Camera className="h-10 w-10 text-white" />;
                                }
                            };

                            return (
                                <div key={category.category} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {getIcon(category.category)}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">{category.category}</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="group-hover:text-foreground transition-colors duration-300">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Our Production Process</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A streamlined workflow that ensures quality and efficiency at every stage
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Pre-Production", description: "Scripting, storyboarding, location scouting, and planning" },
                            { step: "02", title: "Production", description: "Filming with professional equipment and crew" },
                            { step: "03", title: "Post-Production", description: "Editing, VFX, color grading, and sound design" },
                            { step: "04", title: "Delivery", description: "Final review, revisions, and delivery in multiple formats" }
                        ].map((step, index) => (
                            <div key={step.step} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-2xl font-bold text-white">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20 animate-fade-in-up">
                        <h3 className="text-3xl font-bold mb-6">Ready to Bring Your Vision to Life?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's create compelling video content that captivates your audience and achieves your goals
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                                <Play className="mr-2 h-5 w-5" />
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FilmVideo;
