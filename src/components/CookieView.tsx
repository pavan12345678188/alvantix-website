import { motion } from "motion/react";
import {
  Cookie,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

export default function CookieView() {
  const highlights = [
    {
      title: "Website Functionality",
      desc: "Essential technologies may support website functionality, security, and reliable operation.",
      icon: ShieldCheck,
    },
    {
      title: "Transparency",
      desc: "We explain how cookies and similar technologies may be used on the Alvantix website.",
      icon: Cookie,
    },
    {
      title: "Your Preferences",
      desc: "Where applicable, visitors can manage optional cookie and tracking preferences.",
      icon: Settings,
    },
  ];

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <p>
          Welcome to Alvantix.
          <br /><br />
          This Cookie Policy explains how cookies and similar technologies
          may be used when you visit our official website,
          https://www.alvantix.in.
          <br /><br />
          We use these technologies where necessary to support website
          functionality, security, visitor preferences, and website
          performance.
          <br /><br />
          This policy should be read together with our Privacy Policy
          and Terms & Conditions.
        </p>
      ),
    },

    {
      title: "2. What Are Cookies?",
      content: (
        <p>
          Cookies are small text files that websites may store on
          your device when you visit them.
          <br /><br />
          They can help websites remember certain information,
          maintain functionality, understand website usage,
          and improve the browsing experience.
          <br /><br />
          Similar technologies, including browser storage,
          pixels, and scripts, may also be used for certain
          website functions and analytics purposes.
        </p>
      ),
    },

    {
      title: "3. Types of Cookies",
      content: (
        <>
          <p>
            Depending on the technologies implemented on our website,
            cookies and similar technologies may fall into the
            following categories:
          </p>

          <ul>
            <li>
              <strong>Essential Cookies:</strong> Technologies necessary
              for website functionality, security, and core operations.
            </li>

            <li>
              <strong>Functional Cookies:</strong> Technologies that
              may remember preferences or settings to improve
              the browsing experience.
            </li>

            <li>
              <strong>Analytics Cookies:</strong> Technologies that
              may help us understand website traffic, visitor
              interactions, and website performance.
            </li>

            <li>
              <strong>Third-Party Cookies:</strong> Technologies
              that may be set by external services integrated
              into our website.
            </li>
          </ul>

          <p>
            The actual categories used depend on the services
            and technologies active on our website.
          </p>
        </>
      ),
    },

    {
      title: "4. Essential Cookies",
      content: (
        <p>
          Certain cookies or similar technologies may be necessary
          for the basic operation and security of our website.
          <br /><br />
          These technologies may support functions such as
          website navigation, security protections, and
          essential technical operations.
          <br /><br />
          Where a technology is strictly necessary for a service
          requested by a visitor, it may operate without optional
          analytics consent, subject to applicable legal requirements.
          <br /><br />
          Blocking essential technologies through browser settings
          may affect certain website functions.
        </p>
      ),
    },

    {
      title: "5. Analytics Cookies",
      content: (
        <p>
          Alvantix may use website analytics technologies,
          including Google Analytics 4 (GA4), to understand
          website traffic and visitor interactions.
          <br /><br />
          If implemented, analytics technologies may collect
          information such as pages visited, traffic sources,
          browser and device information, approximate geographical
          information, and website engagement.
          <br /><br />
          We may use this information to evaluate website performance
          and improve the visitor experience.
          <br /><br />
          Where required by applicable law, non-essential analytics
          technologies will only be activated after the appropriate
          consent has been obtained.
          <br /><br />
          Google's Privacy Policy:
          {" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Privacy Policy
          </a>
        </p>
      ),
    },

    {
      title: "6. Third-Party Cookies and Technologies",
      content: (
        <p>
          Certain website features or external services may use
          cookies or similar technologies provided by third parties.
          <br /><br />
          These may include hosting infrastructure, analytics
          services, embedded content, or external technology
          integrations, depending on what is implemented.
          <br /><br />
          Third-party providers may process information according
          to their own privacy policies and terms.
          <br /><br />
          Alvantix does not control cookies independently
          placed by external websites or services.
          <br /><br />
          We encourage visitors to review the privacy and
          cookie policies of relevant third-party providers.
        </p>
      ),
    },

    {
      title: "7. Managing Cookie Preferences",
      content: (
        <>
          <p>
            Visitors may manage cookies and similar technologies
            through available website controls and browser settings.
          </p>

          <p>
            Where a cookie preference management feature is
            implemented, visitors may be able to:
          </p>

          <ul>
            <li>Accept all available cookie categories.</li>
            <li>Reject optional cookies.</li>
            <li>Manage individual cookie preferences.</li>
            <li>Change or withdraw consent where applicable.</li>
          </ul>

          <p>
            You may also restrict or delete cookies through
            your browser settings.
          </p>

          <p>
            Please note that disabling certain cookies may
            affect website functionality or user experience.
          </p>

          <p>
            Any consent-management controls described here
            will be available only where implemented on our website.
          </p>
        </>
      ),
    },

    {
      title: "8. Changes to This Cookie Policy",
      content: (
        <p>
          We may update this Cookie Policy to reflect changes
          in our website functionality, technology providers,
          analytics practices, or applicable legal requirements.
          <br /><br />
          Updated versions will be published on this page
          with a revised update date.
          <br /><br />
          We encourage visitors to review this policy periodically
          to stay informed about our cookie practices.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white pt-44 pb-24 text-left">

      <SEO
        title="Cookie Policy | Alvantix"
        description="Learn how Alvantix may use cookies and similar technologies for website functionality, security, analytics, and visitor preferences."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border-b border-slate-100 pb-10 mb-10 text-center sm:text-left">

          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            WEBSITE TRANSPARENCY
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
            Cookie Policy
          </h1>

          <p className="text-slate-500 font-mono text-xs">
            Effective Date: 6 November 2026
            <br />
            Last Updated: 6 November 2026
          </p>

          <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-2xl">
            This Cookie Policy explains how cookies and similar
            technologies may be used on the official Alvantix
            website and how visitors can manage their preferences.
          </p>

        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50"
              >

                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg inline-block mb-3">
                  <Icon className="w-4 h-4" />
                </div>

                <h4 className="font-display font-semibold text-sm text-slate-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Policy Sections */}
        <div className="space-y-8 font-sans text-slate-700 leading-relaxed text-sm">

          {sections.map((section, index) => (
            <section key={index} className="space-y-2">

              <h2 className="font-display font-bold text-xl text-slate-900">
                {section.title}
              </h2>

              <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:pl-1">
                {section.content}
              </div>

            </section>
          ))}

          {/* Contact Section */}
          <section className="space-y-3 border-t border-slate-100 pt-8">

            <h2 className="font-display font-bold text-xl text-slate-900">
              9. Contact Us
            </h2>

            <p>
              If you have questions about this Cookie Policy
              or our use of cookies and similar technologies,
              please contact the Alvantix team through our
              official contact page.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Contact Alvantix →
            </Link>

          </section>

        </div>

      </div>
    </div>
  );
}