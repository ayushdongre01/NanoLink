import ContactForm from "@/components/ContactForm"
import PageHeader from "@/components/PageHeader"
import PageShell from "@/components/PageShell"
import Link from "next/link"

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="We are listening"
        title="Contact us"
        description="Questions, feedback, or ideas for NanoLink? Send a message—we read every note."
      />

      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-violet-800/75">
        Prefer a quick link? Visit the{" "}
        <Link
          className="font-semibold text-violet-700 underline decoration-violet-400/60 underline-offset-2 hover:text-violet-900"
          href="/github"
        >
          GitHub
        </Link>{" "}
        page for open-source updates and contribution ideas.
      </p>
    </PageShell>
  )
}
