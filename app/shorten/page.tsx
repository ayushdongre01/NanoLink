import PageHeader from "@/components/PageHeader"
import PageShell from "@/components/PageShell"
import ShortenForm from "./ShortenForm"

export default function ShortenPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Create"
        title="Shorten a link"
        description="Paste a long URL and choose a short slug. You will get a shareable link that points to the same destination."
      />
      <ShortenForm />
    </PageShell>
  )
}
