import type { Metadata } from 'next'
import { PoemLink } from '@/components/poem-link'
import { groupByTheme, themes } from '@/lib/poems'
export const metadata: Metadata = { title: 'Poèmes', description: 'La collection de poèmes de Mohamed Ali Ben Ammar.' }
export default function PoemsPage() { return <div className="site-container py-16 md:py-24"><div className="reading-width mb-14"><p className="eyebrow">La collection</p><h1 className="page-title">Poèmes</h1><p className="intro">Des textes entre mémoire et horizon, là où les rives se répondent.</p></div><div className="poem-index">{themes.map((theme) => <section key={theme} className="theme-group"><h2>{theme}</h2><div className="space-y-3">{groupByTheme(theme).map((poem) => <PoemLink key={poem.slug} poem={poem} />)}</div></section>)}</div></div> }
