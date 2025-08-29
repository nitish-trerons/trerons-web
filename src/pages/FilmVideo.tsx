
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Film, Music, Palette, Globe, ArrowRight, CheckCircle, Camera, Play, Mic, Lightbulb, Monitor, ExternalLink, Eye, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const FilmVideo = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const featuredProjects = [
        {
            id: 1,
            title: "ACHU EBE BI TU || Lyrical Song || Soulful theme song of FIVE YEARS",
            category: "Lyrical Song",
            youtubeId: "-GPPsDpceuQ",
            posterImage: "/src/assets/posters/TS_JIJI_POSTER.webp",
            duration: "4:32",
            views: "7.6K",
            rating: 4.9,
            description: "A soulful lyrical song celebrating five years of memories and emotions"
        },
        {
            id: 2,
            title: "ALTER | अल्टर | Short Film | Amitabh Patra",
            category: "Short Film",
            youtubeId: "IzCDH3R8Q0Q",
            posterImage: "/src/assets/posters/POSTER_KITNE_SAAL.webp",
            duration: "8:15",
            views: "1.8K",
            rating: 4.8,
            description: "A compelling short film directed by Amitabh Patra"
        },
        {
            id: 3,
            title: "MAHARAJ - Mama Kare Twerk (Official Music Video) | Hindi Rap | MKT",
            category: "Music Video",
            youtubeId: "rgMg8XL9qVw",
            posterImage: "/src/assets/posters/MKT_Thumbnail_finall1.webp",
            duration: "3:45",
            views: "8.2K",
            rating: 4.9,
            description: "Official Hindi rap music video featuring MAHARAJ"
        },
        {
            id: 4,
            title: "Baja Mora Bhai Re || Official Video || Subham Riku || Odia Rap Song",
            category: "Music Video",
            youtubeId: "FPhNYXiSwzs",
            posterImage: "/src/assets/posters/KIRANA_20250810164213.webp",
            duration: "6:20",
            views: "10.2K",
            rating: 4.7,
            description: "Official Odia rap song video featuring Subham Riku"
        },
        {
            id: 5,
            title: "Dr Smitashree Das - My First YouTube Video | Channel Introduction",
            category: "Introduction",
            youtubeId: "GF8_Qr4KKvI",
            posterImage: "/src/assets/posters/380514374_862344365604407_6172203292596849654_n.webp",
            duration: "2:45",
            views: "5.7K",
            rating: 4.9,
            description: "Dr. Smitashree Das introduces her YouTube channel"
        },
        {
            id: 6,
            title: "Gayatri & Vikram's Engagement Sangeet Highlights",
            category: "Wedding",
            youtubeId: "e4tFcFYZEm0",
            posterImage: "/src/assets/posters/332496630_766824294787603_8908340302102459593_n.webp",
            duration: "4:15",
            views: "2.5K",
            rating: 4.6,
            description: "Beautiful engagement sangeet highlights from Gayatri & Vikram's celebration"
        }
    ];

    const showcaseProjects = [
        {
            id: 7,
            title: "TS JIJI - Lyrical Song",
            category: "Music Video",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/TS_JIJI_POSTER.webp",
            duration: "4:32",
            views: "7.6K",
            rating: 4.9,
            description: "Soulful lyrical song with emotional storytelling"
        },
        {
            id: 8,
            title: "ALTER - Alternative Music",
            category: "Music Video",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/ALTER_POSTER.webp",
            duration: "4:55",
            views: "18.7K",
            rating: 4.9,
            description: "Alternative music video with unique visual style"
        },
        {
            id: 9,
            title: "Marketing Thumbnail Final",
            category: "Commercial",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/MKT_Thumbnail_finall1.webp",
            duration: "2:15",
            views: "45.7K",
            rating: 4.7,
            description: "Professional marketing and promotional content"
        },
        {
            id: 10,
            title: "KIRANA - Brand Story",
            category: "Corporate",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/KIRANA_20250810164213.webp",
            duration: "3:42",
            views: "28.9K",
            rating: 4.8,
            description: "Brand storytelling for KIRANA products"
        },
        {
            id: 11,
            title: "Social Media Content",
            category: "Digital Content",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/380514374_862344365604407_6172203292596849654_n.webp",
            duration: "1:58",
            views: "56.8K",
            rating: 4.6,
            description: "Engaging social media content creation"
        },
        {
            id: 12,
            title: "Creative Visual Story",
            category: "Short Film",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/332496630_766824294787603_8908340302102459593_n.webp",
            duration: "6:25",
            views: "34.2K",
            rating: 4.7,
            description: "Creative visual storytelling with artistic direction"
        },
        {
            id: 13,
            title: "Professional Photography",
            category: "Photography",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/316768516_2140921719630767_643034833981839033_n.webp",
            duration: "4:12",
            views: "67.3K",
            rating: 4.8,
            description: "Professional photography and visual content"
        },
        {
            id: 14,
            title: "Creative Design Work",
            category: "Design",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/029cb452-2a0c-4a46-91f9-bc9fcdcdf6d9.webp",
            duration: "2:45",
            views: "23.1K",
            rating: 4.9,
            description: "Creative design and visual arts showcase"
        },
        {
            id: 15,
            title: "Kitne Saal - Musical Journey",
            category: "Music Video",
            youtubeId: "dQw4w9WgXcQ",
            posterImage: "/src/assets/posters/POSTER_KITNE_SAAL.webp",
            duration: "5:18",
            views: "12.3K",
            rating: 4.8,
            description: "Musical journey through time and memories"
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides
    };



    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const openVideoModal = (youtubeId: string) => {
        setSelectedVideo(youtubeId);
        setIsModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 3000); // Change slide every 3 seconds for smoother experience

        return () => clearInterval(interval);
    }, []);

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

            {/* Visualloop Section */}
            <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div className="inline-flex items-center gap-3 mb-6">
                            {/* <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                <Video className="h-8 w-8 text-white" />
                            </div> */}
                            <h2 className="text-4xl font-bold relative group overflow-hidden">
                                <span className="inline-block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x transition-all duration-500 hover:scale-110 hover:rotate-1 transform-gpu tracking-wider">
                                    VISUAL L
                                    <span className="inline-block">
                                        <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-4xl font-bold align-text-bottom animate-draw-infinity">∞</span>
                                    </span>
                                    P
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-400/20 to-gray-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100"></div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                            </h2>
                        </div>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                            Our premium video production division showcasing 10+ years of creative excellence and award-winning projects
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group"
                                onClick={() => window.open('https://www.visualloop.in', '_blank')}
                            >
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Visit Visualloop.in</span>
                                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6 border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500 transform hover:scale-110"
                                onClick={() => window.open('https://www.youtube.com/@visualloopofficial', '_blank')}
                            >
                                <Play className="mr-2 h-5 w-5" />
                                YouTube Channel
                            </Button>
                        </div>
                    </div>

                    {/* Featured Projects Grid */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up" style={{ animationDelay: '50ms' }}>Featured Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProjects.map((project, index) => (
                                <Card key={project.id} className="group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="relative">
                                        <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
                                            <img
                                                src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group border border-white/30 shadow-2xl hover:shadow-white/20"
                                                    onClick={() => openVideoModal(project.youtubeId)}>
                                                    <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            {project.duration}
                                        </div>
                                        <div className="absolute bottom-3 left-3 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                                            {project.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                                                {project.title}
                                            </h4>
                                            {/* <div className="flex items-center gap-1 text-yellow-500">
                                                <Star className="h-3 w-3 fill-current" />
                                                <span className="text-xs">{project.rating}</span>
                                            </div> */}
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" />
                                                {project.views}
                                            </div>
                                            {/* <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-xs hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/30"
                                                onClick={() => window.open('https://www.visualloop.in', '_blank')}
                                            >
                                                View Project
                                            </Button> */}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Movie/Video Poster Carousel */}
                    <div className="mb-16 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Project Showcase</h3>
                        <div className="relative">
                            {/* Carousel Container */}
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-600 ease-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {Array.from({ length: 3 }, (_, slideIndex) => {
                                        let startIndex, endIndex;

                                        if (slideIndex === 2) {
                                            // Last slide: show remaining 3 projects
                                            startIndex = 6;
                                            endIndex = showcaseProjects.length;
                                        } else {
                                            // First 2 slides: show 3 projects each
                                            startIndex = slideIndex * 3;
                                            endIndex = startIndex + 3;
                                        }

                                        const slideProjects = showcaseProjects.slice(startIndex, endIndex);

                                        // Skip empty slides
                                        if (slideProjects.length === 0) return null;

                                        return (
                                            <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {slideProjects.map((project, projectIndex) => (
                                                    <div
                                                        key={project.id}
                                                        className="group cursor-pointer animate-fade-in-up opacity-0"
                                                        style={{
                                                            animationDelay: `${slideIndex * 200 + projectIndex * 100}ms`,
                                                            animationFillMode: 'forwards'
                                                        }}
                                                    >
                                                        <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-all duration-300 ease-out transform-gpu">
                                                            <img
                                                                src={project.posterImage || "/src/assets/posters/TS_JIJI_POSTER.webp"}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                                onError={(e) => {
                                                                    // Fallback to available poster images
                                                                    const fallbackImages = [
                                                                        "/src/assets/posters/TS_JIJI_POSTER.webp",
                                                                        "/src/assets/posters/POSTER_KITNE_SAAL.webp",
                                                                        "/src/assets/posters/MKT_Thumbnail_finall1.webp"
                                                                    ];
                                                                    const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                                                                    e.currentTarget.src = randomFallback;
                                                                }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                                                            {/* <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                            {project.duration}
                                                        </div> */}
                                                            {/* <div className="absolute bottom-3 left-3 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                                                            {project.category}
                                                        </div> */}
                                                        </div>
                                                        {/* <h4 className="text-sm font-medium group-hover:text-purple-600 transition-colors duration-300 line-clamp-1 mb-1">
                                                        {project.title}
                                                    </h4> */}
                                                        {/* <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                        <span>{project.category}</span> */}
                                                        {/* <div className="flex items-center gap-1 text-yellow-500">
                                                            <Star className="h-3 w-3 fill-current" />
                                                            <span>{project.rating}</span>
                                                        </div> */}
                                                        {/* </div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            {/* Navigation Arrow - Next Only (Left-to-Right Flow) */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group animate-fade-in-up"
                                style={{ animationDelay: '500ms' }}
                            >
                                <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors duration-300" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-8 space-x-2 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                                {Array.from({ length: 3 }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'bg-purple-500 scale-125'
                                            : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
                        <h4 className="text-xl font-semibold mb-4">Ready to See More?</h4>
                        <p className="text-muted-foreground mb-6">
                            Explore our complete portfolio of {featuredProjects.length + showcaseProjects.length} projects on our dedicated Visualloop platform
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group"
                                onClick={() => window.open('https://www.visualloop.in', '_blank')}
                            >
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Explore Full Portfolio</span>
                                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-6 border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500 transform hover:scale-110">
                                <Calendar className="mr-2 h-5 w-5" />
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Schedule Consultation</span>
                            </Button>
                        </div>
                    </div> */}
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

            {/* Video Modal */}
            {isModalOpen && selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Container */}
                        <div className="relative w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                                title="Video Player"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilmVideo;
