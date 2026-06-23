import Link from "next/link";
import { notFound } from "next/navigation";
import { products, statusStyles } from "@/data/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen px-6 py-10 text-white md:px-16">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/products"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/70 transition-all hover:text-purple-200"
        >
          ← Back to Products
        </Link>

        <div className="mt-20">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-purple-300/10 px-4 py-2 text-sm text-purple-200">
              {product.category}
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${
                statusStyles[product.status as keyof typeof statusStyles]
              }`}
            >
              {product.status}
            </span>
          </div>

          <h1 className="max-w-5xl font-space text-5xl leading-tight md:text-7xl">
            {product.title}
          </h1>

          <p className="mt-6 max-w-4xl font-space text-2xl leading-9 text-purple-200">
            {product.headline}
          </p>

          <p className="mt-6 max-w-3xl font-space text-lg leading-8 text-white/60">
            {product.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {product.links.website && (
              <a
                href={product.links.website}
                target="_blank"
                className="rounded-full bg-white px-6 py-3 text-purple-600"
              >
                Visit Website
              </a>
            )}

            {product.links.playStore && (
              <a
                href={product.links.playStore}
                target="_blank"
                className="rounded-full border border-white/10 px-6 py-3"
              >
                Google Play
              </a>
            )}

            {product.links.appStore && (
              <a
                href={product.links.appStore}
                target="_blank"
                className="rounded-full border border-white/10 px-6 py-3"
              >
                App Store
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="font-space text-3xl text-purple-300">
              Key Features
            </h2>

            <div className="mt-8 grid gap-4">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-purple-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="font-space text-3xl text-purple-300">Use Cases</h2>

            <div className="mt-8 grid gap-4">
              {product.useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/70"
                >
                  {useCase}
                </div>
              ))}
            </div>
          </div>
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
