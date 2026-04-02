type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="mb-10 text-center sm:mb-12">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance bg-gradient-to-br from-violet-950 via-violet-800 to-fuchsia-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-violet-950/75 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
