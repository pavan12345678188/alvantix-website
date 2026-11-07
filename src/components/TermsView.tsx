import { motion } from "motion/react";
import { FileText, Copyright, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

export default function TermsView() {
  const termsHighlights = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing or using the Alvantix website, you agree to comply with these Terms and Conditions.",
      icon: FileText,
    },
    {
      title: "Intellectual Property",
      description:
        "Alvantix branding, original content, software, designs, and digital assets are protected by applicable intellectual property laws.",
      icon: Copyright,
    },
    {
      title: "Responsible Use",
      description:
        "Visitors are expected to use our website responsibly and in accordance with applicable laws.",
      icon: ShieldCheck,
    },
  ];

  const sections = [
    {
      title: "1. Introduction and Acceptance",
      content: (
        <p>
          Welcome to Alvantix.
          <br /><br />
          These Terms and Conditions govern your access to and use of
          https://www.alvantix.in and the information, content, and services
          presented through this website.
          <br /><br />
          By accessing or using our website, you acknowledge that you have
          read and understood these Terms and agree to comply with them.
          If you do not agree with these Terms, please discontinue using
          the website.
          <br /><br />
          Specific projects, products, or business engagements may be
          governed by separate written agreements.
        </p>
      ),
    },
    {
      title: "2. About Alvantix",
      content: (
        <>
          <p>
            Alvantix is an AI-focused technology and digital solutions
            business operating from India.
          </p>

          <p>
            Our areas of work may include:
          </p>

          <ul>
            <li>Artificial Intelligence and Machine Learning solutions.</li>
            <li>Website and application development.</li>
            <li>Data science and business analytics.</li>
            <li>Business process automation.</li>
            <li>AI agents and intelligent workflow solutions.</li>
            <li>Software development and digital products.</li>
            <li>Technology consulting and digital transformation.</li>
          </ul>

          <p>
            The availability and scope of our services may evolve as
            our business and technology capabilities develop.
          </p>
        </>
      ),
    },
    {
      title: "3. Website Usage",
      content: (
        <>
          <p>
            You agree to use the Alvantix website responsibly and in
            accordance with applicable laws and regulations.
          </p>

          <p>You must not:</p>

          <ul>
            <li>Use the website for unlawful or fraudulent activities.</li>
            <li>Attempt unauthorized access to our systems or servers.</li>
            <li>Distribute malicious software or harmful code.</li>
            <li>Interfere with website functionality, security, or availability.</li>
            <li>Copy, reproduce, or misuse protected content without permission.</li>
            <li>Misrepresent your identity or business information.</li>
            <li>Use automated methods to disrupt or abuse website functionality.</li>
          </ul>

          <p>
            Alvantix reserves the right to restrict access where misuse,
            security risks, or violations of these Terms are identified.
          </p>
        </>
      ),
    },
    {
      title: "4. Services and Project Engagements",
      content: (
        <p>
          Alvantix provides technology and digital solutions based on
          individual business and customer requirements.
          <br /><br />
          Information about services displayed on this website is provided
          for general informational purposes and does not constitute a
          binding offer or guarantee of service availability.
          <br /><br />
          Individual projects may involve specific requirements, deliverables,
          timelines, responsibilities, and support arrangements.
          <br /><br />
          Project engagements will be governed by the applicable approved
          proposal, scope of work, or separate written agreement between
          the relevant parties.
        </p>
      ),
    },
    {
      title: "5. Intellectual Property Rights",
      content: (
        <p>
          Unless otherwise stated, the Alvantix name, logo, branding,
          website content, graphics, original designs, documentation,
          and other materials are owned by or lawfully licensed to Alvantix.
          <br /><br />
          You may not reproduce, distribute, modify, publish, transmit,
          or commercially exploit protected materials without prior
          written permission from the respective rights holder.
          <br /><br />
          Ownership and licensing rights relating to customized client
          deliverables will be determined by the applicable project agreement.
          <br /><br />
          Third-party software, libraries, tools, and open-source components
          remain subject to their respective licenses and ownership rights.
        </p>
      ),
    },
    {
      title: "6. AI and Automated Technology Disclaimer",
      content: (
        <p>
          Certain Alvantix services, technologies, or digital products
          may use Artificial Intelligence, Machine Learning, automation,
          and other emerging technologies.
          <br /><br />
          AI-generated outputs and automated results may contain inaccuracies,
          incomplete information, outdated information, or unexpected results.
          <br /><br />
          Information generated by AI should be independently reviewed
          and verified before being relied upon for important business,
          financial, operational, legal, or other significant decisions.
          <br /><br />
          Alvantix does not guarantee that every AI-generated output
          will be accurate, complete, or suitable for every purpose.
          <br /><br />
          Specific performance, accuracy, and service commitments, where
          applicable, will be governed by the relevant project agreement.
        </p>
      ),
    },
    {
      title: "7. Third-Party Services and Integrations",
      content: (
        <p>
          Certain Alvantix projects, website features, or digital solutions
          may use third-party APIs, hosting platforms, cloud infrastructure,
          software libraries, external tools, and technology providers.
          <br /><br />
          Such third-party services may operate under their own terms,
          privacy policies, licensing conditions, and availability requirements.
          <br /><br />
          Changes, interruptions, or outages affecting third-party services
          may impact certain website features, integrations, or digital solutions.
          <br /><br />
          Alvantix does not control independent third-party platforms.
          Their use remains subject to the applicable third-party terms
          and conditions.
        </p>
      ),
    },
    {
      title: "8. Confidentiality",
      content: (
        <p>
          During business discussions or project engagements, visitors,
          prospective clients, and Alvantix may exchange confidential
          business, technical, or project-related information.
          <br /><br />
          Such information should be handled responsibly and used only
          for its intended purpose.
          <br /><br />
          Where applicable, confidentiality obligations will be governed
          by separate confidentiality agreements, non-disclosure agreements,
          or project contracts between the relevant parties.
        </p>
      ),
    },
    {
      title: "9. Limitation of Liability",
      content: (
        <p>
          The information and materials available on the Alvantix website
          are provided for general informational purposes.
          <br /><br />
          To the extent permitted by applicable law, Alvantix shall not
          be liable for indirect, incidental, special, or consequential
          losses arising from the use of or inability to use this website.
          <br /><br />
          We do not guarantee uninterrupted website availability,
          error-free functionality, or that all website information
          will always be complete or up to date.
          <br /><br />
          Nothing in these Terms excludes or limits liability that
          cannot legally be excluded or limited under applicable law.
        </p>
      ),
    },
    {
      title: "10. Suspension and Termination",
      content: (
        <p>
          Alvantix reserves the right to restrict, suspend, or terminate
          access to its website where reasonably necessary due to security
          concerns, unlawful activities, misuse, or material violations
          of these Terms.
          <br /><br />
          Any suspension or termination relating to a specific business
          engagement will be governed by the applicable separate agreement.
        </p>
      ),
    },
    {
      title: "11. Governing Law and Jurisdiction",
      content: (
        <p>
          These Terms and Conditions shall be governed by and interpreted
          in accordance with the laws of India.
          <br /><br />
          Any disputes arising from the use of this website shall be
          subject to the jurisdiction of the competent courts in India,
          as determined under applicable law.
          <br /><br />
          Nothing in this section limits any mandatory rights or remedies
          available under applicable Indian law.
        </p>
      ),
    },
    {
      title: "12. Changes to These Terms",
      content: (
        <p>
          Alvantix reserves the right to revise or update these Terms
          and Conditions as its services, business activities, technology,
          or legal requirements evolve.
          <br /><br />
          Updated versions will be published on this page with a revised
          update date.
          <br /><br />
          Continued use of the website after updated Terms are published
          will be subject to applicable law and the updated Terms.
        </p>
      ),
    },
    {
      title: "13. Contact Us",
      content: (
        <>
          <p>
            If you have questions, concerns, or requests regarding these
            Terms and Conditions, you can contact the Alvantix team
            through our official contact page.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Contact Alvantix →
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-white pt-44 pb-24 text-left">

      <SEO
        title="Terms & Conditions | Alvantix"
        description="Read the Terms and Conditions governing the use of the official Alvantix website, AI solutions, software development, technology information, and digital services."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border-b border-slate-100 pb-10 mb-10 text-center sm:text-left">

          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            LEGAL INFORMATION
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
            Terms & Conditions
          </h1>

          <p className="text-slate-500 font-mono text-xs">
            Effective Date: 6 November 2026
            <br />
            Last Updated: 6 November 2026
          </p>

          <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-2xl">
            These Terms and Conditions outline the rules, responsibilities,
            and legal guidelines for accessing and using the official
            Alvantix website.
          </p>

        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          {termsHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Terms Sections */}
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

        </div>

      </div>
    </div>
  );
}
