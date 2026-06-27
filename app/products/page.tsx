import type { Metadata } from "next";
import Link from "next/link";

import ProductsClient from "@/components/ProductsClient";
import CatAnimation from "@/components/CatAnimation";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | PurplePie",
  description:
    "Explore PurplePie products including web applications, mobile apps, AI tools, productivity software and digital platforms.",
  keywords: [
    "PurplePie",
    "Web Apps",
    "Mobile Apps",
    "AI Tools",
    "Software Products",
    "Digital Products",
  ],
  alternates: {
    canonical: "https://purplepie.in/products",
  },
  openGraph: {
    title: "Products | PurplePie",
    description:
      "Explore web apps, mobile apps and AI tools built by PurplePie.",
    url: "https://purplepie.in/products",
    siteName: "PurplePie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | PurplePie",
    description:
      "Explore web apps, mobile apps and AI tools built by PurplePie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "SoftwareApplication",
      position: index + 1,
      name: product.title,
      description: product.shortDescription,
      url: `https://purplepie.in/products/${product.slug}`,
      applicationCategory: product.category,
    })),
  };

  return (
    <main className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-16">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            aria-label="PurplePie Home"
            className="font-space text-3xl font-semibold"
          >
            PurplePie
          </Link>
          <Link
            href="/"
            className="self-start rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            ← Back Home
          </Link>
        </header>

        <section
          aria-labelledby="products-heading"
          className="mt-5 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        >
          {/* Left: text + description */}
          <div className="w-full max-w-2xl text-center lg:text-left">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm sm:tracking-[0.35em]">
              Products
            </p>

            <h1
              id="products-heading"
              className="font-space text-2xl leading-tight sm:text-3xl md:text-4xl xl:text-5xl"
            >
              Explore our growing collection of{" "}
              <span className="text-purple-300">digital products</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-space text-base leading-7 text-white/60 sm:text-lg sm:leading-8 lg:mx-0">
              Discover web tools, mobile applications, AI-powered utilities, and
              software products built by PurplePie to solve real user problems.
            </p>
          </div>

          {/* Right: animation */}
          <div className="w-full max-w-[300px] shrink-0 sm:max-w-[280px] lg:max-w-[380px] xl:max-w-[450px] mx-auto">
            <CatAnimation />
          </div>
        </section>

        <ProductsClient products={products} />
      </div>
    </main>
  );
}
