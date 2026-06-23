"use client";

const teamMembers = [
  {
    name: "Jainish K.",
    role: "Software Engineer",
    summary:
      "Leads product architecture, web development, AI integrations, and product engineering.",
  },
  {
    name: "Brijesh B.",
    role: "SEO & Ads Specialist",
    summary:
      "Focuses on SEO, paid advertising, analytics, and product growth strategies.",
  },
  {
    name: "Mohil P.",
    role: "Full Stack Developer",
    summary:
      "Builds scalable frontend and backend systems with modern web technologies.",
  },
  {
    name: "Maynak Z.",
    role: "iOS & Flutter Developer",
    summary:
      "Develops high-performance mobile applications for iOS and cross-platform devices.",
  },
  {
    name: "Harsh C.",
    role: "Full Stack E-Commerce Developer",
    summary:
      "Creates e-commerce platforms, payment systems, and conversion-focused experiences.",
  },
];

export default function TeamGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <article
          key={member.name}
          className="
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-white/10
          "
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 font-space text-xl text-white">
            {member.name.charAt(0)}
          </div>

          <h2 className="font-space text-2xl text-white">
            {member.name}
          </h2>

          <p className="mt-2 font-space text-purple-300">
            {member.role}
          </p>

          <p className="mt-5 leading-7 text-white/70">
            {member.summary}
          </p>
        </article>
      ))}
    </section>
  );
}