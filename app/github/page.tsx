import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import PageShell from "@/components/PageShell"

const repoUrl =
  process.env.NEXT_PUBLIC_GITHUB_REPO ?? "https://github.com/ayushdongre01/"

export default function GitHubPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Open source"
        title="GitHub"
        description="NanoLink is built with Next.js and modern web tooling. Star the repo, open an issue, or fork and adapt it for your own stack."
      />

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-violet-200/60 bg-white/80 p-8 shadow-xl shadow-violet-950/10 backdrop-blur-sm sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-950 text-lg font-bold tracking-tight text-white shadow-lg">
              GH
            </div>
            <h2 className="mt-6 text-xl font-bold text-violet-950">Source &amp; issues</h2>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-600/30 transition hover:from-violet-500 hover:to-fuchsia-500"
            >
              View on GitHub
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-violet-200/50 bg-white/60 p-5">
            <h3 className="font-semibold text-violet-950">Contribute</h3>
            <p className="mt-2 text-sm text-violet-900/75">
              Pull requests for docs, UI polish, and accessibility improvements are welcome.
            </p>
          </div>
          <div className="rounded-xl border border-violet-200/50 bg-white/60 p-5">
            <h3 className="font-semibold text-violet-950">Report bugs</h3>
            <p className="mt-2 text-sm text-violet-900/75">
              Found a rough edge? Open an issue with steps to reproduce so we can fix it fast.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center">
        <Link
          href="/shorten"
          className="text-sm font-semibold text-violet-700 underline decoration-violet-400/60 underline-offset-2 hover:text-violet-900"
        >
          Back to shortening
        </Link>
      </p>
    </PageShell>
  )
}
