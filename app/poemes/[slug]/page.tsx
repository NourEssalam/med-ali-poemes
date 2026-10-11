import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Divider } from '@/components/site-header'
import { getAvailablePoems, getPoem, getPreviousNext, isPoemWithContent, poems } from '@/lib/poems'
export function generateStaticParams() { return getAvailablePoems().map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const poem = getPoem(slug); return { title: poem?.title ?? 'Poème' } }
export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const poem = getPoem(slug); if (!isPoemWithContent(poem)) notFound(); const { previous, next } = getPreviousNext(slug); return <article className="site-container py-12 md:py-20"><Link href="/poemes" className="back-link">← Retour à la collection</Link><div className="poem-page"><p className="eyebrow">{poem.theme}</p><h1 className="page-title">{poem.title}</h1><div className="poem-body">{poem.lines.map((stanza, i) => <p key={i}>{stanza.map((line) => <span key={line}>{line}<br /></span>)}</p>)}</div><Divider /><nav className="flex justify-between gap-6 font-sans text-sm" aria-label="Navigation entre les poèmes">{previous ? <Link className="inline-link" href={`/poemes/${previous.slug}`}>← {previous.title}</Link> : <span />}{next ? <Link className="inline-link text-right" href={`/poemes/${next.slug}`}>{next.title} →</Link> : <span />}</nav></div></article> }
