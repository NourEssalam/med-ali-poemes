import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteFooter, SiteHeader } from '@/components/site-header'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'], style: ['normal', 'italic'] })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
export const metadata: Metadata = { title: { default: 'Mohamed Ali Ben Ammar', template: '%s · Mohamed Ali Ben Ammar' }, description: 'Poèmes entre deux rives, par Mohamed Ali Ben Ammar.' }
export const viewport: Viewport = { themeColor: '#FAF6EF', colorScheme: 'light' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body className={`${serif.variable} ${sans.variable}`}><a className="skip-link" href="#main-content">Aller au contenu</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html> }
