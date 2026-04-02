"use client"

import Link from "next/link"
import React, { useState } from "react"

type ApiResult = {
  success?: boolean
  error?: boolean
  message?: string
}

async function readJsonResponse(response: Response): Promise<ApiResult | null> {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text) as ApiResult
  } catch {
    return null
  }
}

export default function ShortenForm() {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const [feedback, setFeedback] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)
  const [pending, setPending] = useState(false)

  const generate = async (): Promise<void> => {
    setFeedback(null)
    setPending(true)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      })

      const result = await readJsonResponse(response)

      if (!response.ok || !result) {
        setGenerated("")
        setFeedback({
          type: "error",
          text:
            result?.message ??
            `Request failed (${response.status}). No response from server.`,
        })
        return
      }

      if (result.success) {
        const host = process.env.NEXT_PUBLIC_HOST ?? ""
        setGenerated(`${host.replace(/\/$/, "")}/${shorturl}`)
        setUrl("")
        setShortUrl("")
        setFeedback({ type: "success", text: result.message ?? "Done." })
      } else {
        setGenerated("")
        setFeedback({
          type: "error",
          text: result.message ?? "Something went wrong.",
        })
      }
    } catch (error) {
      console.error(error)
      setGenerated("")
      setFeedback({
        type: "error",
        text: "Network error. Check your connection and try again.",
      })
    } finally {
      setPending(false)
    }
  }

  const inputClass =
    "w-full rounded-xl border border-violet-200/90 bg-white px-4 py-3 text-base text-violet-950 shadow-sm outline-none transition placeholder:text-violet-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-400/35"

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-violet-200/60 bg-white/85 p-8 shadow-xl shadow-violet-950/10 backdrop-blur-sm">
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            void generate()
          }}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="long-url"
              className="text-sm font-semibold text-violet-950"
            >
              Destination URL
            </label>
            <input
              id="long-url"
              type="url"
              inputMode="url"
              autoComplete="url"
              value={url}
              className={inputClass}
              placeholder="https://example.com/very/long/path"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="short-slug"
              className="text-sm font-semibold text-violet-950"
            >
              Short link text
            </label>
            <input
              id="short-slug"
              type="text"
              value={shorturl}
              className={inputClass}
              placeholder="e.g. my-link"
              onChange={(e) => setShortUrl(e.target.value)}
            />
          </div>

          {feedback ? (
            <p
              role="status"
              className={
                feedback.type === "success"
                  ? "rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 ring-1 ring-emerald-200/80"
                  : "rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-900 ring-1 ring-red-200/80"
              }
            >
              {feedback.text}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-violet-600/25 transition hover:from-violet-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Saving…" : "Generate short link"}
          </button>
        </form>

        {generated ? (
          <div className="mt-8 rounded-xl border border-violet-200/70 bg-violet-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
              Your link
            </p>
            <p className="mt-2 break-all font-mono text-sm text-violet-950">
              <Link
                className="font-semibold text-violet-700 underline decoration-violet-400/70 underline-offset-2 hover:text-violet-900"
                target="_blank"
                rel="noopener noreferrer"
                href={generated}
              >
                {generated}
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
