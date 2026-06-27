import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBlobBg from "@/components/AnimatedBlobBg";
import HomeHeroMotion from "@/components/HomeHeroMotion";

export const metadata: Metadata = {
  title: "PurplePie | Product-Based App, Web & AI Tool Company",

  description:
    "PurplePie builds AI tools, SaaS products, web applications, and mobile apps focused on solving real-world problems through feedback-driven product development.",

  keywords: [
    "AI tools",
    "SaaS development",
    "web applications",
    "mobile apps",
    "product development",
    "startup studio",
    "software company",
  ],

  alternates: {
    canonical: "https://purplepie.in",
  },

  openGraph: {
    title: "PurplePie | Product-Based App, Web & AI Tool Company",
    description:
      "Building apps, SaaS platforms, and AI products people actually use.",
    url: "https://purplepie.in",
    siteName: "PurplePie",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PurplePie | Product-Based App, Web & AI Tool Company",
    description:
      "Building apps, SaaS platforms, and AI products people actually use.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const policyItems = [
  {
    label: "Privacy Policy",
    href: "/policies/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/policies/terms-and-conditions",
  },
  {
    label: "Refund Policy",
    href: "/policies/refund-policy",
  },
];

export default function HomePage() {
  return (
    <>
      <main
        id="main-content"
        className="relative min-h-screen overflow-hidden"
      >
        <AnimatedBlobBg />

        <header className="relative z-20 w-full px-5 py-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link
              href="/"
              aria-label="PurplePie Home"
              className="font-space text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
            >
              PurplePie
            </Link>

            <aside
              aria-label="Company tagline"
              className="w-full overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md lg:max-w-4xl"
            >
              <p className="marquee whitespace-nowrap py-3 font-space text-xs text-white/70 sm:text-sm">
                <span>
                  We launch apps, web platforms, and AI tools, gather
                  feedback from real users, and continuously improve until
                  we find product-market fit.
                </span>

                <span
                  className="ml-16"
                  aria-hidden="true"
                >
                  We launch apps, web platforms, and AI tools, gather
                  feedback from real users, and continuously improve until
                  we find product-market fit.
                </span>
              </p>
            </aside>
          </div>
        </header>

        <section
          aria-labelledby="hero-heading"
          className="relative z-10 flex min-h-[calc(100vh-180px)] items-center px-5 py-12 sm:px-8 md:px-12 lg:px-16"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <article className="max-w-3xl space-y-8">
              {/* <h1
                id="hero-heading"
                className="font-space text-5xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              >
                Build Products People Actually Need
              </h1> */}
 <HomeHeroMotion />
              <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                PurplePie is a product-focused company building web
                applications, mobile apps, and AI-powered tools that solve
                real-world problems through rapid iteration, customer
                feedback, and product-market fit validation.
              </p>

             
            </article>

            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap gap-4 lg:flex-col lg:items-start lg:gap-8"
            >
              {navItems.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="
      font-space
      text-base
      font-bold
      sm:font-medium
      text-white/80
      transition-colors
      duration-300
      hover:text-white
      hover:font-bold
    "
  >
    {item.label}
  </Link>
))}
            </nav>
          </div>
        </section>

{/* <div className="grid h-[650px] gap-4 md:grid-cols-3">
  <div className="col-span-2 row-span-2 rounded-[40px] border border-white/10 p-10">
    <p className="text-purple-400">01</p>

    <h3 className="mt-6 text-5xl font-bold text-white">
      Product
      <br />
      Innovation Lab
    </h3>

    <p className="mt-6 max-w-xl text-white/60">
      We launch products, gather feedback,
      iterate relentlessly and discover
      what people actually need.
    </p>
  </div>

  <div className="rounded-[40px] border border-white/10 p-8">
    <h3>AI Tools</h3>
  </div>

  <div className="rounded-[40px] border border-white/10 p-8">
    <h3>SaaS Platforms</h3>
  </div>

  <div className="rounded-[40px] border border-white/10 p-8">
    <h3>Web Apps</h3>
  </div>

  <div className="rounded-[40px] border border-white/10 p-8">
    <h3>Mobile Apps</h3>
  </div>
</div> */}

        <footer className="relative z-20 border-t border-white/10 px-5 py-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/50">
              © 2026 PurplePie. All rights reserved.
            </p>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap gap-4"
            >
              {policyItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/60 transition-colors hover:text-white focus:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}