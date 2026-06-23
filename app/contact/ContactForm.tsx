"use client";

import { useState } from "react";

const MAX_NAME = 50;
const MAX_EMAIL = 80;
const MAX_SUBJECT = 100;
const MAX_MESSAGE = 500;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "api-error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      return setStatus({
        type: "error",
        message: "Please enter your name.",
      });
    }

    if (!form.email.trim()) {
      return setStatus({
        type: "error",
        message: "Please enter your email.",
      });
    }

    if (!isValidEmail(form.email)) {
      return setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
    }

    if (!form.subject.trim()) {
      return setStatus({
        type: "error",
        message: "Please enter a subject.",
      });
    }

    if (!form.message.trim()) {
      return setStatus({
        type: "error",
        message: "Please write your message.",
      });
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error();
      }

      setStatus({
        type: "success",
        message:
          "Message submitted successfully. We will get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "api-error",
        message:
          "Something went wrong. Please try again after some time.",
      });
    } finally {
      setLoading(false);
    }
  };

  const statusClass =
    status.type === "success"
      ? "border-yellow-300/30 bg-yellow-300/15 text-yellow-200"
      : "border-white/10 bg-white/5 text-white/80";

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="rounded-[2rem] border border-white/30 bg-black/15 p-5 backdrop-blur-xl sm:p-6 md:p-8"
    >
      <div className="mb-8">
        <h2
          id="contact-form-heading"
          className="font-space text-2xl text-purple-300"
        >
          Let's connect
        </h2>

        <p className="mt-3 font-space text-sm leading-6 text-white/55">
          Tell us what you're building, what you need, or where you think
          PurplePie can help.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={MAX_NAME}
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-purple-300"
          />

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={MAX_EMAIL}
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-purple-300"
          />
        </div>

        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={MAX_SUBJECT}
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-purple-300"
        />

        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={MAX_MESSAGE}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-purple-300"
        />

        <div className="flex justify-end text-xs text-purple-300/80">
          {form.message.length}/{MAX_MESSAGE}
        </div>

        {status.message && (
          <div
            role="alert"
            className={`rounded-2xl border px-5 py-4 font-space text-sm ${statusClass}`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-white px-6 py-4 font-space font-bold text-purple-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}