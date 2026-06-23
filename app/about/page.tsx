import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PurplePie | Product-Based App, Web & AI Tool Company",
  description:
    "Learn about PurplePie, a product-focused company building web applications, mobile apps, AI tools, and SaaS products that solve real-world problems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About PurplePie | Product-Based App, Web & AI Tool Company",
    description:
      "PurplePie builds useful digital products through experimentation, real user feedback, and continuous improvement.",
    url: "/about",
    siteName: "PurplePie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PurplePie",
    description:
      "A product-focused company building apps, web platforms, and AI tools.",
  },
};

const productTypes = [
  "Mobile Applications",
  "Web Platforms",
  "AI Products",
  "SaaS Tools",
  "Creator Tools",
  "Business Utilities",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-16">
      <article className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-space text-sm text-white/70 transition-all hover:border-purple-300/50 hover:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          ← Back Home
        </Link>

        <header className="mt-16">
          <p className="mb-6 font-space text-sm uppercase tracking-[0.3em] text-white/60">
            About PurplePie
          </p>

          <h1 className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text font-space text-[15vw] leading-[0.9] tracking-[-0.08em] text-transparent md:text-[8rem] xl:text-[10rem]">
            Building
            <br />
            Digital
            <br />
            Products
          </h1>

          <p className="mt-10 max-w-2xl font-space text-lg leading-8 text-white/70">
            PurplePie is a product-focused company creating useful web
            applications, mobile apps, and AI-powered tools that solve
            real-world problems.
          </p>
        </header>

        <div className="my-24 h-px w-full bg-white/10" />

        <section
          aria-labelledby="about-story"
          className="grid gap-16 lg:grid-cols-2"
        >
          <div>
            <h2 id="about-story" className="font-space text-4xl text-purple-300">
              Why We Exist
            </h2>

            <p className="mt-6 font-space leading-8 text-white/70">
              Many products are built around assumptions instead of real user
              needs. PurplePie exists to build differently.
            </p>

            <p className="mt-6 font-space leading-8 text-white/70">
              We launch early, gather feedback from real users, learn from
              behavior, and continuously improve until each product creates
              meaningful value.
            </p>
          </div>

          <section aria-labelledby="what-we-build">
            <h2
              id="what-we-build"
              className="font-space text-4xl text-purple-300"
            >
              What We Build
            </h2>

            <ul className="mt-8 grid gap-4">
              {productTypes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <span className="font-space text-white">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <div className="my-24 h-px w-full bg-white/10" />

        <section aria-labelledby="mission" className="max-w-4xl">
          <h2 id="mission" className="font-space text-5xl text-purple-300">
            Our Mission
          </h2>

          <p className="mt-8 font-space text-xl leading-9 text-white/70">
            To build products that solve meaningful problems, improve everyday
            digital experiences, and create lasting value for people around the
            world.
          </p>
        </section>

        <div className="my-24 h-px w-full bg-white/10" />

        <section aria-labelledby="belief">
          <h2 id="belief" className="sr-only">
            Our Product Belief
          </h2>

          <blockquote className="max-w-5xl font-space text-3xl leading-tight tracking-[-0.04em] text-white md:text-5xl">
            “Great products aren&apos;t built from{" "}
            <span className="text-purple-300">assumptions</span>. They&apos;re
            built through{" "}
            <span className="text-purple-300">experimentation</span>,{" "}
            <span className="text-purple-300">feedback</span>, and{" "}
            <span className="text-purple-300">continuous improvement</span>.”
          </blockquote>
        </section>
      </article>
    </main>
  );
}