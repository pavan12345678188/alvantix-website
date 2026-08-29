import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  image = "https://alvantix.in/og-image.png",
}: SEOProps) {
  const canonicalUrl =
    canonical || `https://alvantix.in${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="Alvantix, AI, Artificial Intelligence, Software Development, Web Development, Mobile Apps, Automation, Digital Marketing, Data Analytics, UI UX Design, Business Intelligence, Technology Company"
      />

      <meta
        name="author"
        content="Alvantix"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="Alvantix"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:image:alt"
        content="Alvantix - AI & Software Innovation Company"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}