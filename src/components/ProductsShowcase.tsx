import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../data/productsData";
import { trackCTA } from "../analytics/events";

export default function ProductsShowcase() {
  const navigate = useNavigate();

  const handleProductNavigation = (productId: string, productName: string) => {
    trackCTA(`Explore ${productName}`, "Products Showcase");
    navigate(`/products/${productId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="py-20 sm:py-24 bg-slate-50/60 border-y border-slate-100"
      aria-labelledby="alvantix-products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            OUR PRODUCTS
          </span>
          <h2
            id="alvantix-products-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight"
          >
            Building Products for Everyday Challenges.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Alongside our client services, we are developing our own digital products across education, local services, spiritual travel and healthcare. Each product starts with a real need and a clear purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {productsData.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col min-h-[310px] hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
                  {product.category}
                </p>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-sm font-semibold text-slate-800 mb-2">
                  {product.headline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500">
                    {product.status}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleProductNavigation(product.id, product.name)
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Explore Product
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Product descriptions reflect current development direction. Features and availability may change as each product develops.
        </p>
      </div>
    </section>
  );
}
