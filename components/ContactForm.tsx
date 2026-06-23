"use client";

import { AnimatePresence, motion } from "framer-motion";
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

    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      return setStatus({ type: "error", message: "Please enter your name." });
    }

    if (!form.email.trim()) {
      return setStatus({ type: "error", message: "Please enter your email." });
    }

    if (!isValidEmail(form.email)) {
      return setStatus({
        type: "error",
        message: "Invalid email address. Please enter a valid email.",
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
      setStatus({ type: "", message: "" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("API failed");
      }

      setStatus({
        type: "success",
        message: "Message submitted successfully. We will get back to you soon.",
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
        message: "Something went wrong. Please try again after some time.",
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
    <motion.section
      initial={{ opacity: 0, x: 45 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="rounded-[2rem] border border-white/10 bg-black/15 p-5 backdrop-blur-xl md:p-8"
    >
      <div className="mb-8">
        <h2 className="font-space text-2xl text-purple-300">
          Let&apos;s connect
        </h2>

        <p className="mt-3 font-space text-sm leading-6 text-white/55">
          Tell us what you&apos;re building, what you need, or where you think
          PurplePie can help.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            maxLength={MAX_NAME}
            type="text"
            placeholder="Name"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            maxLength={MAX_EMAIL}
            type="email"
            placeholder="Email"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />
        </div>

        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          maxLength={MAX_SUBJECT}
          type="text"
          placeholder="Subject"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-white/30"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          maxLength={MAX_MESSAGE}
          rows={6}
          placeholder="Write your message..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-space text-sm text-white outline-none placeholder:text-white/35 focus:border-white/30"
        />

        <div className="flex items-center justify-between font-space text-xs text-purple-300/80">
          <span>{form.message.length}/500</span>
        </div>

        <AnimatePresence>
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className={`rounded-2xl border px-5 py-4 font-space text-sm ${statusClass}`}
            >
              {status.message}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-2xl bg-white px-6 py-4 font-space font-bold text-purple-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
}