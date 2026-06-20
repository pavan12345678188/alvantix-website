import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({
  title,
  description,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="Alvantix, AI, Artificial Intelligence, Software Development, Web Development, Mobile Apps, Automation, Technology Company"
      />

      <meta
        name="author"
        content="Alvantix"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta property="og:title" content={title} />

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
    </Helmet>
  );
}