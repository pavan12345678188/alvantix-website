import { motion } from "motion/react";
import { ShieldCheck, Eye, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

export default function PrivacyView() {
  const privacyHighlights = [
    {
      title: "Data Security",
      desc: "We implement reasonable security practices designed to help protect the personal information you share with Alvantix.",
      icon: Lock,
    },
    {
      title: "Privacy Commitment",
      desc: "We use personal information for legitimate business purposes, website operations, and communication.",
      icon: Eye,
    },
    {
      title: "Your Privacy Rights",
      desc: "You may request access, correction, or deletion of your personal information, subject to applicable laws.",
      icon: ShieldCheck,
    },
  ];

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <p>
          Welcome to Alvantix.
          <br /><br />
          We respect your privacy and are committed to handling personal
          information responsibly.
          <br /><br />
          This Privacy Policy explains how we collect, use, store, share,
          and protect information when you visit our website,
          submit an enquiry, communicate with us, or interact with
          our digital services.
          <br /><br />
          In this policy, "Alvantix", "we", "our", and "us" refer to
          the business operating under the Alvantix brand.
          <br /><br />
          This policy applies to our official website:
          https://www.alvantix.in
        </p>
      ),
    },

    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            Depending on how you interact with our website and services,
            we may collect the following categories of information:
          </p>

          <ul>
            <li>
              <strong>Personal Information:</strong> Your name,
              email address, phone number, and other contact details
              that you voluntarily provide.
            </li>

            <li>
              <strong>Business Information:</strong> Company name,
              business details, project requirements, service interests,
              and related enquiries.
            </li>

            <li>
              <strong>Contact Form Information:</strong> Information
              and messages submitted through our website contact forms.
            </li>

            <li>
              <strong>Communication Information:</strong> Messages,
              attachments, and relevant information shared through
              WhatsApp, email, telephone, or other communication channels.
            </li>

            <li>
              <strong>Technical Information:</strong> Where collected
              through website infrastructure or analytics tools,
              information such as browser type, device information,
              IP address, pages visited, and website interactions.
            </li>
          </ul>

          <p>
            We collect information that is relevant to the purpose
            for which you interact with us.
          </p>
        </>
      ),
    },

    {
      title: "3. Contact Forms and Enquiries",
      content: (
        <p>
          When you submit an enquiry through our website, we may collect
          information such as your name, email address, company name,
          service interest, and message.
          <br /><br />
          This information is used to understand your requirements,
          respond to enquiries, discuss potential projects, prepare
          proposals, and communicate with you regarding our services.
          <br /><br />
          Information submitted through our contact forms may be
          processed using our website backend and relevant service
          providers to deliver your enquiry to the Alvantix team.
          <br /><br />
          Please avoid submitting passwords, financial credentials,
          or unnecessary sensitive personal information through
          general enquiry forms.
        </p>
      ),
    },

    {
      title: "4. WhatsApp, Email and Telephone Communication",
      content: (
        <p>
          You may contact Alvantix through WhatsApp, email, telephone,
          or other communication channels made available on our website.
          <br /><br />
          Information you voluntarily share through these channels
          may be used to respond to enquiries, understand your requirements,
          coordinate business discussions, provide support, and maintain
          relevant communication records.
          <br /><br />
          WhatsApp, email, and other communication services are operated
          by independent third-party providers and are subject to their
          respective privacy policies and terms.
        </p>
      ),
    },

    {
      title: "5. How We Use Your Information",
      content: (
        <>
          <p>
            We may use collected information for the following purposes:
          </p>

          <ul>
            <li>Responding to enquiries and communication requests.</li>
            <li>Understanding customer and business requirements.</li>
            <li>Providing information about our technology services.</li>
            <li>Discussing potential projects and business opportunities.</li>
            <li>Managing customer relationships and project communication.</li>
            <li>Operating and maintaining our website.</li>
            <li>Improving website performance and user experience.</li>
            <li>Maintaining website security and preventing misuse.</li>
            <li>Meeting applicable legal and regulatory obligations.</li>
            <li>Sending relevant business updates where permitted.</li>
          </ul>

          <p>
            We process personal information only for appropriate
            purposes and in accordance with applicable laws.
          </p>
        </>
      ),
    },

    {
      title: "6. Website Analytics",
      content: (
        <p>
          Alvantix may use website analytics technologies, including
          Google Analytics 4 (GA4), to understand website traffic,
          visitor behaviour, and website performance.
          <br /><br />
          If and when these analytics technologies are implemented,
          they may collect information such as pages visited,
          traffic sources, device and browser information,
          approximate geographical information, and website interactions.
          <br /><br />
          We use analytics information to understand how visitors
          interact with our website and to improve its functionality
          and user experience.
          <br /><br />
          Where required, non-essential analytics technologies will
          operate according to applicable consent requirements
          and visitor preferences.
          <br /><br />
          If Google Analytics is implemented, its data processing
          will also be subject to Google's applicable privacy terms.
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
      title: "7. Cookies and Tracking Technologies",
      content: (
        <p>
          Our website may use cookies and similar technologies to
          support website functionality, maintain security,
          remember preferences, and understand visitor activity.
          <br /><br />
          Depending on the technologies implemented, these may include
          essential cookies and optional analytics cookies.
          <br /><br />
          Where required by applicable law, we will seek appropriate
          consent before activating non-essential tracking technologies.
          <br /><br />
          You may also manage or restrict cookies through your
          browser settings. Disabling certain cookies may affect
          some website functionality.
          <br /><br />
          Additional information about our cookie practices may
          be provided through a separate Cookie Policy when published.
        </p>
      ),
    },

    {
      title: "8. Information Sharing and Service Providers",
      content: (
        <>
          <p>
            Alvantix does not sell or rent personal information
            to third parties.
          </p>

          <p>
            We may share relevant information with trusted service
            providers where reasonably necessary to operate our website,
            manage communications, provide services, or maintain security.
          </p>

          <p>These providers may include:</p>

          <ul>
            <li>Website hosting and infrastructure providers.</li>
            <li>Backend and database service providers.</li>
            <li>Email and communication service providers.</li>
            <li>Analytics and technology service providers.</li>
            <li>Professional advisers and legal representatives.</li>
          </ul>

          <p>
            We may also disclose information where required by applicable
            law, legal proceedings, or lawful requests from competent
            authorities.
          </p>

          <p>
            Where appropriate, we take reasonable steps to ensure
            that service providers handle information responsibly
            and only for relevant purposes.
          </p>
        </>
      ),
    },

    {
      title: "9. Third-Party Websites and Services",
      content: (
        <p>
          Our website may contain links to third-party websites,
          applications, APIs, platforms, or external services.
          <br /><br />
          These third-party services operate independently and may
          have their own privacy policies, security practices,
          and data-handling procedures.
          <br /><br />
          Alvantix does not control the privacy practices or content
          of external websites.
          <br /><br />
          We encourage visitors to review the privacy policies
          of third-party services before sharing personal information
          with them.
        </p>
      ),
    },

    {
      title: "10. International Data Processing",
      content: (
        <p>
          Certain technology, hosting, cloud infrastructure,
          and communication providers may process information
          using infrastructure located in different countries.
          <br /><br />
          Where personal information is processed or transferred
          outside India through such providers, we will take
          appropriate steps in accordance with applicable
          Indian data protection laws.
          <br /><br />
          The processing of information by independent third-party
          providers may also be governed by their respective
          privacy policies and contractual terms.
        </p>
      ),
    },

    {
      title: "11. Data Storage and Retention",
      content: (
        <p>
          We retain personal information only for as long as
          reasonably necessary to fulfil the purposes for which
          it was collected.
          <br /><br />
          This may include responding to enquiries, maintaining
          business communication records, managing project discussions,
          resolving disputes, and meeting applicable legal obligations.
          <br /><br />
          When personal information is no longer required,
          we take reasonable steps to delete or anonymize it,
          subject to applicable legal and operational requirements.
          <br /><br />
          Retention periods may vary depending on the type of
          information and the purpose for which it was collected.
        </p>
      ),
    },

    {
      title: "12. Data Security",
      content: (
        <p>
          We implement reasonable technical and organizational
          measures designed to protect personal information
          against unauthorized access, disclosure, alteration,
          loss, or misuse.
          <br /><br />
          These measures may include appropriate access controls,
          secure infrastructure, and responsible information-handling
          practices.
          <br /><br />
          However, no internet transmission or electronic storage
          system can be guaranteed to be completely secure.
          <br /><br />
          We continuously seek to maintain appropriate safeguards
          based on the nature of the information and the risks involved.
        </p>
      ),
    },

    {
      title: "13. Your Privacy Rights and Requests",
      content: (
        <>
          <p>
            Subject to applicable Indian data protection laws,
            you may have certain rights regarding your personal
            information, including:
          </p>

          <ul>
            <li>Requesting information about personal data we process.</li>
            <li>Requesting correction of inaccurate personal information.</li>
            <li>Requesting deletion of personal information where permitted.</li>
            <li>Withdrawing consent where processing is based on consent.</li>
            <li>Raising privacy-related concerns or complaints.</li>
          </ul>

          <p>
            You may submit a privacy-related request through
            our official contact page.
          </p>

          <p>
            We may request reasonable information to verify
            your identity before processing a request.
            Requests will be handled in accordance with
            applicable laws and legal requirements.
          </p>
        </>
      ),
    },

    {
      title: "14. Children's Privacy",
      content: (
        <p>
          Our website is intended for general business and
          technology-related audiences.
          <br /><br />
          We do not intentionally seek to collect personal
          information from children through our general
          website enquiry channels.
          <br /><br />
          Where information relating to children is processed,
          we will handle it in accordance with applicable
          data protection requirements.
          <br /><br />
          If you believe that a child has provided personal
          information to us inappropriately, please contact
          us so that the matter can be reviewed.
        </p>
      ),
    },

    {
      title: "15. Changes to This Privacy Policy",
      content: (
        <p>
          We may revise or update this Privacy Policy to reflect
          changes in our business practices, website functionality,
          technology, services, or applicable laws.
          <br /><br />
          Updated versions will be published on this page
          with a revised update date.
          <br /><br />
          We encourage visitors to review this page periodically
          to stay informed about our privacy practices.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-white pt-44 pb-24 text-left">

      <SEO
        title="Privacy Policy | Alvantix"
        description="Read the Alvantix Privacy Policy to understand how we collect, use, share, and protect personal information when you visit our official website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="border-b border-slate-100 pb-10 mb-10 text-center sm:text-left">

          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            COMPLIANCE CENTER
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-500 font-mono text-xs">
            Effective Date: 6 November 2026
            <br />
            Last Updated: 6 November 2026
          </p>

          <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-2xl">
            This Privacy Policy explains how Alvantix collects,
            uses, and protects personal information when visitors
            interact with our official website and communication channels.
          </p>

        </div>

        {/* Privacy Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {privacyHighlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
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

        {/* Privacy Policy Sections */}
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
              16. Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy,
              wish to exercise your privacy rights, or have a
              privacy-related concern, please contact the
              Alvantix team through our official contact page.
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
