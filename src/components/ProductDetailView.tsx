import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SEO from "./SEO";
import { productsData } from "../data/productsData";

export default function ProductDetailView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((item) => item.id === productId);

  if (!product) return <main className="min-h-[70vh] flex items-center justify-center px-5 pt-32"><div className="text-center"><h1 className="text-3xl font-bold text-slate-900 mb-3">Product not found</h1><p className="text-slate-600 mb-6">The product page may have moved.</p><Link to="/" className="text-blue-700 font-semibold">Return to Alvantix homepage</Link></div></main>;

  const Icon = product.icon;
  return (
    <main className="bg-white pt-32 md:pt-36 pb-20">
      <SEO title={`${product.name} | Alvantix Products`} description={product.description} canonical={`https://www.alvantix.in/products/${product.id}`} breadcrumbs={[{ name: "Home", url: "/" }, { name: product.name, url: `/products/${product.id}` }]} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-sm text-slate-500"><Link to="/" className="hover:text-blue-700">Home</Link><ChevronRight className="w-4 h-4"/><span className="text-slate-800">{product.name}</span></nav>
        <section className="rounded-3xl bg-slate-50 border border-slate-200 p-7 sm:p-12 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6"><Icon className="w-7 h-7"/></div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">{product.category}</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">{product.name}</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">{product.headline}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">{product.description}</p>
          <span className="inline-flex mt-6 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600">Status: {product.status}</span>
        </section>
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div><h2 className="text-2xl font-bold text-slate-900 mb-4">Who It Is For</h2><p className="text-slate-600 leading-relaxed">{product.audience}</p><h2 className="text-2xl font-bold text-slate-900 mt-9 mb-4">Where It Can Help</h2><ul className="space-y-3">{product.useCases.map((item) => <li key={item} className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"/><span>{item}</span></li>)}</ul></div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7"><h2 className="text-2xl font-bold text-slate-900 mb-5">What We Are Exploring</h2><ul className="space-y-4">{product.features.map((item) => <li key={item} className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"/><span>{item}</span></li>)}</ul></div>
        </section>
        <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-blue-300 pl-4 mb-12">{product.note}</p>
        <section className="rounded-2xl bg-slate-900 text-white p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"><div><h2 className="text-2xl font-bold mb-2">Interested in {product.name}?</h2><p className="text-slate-300">Contact Alvantix to discuss the product and its development direction.</p></div><button onClick={() => navigate(`/contact?service=${encodeURIComponent(`Product enquiry: ${product.name}`)}`)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl font-semibold whitespace-nowrap">Contact Alvantix <ArrowRight className="w-4 h-4"/></button></section>
        <div className="mt-8"><button onClick={() => navigate("/")} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"><ArrowLeft className="w-4 h-4"/> Back to homepage</button></div>
      </div>
    </main>
  );
}
