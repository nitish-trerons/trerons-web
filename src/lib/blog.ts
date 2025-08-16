// Blog content management utility
// This file handles blog post metadata and content loading

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    slug: string;
    content?: string;
}

export interface BlogCategory {
    name: string;
    count: number;
    description: string;
}

export type SortOption = 'date' | 'title' | 'author' | 'readTime';

// Blog post data - in a real application, this would come from MDX files
// For now, we'll keep the static data structure for immediate functionality
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Event Planning: AI-Powered Personalization",
        excerpt: "Discover how artificial intelligence is revolutionizing event planning with personalized experiences, predictive analytics, and automated coordination systems.",
        category: "Event Trends",
        author: "Sarah Johnson",
        date: "2024-01-15",
        readTime: "8 min read",
        image: "🎯",
        tags: ["AI", "Personalization", "Event Planning", "Technology"],
        slug: "ai-powered-event-planning"
    },
    {
        id: 2,
        title: "Virtual Reality in Film Production: Breaking Creative Boundaries",
        excerpt: "Explore how VR technology is transforming film production, from pre-visualization to immersive storytelling experiences that engage audiences like never before.",
        category: "Film & Video",
        author: "Michael Chen",
        date: "2024-01-12",
        readTime: "6 min read",
        image: "🎬",
        tags: ["VR", "Film Production", "Innovation", "Storytelling"],
        slug: "vr-film-production"
    },
    {
        id: 3,
        title: "Sustainable Tech: Green Solutions for Digital Transformation",
        excerpt: "Learn about eco-friendly technology solutions that help businesses reduce their carbon footprint while accelerating digital transformation initiatives.",
        category: "Tech Services",
        author: "Emma Rodriguez",
        date: "2024-01-10",
        readTime: "7 min read",
        image: "🌱",
        tags: ["Sustainability", "Green Tech", "Digital Transformation", "Innovation"],
        slug: "sustainable-tech-solutions"
    },
    {
        id: 4,
        title: "Hybrid Events: The New Normal in Corporate Gatherings",
        excerpt: "How companies are adapting to hybrid event formats, combining in-person and virtual experiences to reach global audiences effectively.",
        category: "Event Trends",
        author: "David Kim",
        date: "2024-01-08",
        readTime: "5 min read",
        image: "🌐",
        tags: ["Hybrid Events", "Corporate Events", "Global Reach", "Digital Events"],
        slug: "hybrid-events-corporate"
    },
    {
        id: 5,
        title: "Content Marketing Through Video: Strategies That Convert",
        excerpt: "Master the art of video content marketing with proven strategies that drive engagement, build trust, and convert viewers into customers.",
        category: "Film & Video",
        author: "Lisa Thompson",
        date: "2024-01-05",
        readTime: "9 min read",
        image: "📹",
        tags: ["Video Marketing", "Content Strategy", "Conversion", "Engagement"],
        slug: "video-content-marketing"
    },
    {
        id: 6,
        title: "Web3 and the Future of Digital Services",
        excerpt: "Understanding how blockchain technology and Web3 are reshaping digital services, from decentralized applications to new business models.",
        category: "Tech Services",
        author: "Alex Wong",
        date: "2024-01-03",
        readTime: "10 min read",
        image: "🔗",
        tags: ["Web3", "Blockchain", "Digital Services", "Innovation"],
        slug: "web3-digital-services"
    }
];

export const featuredPost: BlogPost = {
    id: 0,
    title: "2024 Service Industry Outlook: Trends That Will Shape the Future",
    excerpt: "A comprehensive analysis of emerging trends across event planning, film production, and technology services that will define the industry landscape in 2024 and beyond.",
    category: "Industry Insights",
    author: "Trerons Team",
    date: "2024-01-20",
    readTime: "12 min read",
    image: "🚀",
    tags: ["Industry Trends", "2024 Outlook", "Future of Services", "Innovation"],
    slug: "2024-service-industry-outlook"
};

export const categories: BlogCategory[] = [
    { name: "All", count: blogPosts.length + 1, description: "All blog posts" },
    { name: "Event Trends", count: blogPosts.filter(post => post.category === "Event Trends").length, description: "Latest trends in event planning and management" },
    { name: "Film & Video", count: blogPosts.filter(post => post.category === "Film & Video").length, description: "Innovations in film and video production" },
    { name: "Tech Services", count: blogPosts.filter(post => post.category === "Tech Services").length, description: "Technology solutions and digital transformation" },
    { name: "Industry Insights", count: blogPosts.filter(post => post.category === "Industry Insights").length, description: "Broad industry analysis and trends" }
];

// Utility functions for blog management
export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return [...blogPosts, featuredPost].find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
    if (category === "All") {
        return [featuredPost, ...blogPosts];
    }
    return [...blogPosts, featuredPost].filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
    return [...blogPosts, featuredPost].filter(post =>
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
};

export const searchPosts = (query: string): BlogPost[] => {
    const searchTerm = query.toLowerCase();
    return [...blogPosts, featuredPost].filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.author.toLowerCase().includes(searchTerm)
    );
};

export const sortPosts = (posts: BlogPost[], sortBy: SortOption): BlogPost[] => {
    const sortedPosts = [...posts];

    switch (sortBy) {
        case 'date':
            return sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        case 'title':
            return sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        case 'author':
            return sortedPosts.sort((a, b) => a.author.localeCompare(b.author));
        case 'readTime':
            return sortedPosts.sort((a, b) => {
                const aTime = parseInt(a.readTime.split(' ')[0]);
                const bTime = parseInt(b.readTime.split(' ')[0]);
                return aTime - bTime;
            });
        default:
            return sortedPosts;
    }
};

export const filterAndSortPosts = (
    posts: BlogPost[],
    category: string,
    searchQuery: string,
    sortBy: SortOption
): BlogPost[] => {
    let filteredPosts = posts;

    // Filter by category
    if (category !== "All") {
        filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        filteredPosts = searchPosts(searchQuery).filter(post =>
            filteredPosts.some(fp => fp.id === post.id)
        );
    }

    // Sort posts
    return sortPosts(filteredPosts, sortBy);
};

// Future MDX integration functions (commented out for now)
/*
// These functions would be implemented when MDX is fully integrated
export const loadMDXContent = async (slug: string): Promise<string> => {
    // Load MDX content from file system or CMS
    // This would replace the static content with dynamic MDX loading
};

export const getAllMDXPosts = async (): Promise<BlogPost[]> => {
    // Load all MDX files and extract metadata
    // This would replace the static blogPosts array
};
*/
