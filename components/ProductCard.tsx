import Link from "next/link";

import type { Product } from "@/data/products";

const statusStyles = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Developing:
    "border-blue-400/30 bg-blue-400/10 text-blue-300",
  Planned:
    "border-purple-400/30 bg-purple-400/10 text-purple-300",
  Concept:
    "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
};

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  return (
<article
  className="
    group
    h-full
    rounded-[32px]
    border
    border-white/10
    bg-white/[0.04]
    p-8
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-purple-300/50
    hover:bg-purple-500/[0.06]
    hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
  "
>
  <Link
    href={`/products/${product.slug}`}
    aria-label={`View ${product.title}`}
    className="flex h-full flex-col"
  >
    <div className="mb-6 flex items-center justify-between gap-4">
      <span className="rounded-full bg-purple-300/10 px-4 py-2 text-sm text-purple-200">
        {product.category}
      </span>

      <span
        className={`rounded-full border px-3 py-1 text-xs uppercase tracking-widest ${
          statusStyles[product.status]
        }`}
      >
        {product.status}
      </span>
    </div>

    <h3 className="font-space text-3xl text-white transition-colors duration-300 group-hover:text-purple-200">
      {product.title}
    </h3>

    <p className="mt-4 line-clamp-3 flex-grow font-space text-base leading-7 text-white/60">
      {product.shortDescription}
    </p>

    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-purple-300">
      <span
        className="
          relative
          after:absolute
          after:bottom-0
          after:left-0
          after:h-[1px]
          after:w-0
          after:bg-purple-300
          after:transition-all
          after:duration-300
          group-hover:after:w-full
        "
      >
        View Product
      </span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </div>
  </Link>
</article>
  );
}