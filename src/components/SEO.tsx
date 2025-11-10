import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultSEO = {
  title: 'Trerons - Event, Film Production & Tech Solutions',
  description: 'Trerons - Transform your vision into reality with our comprehensive event services, film & video production, and tech solutions. Professional, creative, and innovative services for modern businesses.',
  keywords: 'event planning, film production, video production, tech solutions, corporate events, wedding planning, video services, technology services',
  image: '/TreronsLogo.svg',
  url: 'https://trerons.com',
  type: 'website',
};

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Trerons` 
    : defaultSEO.title;
  
  const metaDescription = description || defaultSEO.description;
  const metaKeywords = keywords || defaultSEO.keywords;
  const metaImage = image || defaultSEO.image;
  const metaUrl = url || defaultSEO.url;
  const metaType = type || defaultSEO.type;
  const siteUrl = 'https://trerons.com';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);
    updateMetaTag('author', author || 'Trerons');
    
    // Robots meta tag
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
    ].join(', ');
    updateMetaTag('robots', robotsContent);

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', metaDescription, 'property');
    updateMetaTag('og:image', metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`, 'property');
    updateMetaTag('og:url', metaUrl, 'property');
    updateMetaTag('og:type', metaType, 'property');
    updateMetaTag('og:site_name', 'Trerons', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`);
    updateMetaTag('twitter:site', '@trerons');
    updateMetaTag('twitter:creator', '@trerons');

    // Article meta tags (for blog posts)
    if (type === 'article' && author) {
      updateMetaTag('article:author', author, 'property');
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, 'property');
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, 'property');
      }
    }

    // Canonical URL
    updateLinkTag('canonical', metaUrl);

    // Language
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'en');
  }, [
    fullTitle,
    metaDescription,
    metaKeywords,
    metaImage,
    metaUrl,
    metaType,
    author,
    publishedTime,
    modifiedTime,
    noindex,
    nofollow,
    siteUrl,
  ]);

  // Structured Data (JSON-LD)
  useEffect(() => {
    const getStructuredData = () => {
      const baseStructuredData: any = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Trerons',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/TreronsLogo.svg`,
            },
            sameAs: [
              // Add social media links here when available
              // 'https://www.facebook.com/trerons',
              // 'https://www.twitter.com/trerons',
              // 'https://www.linkedin.com/company/trerons',
              // 'https://www.instagram.com/trerons',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-7008-550077',
              contactType: 'Customer Service',
              email: 'hello@trerons.com',
              areaServed: 'IN',
              availableLanguage: 'English',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bhubaneswar',
              addressRegion: 'Odisha',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Trerons',
            publisher: {
              '@id': `${siteUrl}/#organization`,
            },
          },
        ],
      };

      if (metaType === 'article') {
        baseStructuredData['@graph'].push({
          '@type': 'Article',
          '@id': `${metaUrl}#article`,
          headline: fullTitle,
          description: metaDescription,
          image: {
            '@type': 'ImageObject',
            url: metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`,
          },
          datePublished: publishedTime || new Date().toISOString(),
          dateModified: modifiedTime || new Date().toISOString(),
          author: {
            '@type': 'Person',
            name: author || 'Trerons',
          },
          publisher: {
            '@id': `${siteUrl}/#organization`,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': metaUrl,
          },
        });
      } else {
        baseStructuredData['@graph'].push({
          '@type': 'WebPage',
          '@id': `${metaUrl}#webpage`,
          url: metaUrl,
          name: fullTitle,
          description: metaDescription,
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          about: {
            '@id': `${siteUrl}/#organization`,
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`,
          },
        });
      }

      return baseStructuredData;
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(getStructuredData());
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [fullTitle, metaDescription, metaImage, metaUrl, metaType, author, publishedTime, modifiedTime, siteUrl]);

  return null;
};

export default SEO;

