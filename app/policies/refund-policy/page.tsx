import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-white md:px-16">
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
        <div className="mb-16">
          <p className="mb-4 font-space text-sm uppercase tracking-[0.35em] text-purple-300">
            Legal
          </p>

          <h1 className="font-space text-5xl leading-tight md:text-7xl">
            Refund <span className="text-purple-300">Policy</span>
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 font-space text-3xl">
              Overview
            </h2>

            <p className="leading-8 text-white/70">
              At PurplePie, we strive to provide high-quality digital products,
              applications, and services. This Refund Policy explains when
              refunds may be available and the conditions under which they are
              granted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Digital Products
            </h2>

            <p className="leading-8 text-white/70">
              Due to the nature of digital products, downloads, subscriptions,
              and software services, all purchases are generally considered
              final once access has been granted.
            </p>

            <p className="mt-4 leading-8 text-white/70">
              Refunds may be considered on a case-by-case basis when a product
              cannot be accessed, contains a critical defect, or was purchased
              accidentally and has not been used.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Subscription Services
            </h2>

            <p className="leading-8 text-white/70">
              Subscription plans may be canceled at any time. Cancellation
              prevents future billing but does not automatically entitle the
              customer to a refund for previous payments.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Non-Refundable Situations
            </h2>

            <ul className="space-y-3 text-white/70">
              <li>• Change of mind after purchase</li>
              <li>• Failure to use the product or service</li>
              <li>• User error or misunderstanding of features</li>
              <li>• Temporary service interruptions or maintenance periods</li>
              <li>• Violation of our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Refund Requests
            </h2>

            <p className="leading-8 text-white/70">
              Refund requests must be submitted within 14 days of purchase and
              should include your purchase information, payment receipt, and a
              detailed explanation of the issue.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Processing Time
            </h2>

            <p className="leading-8 text-white/70">
              Approved refunds are typically processed within 5–10 business
              days. Processing times may vary depending on your payment
              provider or financial institution.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-space text-3xl">
              Changes to This Policy
            </h2>

            <p className="leading-8 text-white/70">
              PurplePie reserves the right to modify this Refund Policy at any
              time. Updates will be published on this page with a revised
              effective date.
            </p>
          </section>

          <section className="rounded-[32px] border border-purple-300/20 bg-purple-300/10 p-8">
            <h2 className="mb-4 font-space text-3xl">
              Contact Us
            </h2>

            <p className="text-white/70">
              For refund requests or billing-related questions, please contact
              us.
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