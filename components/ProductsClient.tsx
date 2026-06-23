"use client";

import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

const categories = [
  "All",
  "Web",
  "Mobile App",
  "AI Tools",
] as const;

type Props = {
  products: Product[];
};

export default function ProductsClient({
  products,
}: Props) {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === activeCategory
    );
  }, [activeCategory, products]);

  return (
    <>
      <section
        aria-label="Product Filters"
        className="mt-12"
      >
        <div className="relative z-20 overflow-x-auto scrollbar-none [touch-action:pan-x] [-webkit-overflow-scrolling:touch]">
          <div className="flex w-max gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                    console.log("tapped: " + category);
                    setActiveCategory(category)}}
                aria-pressed={activeCategory === category}
                className={`shrink-0 cursor-pointer touch-manipulation select-none whitespace-nowrap rounded-full border px-6 py-3 font-space text-sm transition-colors duration-300 ${
                  activeCategory === category
                    ? "border-purple-300 bg-purple-300 text-black"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-purple-300 hover:text-purple-200 active:border-purple-300 active:bg-purple-300/20 active:text-purple-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-list-heading"
        className="mt-12"
      >
        <h2
          id="product-list-heading"
          className="sr-only"
        >
          Product List
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
}