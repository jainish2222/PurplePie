import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products, statusStyles } from "@/data/products";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

type Params = { slug: string };

/* ------------------------------------------------------------------ */
/*  SEO: per-product metadata + static generation                     */
/* ------------------------------------------------------------------ */

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product not found | PurplePie" };
  }
 
  const url = `https://purplepie.in/products/${product.slug}`;
  const description =
    product.headline ?? product.shortDescription ?? product.description;

  return {
    title: `${product.title} | PurplePie`,
    description,
    keywords: ["PurplePie", product.title, product.category],
    alternates: { canonical: url },
    openGraph: {
      title: `${product.title} | PurplePie`,
      description,
      url,
      siteName: "PurplePie",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | PurplePie`,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  const statusStyle =
    statusStyles[product.status as keyof typeof statusStyles] ??
    "border-white/20 bg-white/10 text-white/70";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    applicationCategory: product.category,
    url: `https://purplepie.in/products/${product.slug}`,
    ...(product.links.website && { downloadUrl: product.links.website }),
  };
 const RAINBOW = [
    "border-red-400/30 hover:border-red-400/60 hover:bg-red-500/[0.08]",
    "border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-500/[0.08]",
    "border-yellow-400/30 hover:border-yellow-400/60 hover:bg-yellow-500/[0.08]",
    "border-emerald-400/30 hover:border-emerald-400/60 hover:bg-emerald-500/[0.08]",
    "border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-500/[0.08]",
    "border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/[0.08]",
    "border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/[0.08]",
    "border-fuchsia-400/30 hover:border-fuchsia-400/60 hover:bg-fuchsia-500/[0.08]",
  ] as const;
  return (
    <main className="relative min-h-screen text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-16">
        {/* Back link — slides in from left */}
        <Reveal variant="right" duration={500}>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/70 backdrop-blur-md transition-colors hover:border-purple-300/40 hover:text-purple-200"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Products
          </Link>
        </Reveal>

        {/* Hero — staggered cascade via fade-up keyframe */}
        <div className="mt-16 lg:mt-20">
          <div className="mb-5 flex flex-wrap items-center gap-3 animate-[fade-up_0.6s_ease-out_both] motion-reduce:animate-none">
            <span className="rounded-full bg-purple-300/10 px-4 py-2 text-sm text-purple-200">
              {product.category}
            </span>
            <span
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${statusStyle}`}
            >
              {product.status}
            </span>
          </div>

          <h1 className="max-w-5xl font-space text-4xl leading-tight animate-[fade-up_0.7s_ease-out_both] motion-reduce:animate-none sm:text-5xl md:text-7xl [animation-delay:100ms]">
            {product.title}
          </h1>

          {product.headline && (
            <p className="mt-6 max-w-4xl font-space text-xl leading-9 text-purple-200 animate-[fade-up_0.7s_ease-out_both] motion-reduce:animate-none sm:text-2xl [animation-delay:180ms]">
              {product.headline}
            </p>
          )}

          <p className="mt-6 max-w-3xl font-space text-base leading-8 text-white/60 animate-[fade-up_0.7s_ease-out_both] motion-reduce:animate-none sm:text-lg [animation-delay:260ms]">
            {product.description}
          </p>
          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-up_0.7s_ease-out_both] motion-reduce:animate-none [animation-delay:340ms]">
            {product.links.website && (
              <Link
                href={product.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 font-medium text-purple-600 transition-all duration-300 hover:scale-105 hover:bg-purple-300 hover:text-purple-900 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] motion-reduce:hover:scale-100"
              >
                Visit Website
              </Link>
            )}
            {product.links.playStore && (
              <Link
                href={product.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 transition-colors duration-300 hover:border-purple-300/50 hover:text-purple-200"
              >
                Google Play
              </Link>
            )}
            {product.links.appStore && (
              <Link
                href={product.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 transition-colors duration-300 hover:border-purple-300/50 hover:text-purple-200"
              >
                App Store
              </Link>
            )}
          </div>

          {/* Quick stats — count up on view */}
          {/* <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-4 animate-[fade-up_0.7s_ease-out_both] motion-reduce:animate-none [animation-delay:420ms]">
            <div className="flex flex-col">
              <dd className="font-space text-3xl font-semibold text-white">
                <CountUp to={product.features.length} />
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-widest text-white/40">
                Features
              </dt>
            </div>
            <div className="flex flex-col">
              <dd className="font-space text-3xl font-semibold text-white">
                <CountUp to={product.useCases.length} />
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-widest text-white/40">
                Use cases
              </dt>
            </div>
          </dl> */}
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
              <h2 className="font-space text-3xl text-purple-300">
                Key Features
              </h2>
              <div className="mt-8 grid gap-4">
                {product.features.map((feature, i) => (
                  <div
                    key={feature}
                    className={`rounded-2xl border bg-white/[0.03] p-5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
                      RAINBOW[i % RAINBOW.length]
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="h-full rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
              <h2 className="font-space text-3xl text-purple-300">Use Cases</h2>
              <div className="mt-8 grid gap-4">
                {product.useCases.map((useCase, i) => (
                  <div
                    key={useCase}
                    // offset by 4 so this column starts on a different hue than Features
                    className={`rounded-2xl border bg-white/[0.03] p-5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
                      RAINBOW[(i + 4) % RAINBOW.length]
                    }`}
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        
        
<div className="mt-16 rounded-[32px] border border-purple-300/20 bg-purple-300/10 p-8">
          <h2 className="font-space text-3xl text-purple-300">
            Interested in this product?
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            Connect with PurplePie to learn more about this product,
            partnership, early access, or future launch updates.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-space text-purple-600 transition-all hover:bg-purple-400 hover:text-white"
          >
            Contact PurplePie
          </Link>
        </div>
      </section>

    </main>
  );
}
