import PageHeader from "@/components/PageHeader"
import PageShell from "@/components/PageShell"
import Link from "next/link"

const principles = [
  {
    title: "Respect readers",
    text: "We avoid dark patterns: no surprise paywalls on basic shortening, no noisy interstitials.",
  },
  {
    title: "Keep it obvious",
    text: "You choose the slug, you see the destination. Predictable beats clever when links are shared at scale.",
  },
  {
    title: "Stay lightweight",
    text: "Redirects should feel instant. We keep the stack lean so your traffic moves with minimal overhead.",
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our story"
        title="About NanoLink"
        description="We built NanoLink for people who want short URLs without giving up privacy or wading through dashboards they will never use."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-violet-200/60 bg-white/80 p-8 shadow-lg shadow-violet-950/5 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-violet-950">Mission</h2>
          <p className="mt-4 leading-relaxed text-violet-900/85">
            URL shorteners should make the web easier to share—not harder to trust. NanoLink
            focuses on a simple flow: paste a long URL, pick a short path, and move on.
          </p>
          <p className="mt-4 leading-relaxed text-violet-900/85">
            We are not trying to replace enterprise analytics suites. We are trying to give
            you a calm, readable link you are proud to put in a slide deck or a bio.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-600 to-fuchsia-700 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-100/90">
            In one line
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug">
            Short links that feel human—fast to create, easy to read, and free of unnecessary
            tracking noise.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-center text-xl font-bold text-violet-950 sm:text-2xl">
          What we optimize for
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-violet-200/50 bg-white/70 p-6 shadow-md shadow-violet-950/5"
            >
              <h3 className="font-bold text-violet-950">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-violet-900/80">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Link
          href="/shorten"
          className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:from-violet-500 hover:to-fuchsia-500"
        >
          Try the shortener
        </Link>
        <Link
          href="/contact"
          className="rounded-2xl border-2 border-violet-300 bg-white px-8 py-3.5 text-sm font-bold text-violet-900 transition hover:border-violet-400"
        >
          Get in touch
        </Link>
      </div>
    </PageShell>
  )
}
