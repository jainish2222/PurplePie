import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact PurplePie | Apps, Web Platforms & AI Tools",
  description:
    "Contact PurplePie for product feedback, partnerships, app ideas, web platform development, and AI tools.",

  alternates: {
    canonical: "https://purplepie.in/contact",
  },

  openGraph: {
    title: "Contact PurplePie",
    description:
      "Reach out to PurplePie regarding products, partnerships, AI tools, and web applications.",
    url: "https://purplepie.in/contact",
    siteName: "PurplePie",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact PurplePie",
    description:
      "Reach out to PurplePie regarding products, partnerships, AI tools, and web applications.",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PurplePie",
    description:
      "Contact PurplePie for partnerships, feedback, and product discussions.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="relative z-10 min-h-screen overflow-x-hidden px-5 py-8 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            aria-label="Back to homepage"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-space text-sm text-white/70 transition-all hover:border-purple-300/50 hover:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            ← Back Home
          </Link>

          <div className="mt-8 grid gap-12 lg:min-h-[85vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <section aria-labelledby="contact-heading">
              <p className="mb-6 font-space text-xs uppercase tracking-[0.35em] text-white/50">
                Contact PurplePie
              </p>

              <h1
                id="contact-heading"
                className="font-space text-[4.5rem] leading-[0.85] tracking-[-0.08em] text-purple-300 sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem]"
              >
                Say
                <br />
                Hello
              </h1>

              <p className="mt-8 max-w-xl font-space text-base leading-8 text-white/65 md:text-lg">
                Have an idea, feedback, partnership request, or want to follow
                our product-building journey? Reach out and let's start a real
                conversation.
              </p>
            </section>

            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}