import type { Metadata } from "next";
import Link from "next/link";

import ProductsClient from "@/components/ProductsClient";
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
    })),
  };

  return (
    <main className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
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

        <section aria-labelledby="products-heading" className="mt-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
            Products
          </p>

          <h1
            id="products-heading"
            className="max-w-5xl font-space text-5xl leading-tight md:text-7xl"
          >
            Explore our growing collection of{" "}
            <span className="text-purple-300">digital products</span>
          </h1>

          <p className="mt-6 max-w-3xl font-space text-lg leading-8 text-white/60">
            Discover web tools, mobile applications, AI-powered utilities, and
            software products built by PurplePie to solve real user problems.
          </p>
        </section>

        <ProductsClient products={products} />
      </div>
    </main>
  );
}