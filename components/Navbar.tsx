"use client"

import Link from "next/link"
import React, { useState } from "react"

const navLinkClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-violet-100/90 transition hover:bg-white/10 hover:text-white"

const NavLinks: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => (
  <>
    <Link href="/" className={navLinkClass} onClick={onNavigate}>
      Home
    </Link>
    <Link href="/about" className={navLinkClass} onClick={onNavigate}>
      About
    </Link>
    <Link href="/shorten" className={navLinkClass} onClick={onNavigate}>
      Shorten
    </Link>
    <Link href="/contact" className={navLinkClass} onClick={onNavigate}>
      Contact
    </Link>
  </>
)

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-violet-500/20 bg-violet-950/90 shadow-lg shadow-violet-950/20 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-violet-200"
        >
          Nano<span className="text-fuchsia-300">Link</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <NavLinks />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/shorten"
            className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-violet-400"
          >
            Try now
          </Link>
          <Link
            href="/github"
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-violet-500/20 bg-violet-950/90 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLinks onNavigate={() => setOpen(false)} />
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/shorten"
              className="rounded-xl bg-violet-500 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Try now
            </Link>
            <Link
              href="/github"
              className="rounded-xl border border-white/20 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
