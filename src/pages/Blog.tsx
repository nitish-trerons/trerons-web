import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowRight, Search, Filter, SortAsc } from 'lucide-react';
import {
    blogPosts,
    featuredPost,
    categories,
    filterAndSortPosts
} from '@/lib/blog';
import type { SortOption } from '@/lib/blog';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortOption>("date");
    const [showFilters, setShowFilters] = useState(false);

    // Filter and sort posts based on current state
    const filteredPosts = useMemo(() => {
        return filterAndSortPosts(
            [featuredPost, ...blogPosts],
            selectedCategory,
            searchQuery,
            sortBy
        );
    }, [selectedCategory, searchQuery, sortBy]);

    // Separate featured post from regular posts
    const displayFeaturedPost = filteredPosts.find(post => post.id === 0);
    const displayPosts = filteredPosts.filter(post => post.id !== 0);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setSearchQuery(""); // Clear search when changing category
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is handled automatically by the useMemo
    };

    const clearFilters = () => {
        setSelectedCategory("All");
        setSearchQuery("");
        setSortBy("date");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Industry Insights & Trends
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            Stay ahead of the curve with expert analysis, industry trends, and innovative insights from the world of events, film, and technology.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="mb-8">
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search articles, authors, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </form>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <Button
                                key={category.name}
                                variant={selectedCategory === category.name ? "default" : "outline"}
                                className="px-6 py-2 rounded-full"
                                title={category.description}
                                onClick={() => handleCategoryChange(category.name)}
                            >
                                {category.name} ({category.count})
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters and Sort Section */}
            <section className="py-8 border-b border-border/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2"
                            >
                                <Filter className="h-4 w-4" />
                                {showFilters ? "Hide" : "Show"} Filters
                            </Button>

                            {(selectedCategory !== "All" || searchQuery || sortBy !== "date") && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Clear All
                                </Button>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                            </span>

                            <div className="flex items-center gap-2">
                                <SortAsc className="h-4 w-4 text-muted-foreground" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                                    className="bg-background border border-border rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                                >
                                    <option value="date">Date</option>
                                    <option value="title">Title</option>
                                    <option value="author">Author</option>
                                    <option value="readTime">Read Time</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Filters */}
                    {showFilters && (
                        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        {categories.map((category) => (
                                            <option key={category.name} value={category.name}>
                                                {category.name} ({category.count})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Sort By</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                                        className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        <option value="date">Date (Newest First)</option>
                                        <option value="title">Title (A-Z)</option>
                                        <option value="author">Author (A-Z)</option>
                                        <option value="readTime">Read Time (Shortest First)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Search</label>
                                    <input
                                        type="text"
                                        placeholder="Search query..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Post */}
            {displayFeaturedPost && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Article</h2>
                            <p className="text-lg text-muted-foreground">Our latest insights on industry trends and innovations</p>
                        </div>

                        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                            {displayFeaturedPost.category}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">
                                        {displayFeaturedPost.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg mb-6 leading-relaxed">
                                        {displayFeaturedPost.excerpt}
                                    </CardDescription>

                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            <span>{displayFeaturedPost.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(displayFeaturedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{displayFeaturedPost.readTime}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {displayFeaturedPost.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link to={`/blog/${displayFeaturedPost.slug}`}>
                                        <Button size="lg" className="w-fit group">
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">Read Full Article</span>
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Button>
                                    </Link>
                                </div>

                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                                    <div className="text-8xl lg:text-9xl">{displayFeaturedPost.image}</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {searchQuery
                                ? `Search results for "${searchQuery}"`
                                : `Discover insights, trends, and innovations in ${selectedCategory === "All" ? "our industry" : selectedCategory.toLowerCase()}`
                            }
                        </p>
                    </div>

                    {displayPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayPosts.map((post) => (
                                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-500">
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                                {post.category}
                                            </span>
                                        </div>

                                        <div className="text-4xl mb-4">{post.image}</div>

                                        <CardTitle className="text-xl mb-3 leading-tight line-clamp-2">
                                            {post.title}
                                        </CardTitle>

                                        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </CardDescription>

                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link to={`/blog/${post.slug}`}>
                                            <Button variant="outline" size="sm" className="w-full group">
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search criteria or browse all categories
                            </p>
                            <Button onClick={clearFilters} variant="outline">
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-lg text-muted-foreground">
                            Get the latest industry insights and trends delivered to your inbox
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        />
                        <Button size="lg" className="px-8">
                            Subscribe
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">
                        No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;
