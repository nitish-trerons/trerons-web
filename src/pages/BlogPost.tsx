
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/lib/blog';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : null;

    if (!post) {
        return (
            <div className="min-h-screen bg-background pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The blog post you're looking for doesn't exist.
                    </p>
                    <Link to="/blog">
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link to="/blog">
                    <Button variant="outline" className="mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Button>
                </Link>
            </div>

            {/* Blog Post Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full flex items-center gap-2"
                            >
                                <Tag className="h-3 w-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Featured Image */}
                <div className="text-center mb-12">
                    <div className="text-8xl lg:text-9xl bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 inline-block">
                        {post.image}
                    </div>
                </div>
            </div>

            {/* Blog Post Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <Card className="p-8 lg:p-12">
                    <CardContent className="prose prose-lg max-w-none">
                        {/* This would be replaced with actual MDX content */}
                        <div className="text-center text-muted-foreground">
                            <p className="text-lg mb-4">
                                This is a placeholder for the full blog post content.
                            </p>
                            <p className="text-sm">
                                In the full MDX implementation, this would contain the complete article content
                                with proper formatting, images, and interactive elements.
                            </p>
                        </div>

                        {/* Sample content structure */}
                        <div className="mt-12 text-left">
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p className="mb-4">
                                This is where the actual blog post content would appear. The content would be loaded
                                from the corresponding MDX file and rendered with proper formatting.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Key Points</h2>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>First key point about the topic</li>
                                <li>Second key point with more details</li>
                                <li>Third key point and conclusion</li>
                            </ul>

                            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                            <p className="mb-4">
                                This concludes the sample content structure. The actual implementation would
                                load the full MDX content here.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
                        <p className="text-lg text-muted-foreground">
                            Explore more insights in {post.category}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost) => (
                            <Card key={relatedPost.id} className="overflow-hidden hover:shadow-xl transition-all duration-500">
                                <div className="p-6">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                            {relatedPost.category}
                                        </span>
                                    </div>

                                    <div className="text-4xl mb-4">{relatedPost.image}</div>

                                    <CardTitle className="text-xl mb-3 leading-tight line-clamp-2">
                                        {relatedPost.title}
                                    </CardTitle>

                                    <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                                        {relatedPost.excerpt}
                                    </CardDescription>

                                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                                        <User className="h-4 w-4" />
                                        <span>{relatedPost.author}</span>
                                    </div>

                                    <Link to={`/blog/${relatedPost.slug}`}>
                                        <Button variant="outline" size="sm" className="w-full">
                                            Read More
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Share Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <Card className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Share This Article</h3>
                    <p className="text-muted-foreground mb-6">
                        Help others discover this valuable content
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Share2 className="h-4 w-4" />
                            Copy Link
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Share2 className="h-4 w-4" />
                            Share on Social
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default BlogPost;
