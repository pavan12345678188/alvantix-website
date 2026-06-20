import { Scale, FileText, HelpCircle, Copyright, ShieldCheck } from 'lucide-react';
import SEO from "./SEO";

export default function TermsView() {
  

  const termsHighlights = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing or using the Alvantix website, products, or services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
      icon: FileText,
    },
    {
      title: "Intellectual Property",
      description:
        "All Alvantix software, branding, content, designs, logos, and digital assets are protected by applicable intellectual property laws and remain the property of Alvantix unless otherwise stated.",
      icon: Copyright,
    },
    {
      title: "Responsible Use",
      description:
        "Users are expected to use our website and services responsibly, ethically, and in compliance with all applicable laws and regulations.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full bg-white pt-44 pb-24 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="border-b border-slate-100 pb-10 mb-10 text-center sm:text-left">

          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            LEGAL INFORMATION
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            Terms & Conditions
          </h1>

          <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-2xl">
            These Terms & Conditions outline the rules, responsibilities,
            and legal guidelines for accessing and using the Alvantix website,
            products, services, and digital platforms.
          </p>

        </div>
<SEO
title="Terms & Conditions | Alvantix"
description="Review the Terms & Conditions governing the use of Alvantix products, services, and website."
/>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {termsHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
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

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}