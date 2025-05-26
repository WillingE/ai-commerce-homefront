import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO = ({
  title = 'Homywork - AI-Powered Cross-Border E-commerce Platform',
  description = 'Homywork helps e-commerce businesses scale globally with AI-powered tools for product optimization, listing management, and market intelligence.',
  keywords = 'homywork, AI e-commerce, cross-border commerce, product optimization, listing management, market intelligence',
  canonical = 'https://homywork.com/',
  ogType = 'website',
  ogTitle = 'Homywork - AI-Powered Cross-Border E-commerce Platform',
  ogDescription = 'Scale your e-commerce business globally with AI-powered tools for product optimization, listing management, and market intelligence.',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  twitterTitle = 'Homywork - AI E-commerce Platform',
  twitterDescription = 'Scale your e-commerce business globally with Homywork\'s AI tools',
  twitterImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
}: SEOProps) => {
  return (
    <Helmet>
      {/* 基本 Meta 标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Homywork" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@homywork" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
};

export default SEO; 