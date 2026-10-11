import Link from 'next/link'
import type { Poem } from '@/lib/poems'

export function PoemLink({ poem }: { poem: Poem }) {
  if (poem.lines) return <Link href={`/poemes/${poem.slug}`} className="poem-link">{poem.title}<span aria-hidden="true">→</span></Link>
  return <span className="poem-link muted" aria-disabled="true" title="Bientôt disponible">{poem.title}</span>
}
