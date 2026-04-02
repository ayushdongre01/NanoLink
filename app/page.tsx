import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import PageShell from "@/components/PageShell"

const features = [
  {
    title: "No login wall",
    body: "Create short links without accounts or tracking dashboards you did not ask for.",
    icon: "✦",
  },
  {
    title: "Clean links",
    body: "Pick a memorable slug and share a tidy URL that fits chats, decks, and bios.",
    icon: "◇",
  },
  {
    title: "Built for speed",
    body: "Redirects stay lightweight so your audience lands on the destination quickly.",
    icon: "➜",
  },
]

export default function Home() {
  return (
    <PageShell className="py-12 sm:py-16">
      <PageHeader
        eyebrow="URL shortener"
        title="Short links, long on clarity"
        description="NanoLink helps you turn unwieldy URLs into short, shareable links—without the noise of heavy tracking or forced sign-ups."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <p className="text-lg leading-relaxed text-violet-950/85 sm:text-xl">
            Whether you are sharing a portfolio, a product drop, or a doc, a crisp link
            makes a better first impression. Start in one click—no friction, no clutter.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shorten"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-violet-600/30 transition hover:from-violet-500 hover:to-fuchsia-500"
            >
              Shorten a link
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-violet-300/80 bg-white/60 px-8 py-3.5 text-base font-semibold text-violet-900 backdrop-blur-sm transition hover:border-violet-400 hover:bg-white"
            >
              How we think
            </Link>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-violet-200/80 pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Focus
              </dt>
              <dd className="mt-1 text-2xl font-bold text-violet-950">Privacy</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Flow
              </dt>
              <dd className="mt-1 text-2xl font-bold text-violet-950">Simple</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Feel
              </dt>
              <dd className="mt-1 text-2xl font-bold text-violet-950">Fast</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-400/30 via-fuchsia-400/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-white/70 p-8 shadow-2xl shadow-violet-950/10 backdrop-blur-md">
            <div className="relative mx-auto aspect-square w-full max-w-[280px]">
              <Image
                className="object-contain mix-blend-multiply"
                alt="Abstract illustration for NanoLink"
                src="/vector.jpg"
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                priority
              />
            </div>
            <p className="mt-6 text-center text-sm font-medium text-violet-800/90">
              Create short, memorable links in seconds.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-violet-200/60 pt-16">
        <h2 className="text-center text-2xl font-bold text-violet-950 sm:text-3xl">
          Why teams reach for NanoLink
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="rounded-2xl border border-violet-200/50 bg-white/70 p-6 shadow-md shadow-violet-950/5 backdrop-blur-sm transition hover:border-violet-300 hover:shadow-lg"
            >
              <span className="text-2xl text-violet-500" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-violet-950">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-violet-900/75">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-gradient-to-br from-violet-700 via-violet-800 to-fuchsia-900 px-6 py-12 text-center shadow-2xl shadow-violet-900/40 sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to shorten your next link?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-violet-100/90">
          Jump to the tool and paste a URL—your short link is a few seconds away.
        </p>
        <Link
          href="/shorten"
          className="mt-8 inline-flex rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-violet-900 shadow-lg transition hover:bg-violet-50"
        >
          Open shortener
        </Link>
      </section>
    </PageShell>
  )
}
