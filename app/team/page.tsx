"use client";

import Link from "next/link";
import TeamGrid from "../../components/TeamGrid";
// import AnimatedBlobBg from "../../components/AnimatedBlobBg";

export default function TeamPage() {
//   const stats = [
//     { value: "12+", label: "Team Members" },
//     { value: "15+", label: "Products Built" },
//     { value: "50+", label: "Clients Served" },
//     { value: "5+", label: "Years Experience" },
//   ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* <AnimatedBlobBg /> */}

      <main className="relative z-10 px-6 py-8 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-space text-sm text-white/70 transition-all hover:border-purple-300/50 hover:text-purple-200"
          >
            ← Back Home
          </Link>

          {/* Hero */}
          <section className="mt-16">
            <p className="mb-4 font-space text-sm uppercase tracking-[0.35em] text-white/60">
              Meet The Team
            </p>

            <h1 className="font-space text-[15vw] leading-[0.9] tracking-[-0.08em] md:text-[8rem] xl:text-[10rem]">
              <span className="text-purple-200">The</span>
              <br />
              <span className="text-purple-300">People</span>
              <br />
              <span className="text-purple-400">Behind</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                PurplePie
              </span>
            </h1>

            <p className="mt-8 max-w-3xl font-space text-lg leading-8 text-white/70">
              PurplePie is powered by builders, engineers, designers, and growth
              specialists focused on creating products that solve real problems,
              deliver meaningful value, and continuously evolve through user
              feedback.
            </p>
          </section>

          {/* Team Stats */}
          {/* <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/[0.08]"
              >
                <h3 className="font-space text-4xl font-bold text-purple-300">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </section> */}

          {/* Divider */}
          <div className="my-24 h-px w-full bg-white/10" />

          {/* Team Title */}
          <section className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-space text-sm uppercase tracking-[0.35em] text-white/50">
                Our People
              </p>

              <h2 className="font-space text-4xl leading-tight text-white md:text-6xl">
                Meet the minds
                <br />
                <span className="text-purple-400">
                  building PurplePie
                </span>
              </h2>
            </div>

            <p className="max-w-xl font-space text-base leading-7 text-white/60">
  A passionate team combining{" "}
  <span className="font-medium text-purple-200">
    product thinking
  </span>
  ,{" "}
  <span className="font-medium text-purple-300">
    clean engineering
  </span>
  ,{" "}
  <span className="font-medium text-purple-400">
    creative design
  </span>
  , and{" "}
  <span className="font-medium text-purple-500">
    growth execution
  </span>{" "}
  to build useful digital products.
</p>
          </section>

          {/* Team Members */}
          <TeamGrid />

           <div className="my-24 h-px w-full bg-white/10" />

            {/* Quote Section */}
        <section className="mt-24">
  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md md:p-16">
    <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-purple-500/15 blur-3xl" />
    <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

    <p className="mb-4 font-space text-sm uppercase tracking-[0.35em] text-purple-300">
      Careers at PurplePie
    </p>

    <h2 className="max-w-5xl font-space text-4xl leading-tight text-white md:text-6xl">
      Join a team focused on
      <span className="text-purple-300"> building products</span>
      <br />
      that create lasting value.
    </h2>

    <p className="mt-8 max-w-3xl font-space text-lg leading-8 text-white/70">
      PurplePie is a product-driven company where designers, engineers,
      and product thinkers collaborate to transform ideas into meaningful
      digital experiences. We value craftsmanship, ownership, continuous
      learning, and long-term thinking.
    </p>

    <div className="mt-10 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-purple-200">
        Product First
      </span>

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-purple-300">
        Ownership & Accountability
      </span>

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-purple-400">
        Continuous Learning
      </span>

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-purple-500">
        High Quality Execution
      </span>
    </div>

    <div className="mt-12 flex flex-wrap items-center gap-4">
      <Link
  href="/contact"
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-white/90
    px-8
    py-4
    font-space
    text-purple-900
    transition-all
    duration-300
    hover:bg-purple-400
    hover:text-white
    hover:shadow-lg
    hover:shadow-purple-500/20
  "
>
  Explore Opportunities
</Link>

      <p className="text-sm text-white/50">
        We're always interested in meeting exceptional talent.
      </p>
    </div>
  </div>
</section>
        </div>
      </main>
    </div>
  );
}