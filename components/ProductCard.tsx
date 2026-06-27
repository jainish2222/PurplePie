import Link from "next/link";

import type { Product } from "@/data/products";
import TypewriterText from "./TypewriterText";

/* -------------------------------------------------------------------------- */
/*  Shared layout                                                             */
/* -------------------------------------------------------------------------- */

/** Single source of truth so skeletons, cards, empty and error states align. */
export const PRODUCT_GRID_CLASS = "grid gap-6 md:grid-cols-2 xl:grid-cols-3";

/* -------------------------------------------------------------------------- */
/*  Status styles                                                             */
/* -------------------------------------------------------------------------- */

const STATUS_STYLES = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Developing: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  Planned: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  Concept: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
} as const;

// Used when `status` is missing or doesn't match a known key (e.g. bad CMS data).
const FALLBACK_STATUS_STYLE = "border-white/20 bg-white/10 text-white/70";

type Props = {
  product: Product;
};

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

export default function ProductCard({ product }: Props) {
  // Never crash a whole grid because one product is null/undefined.
  if (!product) return null;

  const {
    slug,
    title = "Untitled product",
    category,
    status,
    shortDescription,
  } = product;

  const statusStyle =
    (status && STATUS_STYLES[status as keyof typeof STATUS_STYLES]) ||
    FALLBACK_STATUS_STYLE;

  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-[32px]
        border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md
        transform-gpu
        transition-[transform,border-color,background-color,box-shadow]
        duration-300 ease-out
        hover:-translate-y-1 hover:border-purple-300/50 hover:bg-purple-500/[0.06]
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
        focus-within:-translate-y-1 focus-within:border-purple-300/50 focus-within:bg-purple-500/[0.06]
        motion-reduce:transition-none
      "
    >
      {/* Soft purple sheen that fades in on hover/focus (purely decorative). */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 opacity-0
          bg-[radial-gradient(120%_120%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]
          transition-opacity duration-300
          group-hover:opacity-100 group-focus-within:opacity-100
          motion-reduce:transition-none
        "
      />

      <Link
        href={slug ? `/products/${encodeURIComponent(slug)}` : "#"}
        aria-label={`View ${title}`}
        className="
          relative flex h-full flex-col rounded-[32px] outline-none
          focus-visible:ring-2 focus-visible:ring-purple-300/70
        "
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          {category ? (
            <span className="rounded-full bg-purple-300/10 px-4 py-2 text-sm text-purple-200">
              {category}
            </span>
          ) : (
            // Keeps the status pill right-aligned even with no category.
            <span aria-hidden />
          )}

          {status ? (
            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs uppercase tracking-widest ${statusStyle}`}
            >
              {status}
            </span>
          ) : null}
        </div>

        <h3 className="font-space text-3xl text-white transition-colors duration-300 group-hover:text-purple-200 group-focus-within:text-purple-200">
          <TypewriterText text={title} />
        </h3>

        <p className="mt-4 line-clamp-3 flex-grow font-space text-base leading-7 text-white/60">
          {shortDescription ?? ""}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-purple-300">
          <span
            className="
              relative
              after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
              after:bg-purple-300 after:transition-[width] after:duration-300
              group-hover:after:w-full group-focus-within:after:w-full
            "
          >
            View Product
          </span>

          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
/* -------------------------------------------------------------------------- */
/*  Skeleton                                                                  */
/* -------------------------------------------------------------------------- */

// Colorful tag tints, cycled by index so the grid looks varied but stays
// deterministic — Math.random() here would cause SSR/hydration mismatch.
const SKELETON_TAG_COLORS = [
  "bg-emerald-400/25", // green
  "bg-blue-400/25", // blue
  "bg-yellow-400/25", // yellow
  "bg-purple-400/25", // purple
] as const;

/**
 * A single shimmer block. `color` is the one and only background class
 * (defaults to neutral gray for text placeholders; pass a colored bg for tags).
 * Always pulses, sweeps a highlight if the `shimmer` keyframe exists, and
 * respects prefers-reduced-motion.
 */
function SkeletonBlock({
  className = "",
  color = "bg-gray-400/15",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${color} animate-pulse motion-reduce:animate-none ${className}`}
    >
      <span
        aria-hidden
        className="
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          animate-[shimmer_1.6s_ease-in-out_infinite]
          motion-reduce:hidden
        "
      />
    </div>
  );
}

/**
 * Mirrors ProductCard's exact layout so swapping skeleton → real card causes
 * zero layout shift (no CLS). `index` varies the colored status tag.
 */
export function ProductCardSkeleton({ index = 0 }: { index?: number }) {
  const tagColor = SKELETON_TAG_COLORS[index % SKELETON_TAG_COLORS.length];

  return (
    <div
      aria-hidden
      className="h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
    >
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between gap-4">
          {/* category tag → purple */}
          <SkeletonBlock
            className="h-9 w-28 rounded-full"
            color="bg-purple-400/25"
          />
          {/* status tag → colorful (green / blue / yellow / purple by index) */}
          <SkeletonBlock className="h-6 w-20 rounded-full" color={tagColor} />
        </div>

        {/* title → gray */}
        <SkeletonBlock className="h-9 w-3/4 rounded-lg" />

        {/* description → gray */}
        <div className="mt-4 flex-grow space-y-2.5">
          <SkeletonBlock className="h-4 w-full rounded" />
          <SkeletonBlock className="h-4 w-full rounded" />
          <SkeletonBlock className="h-4 w-2/3 rounded" />
        </div>

        {/* "View Product" + arrow → purple accent, like the real card */}
        <div className="mt-8 flex items-center gap-2">
          <SkeletonBlock
            className="h-4 w-24 rounded"
            color="bg-purple-400/25"
          />
          <SkeletonBlock className="h-4 w-4 rounded" color="bg-purple-400/25" />
        </div>
      </div>
    </div>
  );
}

/** Renders a full skeleton grid — drop straight into a Suspense fallback. */
export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      className={PRODUCT_GRID_CLASS}
      role="status"
      aria-label="Loading products"
    >
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} index={i} />
      ))}
    </div>
  );
}
