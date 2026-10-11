'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [{ href: '/', label: 'Accueil' }, { href: '/poemes', label: 'Poèmes' }, { href: '/a-propos', label: 'À propos' }, { href: '/contact', label: 'Contact' }]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className="border-b border-terracotta/25 bg-paper/95">
    <div className="site-container flex min-h-20 items-center justify-between">
      <Link href="/" className="font-serif text-xl text-ink" onClick={() => setOpen(false)}>Mohamed Ali Ben Ammar</Link>
      <button className="menu-button md:hidden" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span className="sr-only">Ouvrir le menu</span><span className="block h-px w-6 bg-ink" /><span className="mt-1.5 block h-px w-6 bg-ink" /></button>
      <nav id="main-nav" className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-20 z-10 border-b border-terracotta/25 bg-paper px-6 py-4 md:static md:block md:border-0 md:bg-transparent md:p-0`} aria-label="Navigation principale"><ul className="flex flex-col gap-1 md:flex-row md:gap-8">{links.map((link) => { const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href); return <li key={link.href}><Link href={link.href} onClick={() => setOpen(false)} aria-current={active ? 'page' : undefined} className={`nav-link ${active ? 'active' : ''}`}>{link.label}</Link></li> })}</ul></nav>
    </div>
  </header>
}

export function SiteFooter() { return <footer className="border-t border-terracotta/25"><div className="site-container flex flex-col items-center gap-3 py-8 text-center"><span className="jasmine-mark" aria-hidden="true">✦</span><p className="font-sans text-xs text-ink/60">© {new Date().getFullYear()} Mohamed Ali Ben Ammar</p></div></footer> }

export function JasmineOrnament() { return <span className="jasmine-mark" aria-hidden="true">✦</span> }

export function Divider() { return <div className="my-10 flex items-center gap-4" aria-hidden="true"><span className="h-px flex-1 bg-terracotta/40" /><JasmineOrnament /><span className="h-px flex-1 bg-terracotta/40" /></div> }
