import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Sparkles,
  Target,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import SEO from "./SEO";
import { productsData, productIconMap } from "../data/productsData";

export default function ProductDetailView() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === productId);

  // --------------------------------------------------
  // PRODUCT NOT FOUND
  // --------------------------------------------------
  if (!product) {
    return (
      <main className="w-full min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-32 pb-24 text-left">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Sparkles className="w-8 h-8" />
          </div>

          <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
            ALVANTIX DIGITAL PRODUCTS
          </p>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Product Not Found
          </h1>

          <p className="text-slate-600 font-sans leading-relaxed mb-8">
            The requested product page does not exist or has been relocated. Explore our active technology services and AI solutions.
          </p>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>
      </main>
    );
  }

  const IconComp = productIconMap[product.iconName] || Sparkles;

  // Other products for exploration
  const otherProducts = productsData.filter((p) => p.id !== product.id);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": product.category,
    "description": product.overview,
    "operatingSystem": "Web, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/PreOrder"
    },
    "creator": {
      "@type": "Organization",
      "@id": "https://www.alvantix.in/#organization",
      "name": "Alvantix",
      "url": "https://www.alvantix.in/"
    },
    "url": `https://www.alvantix.in/products/${product.id}`
  };

  const handleEnquiry = () => {
    navigate(`/contact?service=${encodeURIComponent(product.name)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-slate-50/60 relative pt-32 md:pt-36 pb-24 overflow-hidden text-left">
      <SEO
        title={product.metaTitle}
        description={product.metaDescription}
        canonical={`https://www.alvantix.in/products/${product.id}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: product.name, url: `/products/${product.id}` }
        ]}
        schema={productSchema}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-8 pt-4">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-sans text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* ==================================================
            HERO / INTRODUCTION SECTION
        ================================================== */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
              <IconComp className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                  ALVANTIX DIGITAL PRODUCT
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  <Clock className="w-3 h-3" />
                  {product.statusBadge}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>
          </div>

          <h2 className="font-display font-bold text-xl sm:text-2xl text-blue-900/90 mb-4 leading-snug">
            {product.headline}
          </h2>

          <div className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-10 shadow-2xs space-y-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Product Overview
              </span>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
                {product.overview}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Proprietary IP of Alvantix</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-200">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>{product.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            PROBLEM SOLVED & TARGET AUDIENCE
        ================================================== */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Solved */}
          <div className="p-7 sm:p-8 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-blue-600 mb-1">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <h3 className="font-display font-bold text-lg text-slate-900">
                The Problem We Are Solving
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {product.problemSolved}
            </p>
          </div>

          {/* Target Audience */}
          <div className="p-7 sm:p-8 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-indigo-600 mb-1">
              <Users className="w-5 h-5 shrink-0" />
              <h3 className="font-display font-bold text-lg text-slate-900">
                Target Audience & Beneficiaries
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {product.targetAudience}
            </p>
          </div>
        </section>

        {/* ==================================================
            CORE CAPABILITIES UNDER DEVELOPMENT
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Planned Product Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Key modules and functional systems currently being architected and engineered:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {product.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pl-6">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            DEVELOPMENT ROADMAP
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              DEVELOPMENT TIMELINE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Engineering & Validation Roadmap
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Transparent developmental phases from conceptual design to public pilot trials:
            </p>
          </div>

          <div className="space-y-4">
            {product.plannedRoadmap.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                    {stage.phase}
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            CALL TO ACTION
        ================================================== */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[28px] p-8 sm:p-12 text-center shadow-xl mb-16">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200 block">
              PARTNER & COLLABORATE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Interested in {product.name}?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
              We welcome dialogue with industry advisors, prospective institutional pilot partners, and early beta testers interested in exploring this product with Alvantix.
            </p>
            <div className="pt-2">
              <button
                onClick={handleEnquiry}
                className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Express Interest in {product.name} →</span>
              </button>
            </div>
          </div>
        </section>

        {/* OTHER PRODUCTS */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              ECOSYSTEM PRODUCTS
            </span>
            <h2 className="font-display font-bold text-2xl text-slate-900">
              More Products in Development
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProducts.map((otherP) => {
              const OtherIcon = productIconMap[otherP.iconName] || Sparkles;
              return (
                <Link
                  key={otherP.id}
                  to={`/products/${otherP.id}`}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <OtherIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        {otherP.category}
                      </span>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                        {otherP.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 font-sans">
                      {otherP.overview}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
