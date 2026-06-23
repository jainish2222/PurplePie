import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen  px-6 py-12 text-white md:px-16">
      <div className="mx-auto max-w-4xl">
             <div className="mb-12 ">
  <Link
    href="/"
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      px-5
      py-2.5
      font-space
      text-sm
      text-white/70
      backdrop-blur-md
      transition-all
      hover:border-purple-300/40
      hover:text-purple-200
    "
  >
    ← Back Home
  </Link>
</div>
        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 font-space text-sm uppercase tracking-[0.35em] text-purple-300">
            Legal
          </p>

          <h1 className="font-space text-5xl leading-tight md:text-7xl">
            Privacy <span className="text-purple-300">Policy</span>
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Introduction
            </h2>

            <p className="leading-8 text-white/70">
              Welcome to PurplePie. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, store, and protect information when you use
              our websites, applications, products, and services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Information We Collect
            </h2>

            <div className="space-y-6 text-white/70">
              <div>
                <h3 className="mb-2 text-lg text-purple-300">
                  Information You Provide
                </h3>

                <ul className="space-y-2">
                  <li>• Name</li>
                  <li>• Email Address</li>
                  <li>• Contact Information</li>
                  <li>• Feedback and Support Requests</li>
                  <li>• Account Information</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg text-purple-300">
                  Information Collected Automatically
                </h3>

                <ul className="space-y-2">
                  <li>• Device Information</li>
                  <li>• Browser Information</li>
                  <li>• Operating System</li>
                  <li>• IP Address</li>
                  <li>• Usage Analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              How We Use Information
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Provide and maintain our products and services</li>
              <li>• Improve functionality and user experience</li>
              <li>• Respond to support requests</li>
              <li>• Monitor security and performance</li>
              <li>• Prevent fraud and abuse</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Cookies & Analytics
            </h2>

            <p className="leading-8 text-white/70">
              PurplePie may use cookies, analytics services, and similar
              technologies to understand usage patterns, improve performance,
              and provide a better experience across our products.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Third-Party Services
            </h2>

            <p className="leading-8 text-white/70">
              Some PurplePie products may integrate with third-party services
              such as analytics providers, cloud infrastructure platforms,
              authentication services, payment processors, and advertising
              networks. These services operate under their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Data Security
            </h2>

            <p className="leading-8 text-white/70">
              We implement reasonable technical and organizational safeguards to
              protect your information. While we strive to secure all data, no
              method of storage or transmission can be guaranteed to be 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Data Retention
            </h2>

            <p className="leading-8 text-white/70">
              We retain information only as long as necessary to provide our
              services, comply with legal obligations, resolve disputes, and
              enforce agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Children's Privacy
            </h2>

            <p className="leading-8 text-white/70">
              PurplePie services are not intended for children under 13 years of
              age. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Your Rights
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Access your information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of personal data</li>
              <li>• Restrict processing where applicable</li>
              <li>• Request data portability</li>
              <li>• Withdraw consent when applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Changes to This Policy
            </h2>

            <p className="leading-8 text-white/70">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page along with a revised effective date.
            </p>
          </section>

          <section className="rounded-[32px] border border-purple-300/20 bg-purple-300/10 p-8">
            <h2 className="mb-4 font-space text-3xl text-white">
              Contact Us
            </h2>

            <p className="text-white/70">
              If you have questions about this Privacy Policy or any PurplePie
              product, please contact us.
            </p>

            <div className="mt-6 space-y-2 text-white/80">
              <p>
                Email:{" "}
                <span className="text-purple-300">
                  hello@purplepie.io
                </span>
              </p>

              <p>
                Website:{" "}
                <span className="text-purple-300">
                  www.purplepie.in
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}