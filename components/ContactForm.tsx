"use client"

import React, { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL
    const subject = encodeURIComponent(`NanoLink — ${name || "Contact"}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name ? `Name: ${name}\n` : ""}Email: ${email}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    "w-full rounded-xl border border-violet-200/80 bg-white px-4 py-3 text-violet-950 shadow-sm outline-none transition placeholder:text-violet-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-400/30"

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-violet-200/60 bg-white/80 p-6 shadow-lg shadow-violet-950/5 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-1">
          <label htmlFor="contact-name" className="text-sm font-semibold text-violet-950">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-1">
          <label htmlFor="contact-email" className="text-sm font-semibold text-violet-950">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-violet-950">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-y min-h-[120px]`}
            placeholder="How can we help?"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:from-violet-500 hover:to-fuchsia-500 sm:w-auto sm:px-10"
      >
        Send message
      </button>

      {sent ? (
        <p className="mt-4 text-sm font-medium text-emerald-700" role="status">
          If your mail app opened, you are set. Otherwise copy your message and email us directly.
        </p>
      ) : null}
    </form>
  )
}
