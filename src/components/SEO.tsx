import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonical,
  image = "https://www.alvantix.in/og-image.png",
  breadcrumbs,
  schema,
}: SEOProps) {
  // Ensure strict canonical domain consistency with www
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const canonicalUrl =
    canonical ||
    `https://www.alvantix.in${pathname === "/" ? "" : pathname}`;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith("http") ? crumb.url : `https://www.alvantix.in${crumb.url}`,
    })),
  } : null;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Alvantix, Alvantix AI, Artificial Intelligence, AI Solutions, Generative AI, AI Agents, Software Engineering, Web Development, Mobile Apps, Business Automation, Data Analytics, Technology Innovation"
      />
      <meta name="author" content="Alvantix" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alvantix" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Alvantix - AI & Software Innovation Company" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dynamic JSON-LD structured data for Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Dynamic custom page schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}