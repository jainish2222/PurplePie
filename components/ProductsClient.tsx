"use client";

import { useMemo, useState } from "react";

import ProductCard, {
  PRODUCT_GRID_CLASS,
  ProductGridSkeleton,
} from "./ProductCard";
import type { Product } from "@/data/products";

const CATEGORIES = ["All", "Web", "Mobile App", "AI Tools"] as const;
type Category = (typeof CATEGORIES)[number];

type Props = {
  products: Product[];
  /** Render the skeleton grid instead of the list (for future async loading). */
  isLoading?: boolean;
};

export default function ProductsClient({ products, isLoading = false }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    const list = Array.isArray(products) ? products : []; // tolerate bad props
    if (activeCategory === "All") return list;
    return list.filter((p) => p?.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <>
      {/* Filter bar */}
      <section aria-label="Product filters" className="mt-12">
        <div className="relative z-20 overflow-x-auto scrollbar-none [touch-action:pan-x] [-webkit-overflow-scrolling:touch]">
          <div className="flex w-max gap-3 pb-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  disabled={isLoading}
                  className={`shrink-0 cursor-pointer touch-manipulation select-none whitespace-nowrap rounded-full border px-6 py-3 font-space text-sm transition-colors duration-300 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-50 ${
                    isActive
                      ? "border-purple-300 bg-purple-300 text-black"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-purple-300 hover:text-purple-200 active:border-purple-300 active:bg-purple-300/20 active:text-purple-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section aria-labelledby="product-list-heading" className="mt-12">
        <h2 id="product-list-heading" className="sr-only">
          Product list
        </h2>

        {isLoading ? (
          <ProductGridSkeleton count={6} />
        ) : filteredProducts.length > 0 ? (
          <>
            <p aria-live="polite" className="sr-only">
              {`Showing ${filteredProducts.length} ${
                filteredProducts.length === 1 ? "product" : "products"
              }`}
            </p>
            <div className={PRODUCT_GRID_CLASS}>
              {filteredProducts.map((product, i) => (
                <ProductCard
                  key={product?.slug ?? `product-${i}`}
                  product={product}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState category={activeCategory} />
        )}
      </section>
    </>
  );
}

function EmptyState({ category }: { category: string }) {
  const isAll = category === "All";
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-[32px] border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-md">
      <p className="font-space text-lg text-white">
        {isAll ? "No products yet" : "Nothing here yet"}
      </p>
      <p className="font-space text-sm text-white/50">
        {isAll
          ? "Check back soon."
          : `No products in “${category}” right now — try another category.`}
      </p>
    </div>
  );
}