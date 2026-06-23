import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-white md:px-16">
   
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        
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
        <div className="mb-16">
          <p className="mb-4 font-space text-sm uppercase tracking-[0.35em] text-purple-300">
            Legal
          </p>

          <h1 className="font-space text-5xl leading-tight md:text-7xl">
            Terms &{" "}
            <span className="text-purple-300">
              Conditions
            </span>
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Agreement to Terms
            </h2>

            <p className="leading-8 text-white/70">
              Welcome to PurplePie. These Terms & Conditions govern your access
              to and use of PurplePie websites, applications, products, and
              services. By accessing or using our services, you agree to be
              bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Use of Services
            </h2>

            <p className="leading-8 text-white/70">
              You may use PurplePie products only for lawful purposes and in
              accordance with these Terms. You agree not to misuse, disrupt,
              reverse engineer, or attempt unauthorized access to any service,
              system, or data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              User Accounts
            </h2>

            <p className="leading-8 text-white/70">
              Some PurplePie products may require account registration. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Intellectual Property
            </h2>

            <p className="leading-8 text-white/70">
              All content, trademarks, branding, software, designs, logos,
              source code, graphics, and materials provided by PurplePie remain
              the exclusive property of PurplePie and its licensors unless
              otherwise stated.
            </p>

            <p className="mt-4 leading-8 text-white/70">
              You may not copy, reproduce, distribute, modify, sell, or exploit
              any portion of our services without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              User Content
            </h2>

            <p className="leading-8 text-white/70">
              You retain ownership of content you upload, submit, or create
              using PurplePie services. By submitting content, you grant us a
              limited license to process and display such content solely for the
              purpose of providing the requested service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Payments & Subscriptions
            </h2>

            <p className="leading-8 text-white/70">
              Certain products or services may require payment. Pricing,
              subscription terms, billing cycles, and available features may
              vary by product and are subject to change at any time.
            </p>

            <p className="mt-4 leading-8 text-white/70">
              Refunds are governed by our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Prohibited Activities
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Violating applicable laws or regulations</li>
              <li>• Distributing malware or harmful software</li>
              <li>• Attempting unauthorized access to systems</li>
              <li>• Scraping, abusing, or overloading services</li>
              <li>• Using services for fraudulent purposes</li>
              <li>• Infringing intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Service Availability
            </h2>

            <p className="leading-8 text-white/70">
              We strive to provide reliable services but do not guarantee
              uninterrupted availability. Services may be modified, suspended,
              or discontinued at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Disclaimer of Warranties
            </h2>

            <p className="leading-8 text-white/70">
              PurplePie services are provided on an "as is" and "as available"
              basis. We make no warranties regarding accuracy, reliability,
              availability, or fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Limitation of Liability
            </h2>

            <p className="leading-8 text-white/70">
              To the fullest extent permitted by law, PurplePie shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Termination
            </h2>

            <p className="leading-8 text-white/70">
              We reserve the right to suspend or terminate access to our
              services at any time if we believe a user has violated these Terms
              or engaged in harmful activity.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Changes to Terms
            </h2>

            <p className="leading-8 text-white/70">
              PurplePie may update these Terms & Conditions periodically. Any
              updates will be posted on this page along with the revised
              effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl text-white">
              Governing Law
            </h2>

            <p className="leading-8 text-white/70">
              These Terms shall be governed and interpreted in accordance with
              the laws applicable in your jurisdiction, without regard to
              conflict of law principles.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-[32px] border border-purple-300/20 bg-purple-300/10 p-8">
            <h2 className="mb-4 font-space text-3xl text-white">
              Contact Us
            </h2>

            <p className="text-white/70">
              If you have questions regarding these Terms & Conditions, please
              contact us.
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