import { motion } from 'motion/react';
import { ShieldCheck, Eye, Lock, Globe } from 'lucide-react';
import SEO from "./SEO";

export default function PrivacyView() {

 const privacyHighlights = [
  {
    title: "Data Security",
    desc: "We use industry-standard security practices to help protect the personal information you share with Alvantix.",
    icon: Lock,
  },
  {
    title: "Privacy Commitment",
    desc: "We collect only the information necessary to respond to enquiries, deliver our services, and improve your experience.",
    icon: Eye,
  },
  {
    title: "Your Control",
    desc: "You may request access, correction, or deletion of your personal information by contacting our team.",
    icon: ShieldCheck,
  },
];

  return (
      <div className="w-full bg-white pt-44 pb-24 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER BAR */}
        <div className="border-b border-slate-100 pb-10 mb-10 text-center sm:text-left">
          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            COMPLIANCE CENTER
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-mono text-xs">
          </p>
        </div>
<SEO
title="About Alvantix"
description="Learn about Alvantix, our mission, vision, values, and commitment to AI-driven innovation."
/>
        {/* SECURITY PROMISES BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {privacyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg self-start inline-block mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-sm text-slate-800 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* POLICY ARTICLES */}
        <div className="space-y-8 font-sans text-slate-700 leading-relaxed text-sm">
          
          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">1. Information We Collect</h2>
            <p>Alvantix collects only the information necessary to provide our services and respond to your inquiries. This may include your name, email address, phone number, company name, project requirements, and any information you choose to share through our contact forms or career applications. We may also collect basic website usage information to help improve the performance, security, and user experience of our website.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">2. How We Use Your Information</h2>
            <p>The information we collect is used to respond to your inquiries, communicate with you about our services, evaluate career applications, improve our website and digital experiences, maintain website security, and provide better customer support. We do not use your personal information for purposes unrelated to the services you request.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">3. Data Storage & Retention</h2>
            <p>We retain personal information only for as long as necessary to provide our services, fulfill legal obligations, or resolve customer requests. When information is no longer required, we securely delete or anonymize it in accordance with our internal data management practices.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">4. Data Sharing</h2>
            <p>
             Alvantix does not sell, rent, or trade your personal information. Information may be shared only with trusted service providers who help us operate our website, deliver services, or maintain security. These providers are required to protect your information and use it only for authorized purposes.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">5. Security</h2>
            <p>We implement reasonable technical and organizational measures to help protect your personal information against unauthorized access, disclosure, alteration, or destruction. While no online system can guarantee absolute security, we continuously work to improve the protection of our services and user data.</p>
        </div>

      </div>
    </div>
    </div>
  );
}
