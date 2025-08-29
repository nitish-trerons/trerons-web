# Blog Content Management

This directory contains the blog content in MDX format for easy management and updates.

## File Structure

```
src/content/blog/
├── README.md                    # This documentation file
├── 2024-service-industry-outlook.mdx    # Featured article
├── ai-powered-event-planning.mdx        # AI in event planning
└── [future-blog-posts].mdx     # Additional blog posts
```

## MDX File Format

Each blog post should follow this structure:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of the post content"
category: "Event Trends" | "Film & Video" | "Tech Services" | "Industry Insights"
author: "Author Name"
date: "YYYY-MM-DD"
readTime: "X min read"
image: "🎯"  # Emoji or icon
tags: ["tag1", "tag2", "tag3"]
slug: "url-friendly-slug"
---

# Your Blog Post Content

Your markdown content goes here...

## Subheadings

- Bullet points
- More content

## Code Examples

```javascript
// Your code here
```

## Conclusion

Wrap up your post...
```

## Frontmatter Fields

- **title**: The main title of the blog post
- **excerpt**: A brief summary (150-200 characters)
- **category**: One of the predefined categories
- **author**: Author's name
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time
- **image**: Emoji or icon representing the post
- **tags**: Array of relevant keywords
- **slug**: URL-friendly version of the title

## Adding New Blog Posts

1. Create a new `.mdx` file in this directory
2. Follow the frontmatter structure above
3. Write your content in Markdown/MDX format
4. Update the `src/lib/blog.ts` file to include the new post
5. The post will automatically appear on the blog page

## Categories

- **Event Trends**: Event planning, management, and industry trends
- **Film & Video**: Film production, video content, and media trends
- **Tech Services**: Technology solutions and digital transformation
- **Industry Insights**: Broad industry analysis and general trends

## Benefits of MDX

- **Easy Content Management**: Developers can update content without touching React code
- **Markdown Support**: Rich text formatting, lists, code blocks, etc.
- **Component Integration**: Can include React components within content
- **Version Control**: Content changes are tracked in Git
- **SEO Friendly**: Structured content for better search engine optimization

## Future Enhancements

When fully implementing MDX:

1. Install MDX packages: `npm install @mdx-js/react @mdx-js/loader`
2. Configure build tools to process MDX files
3. Implement dynamic content loading from MDX files
4. Add search and filtering capabilities
5. Implement pagination for large numbers of posts

## Current Implementation

The blog system currently uses a hybrid approach:
- Content structure is defined in `src/lib/blog.ts`
- MDX files are prepared for future integration
- Static data provides immediate functionality
- Easy migration path to full MDX when ready

## Content Guidelines

- Keep excerpts under 200 characters
- Use relevant tags for better discoverability
- Include engaging images/emojis
- Write for your target audience
- Maintain consistent formatting
- Proofread before publishing
