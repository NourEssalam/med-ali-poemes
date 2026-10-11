import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
export const metadata: Metadata = { title: 'Contact' }
export default function ContactPage() { return <div className="site-container py-16 md:py-24"><div className="reading-width"><p className="eyebrow">Correspondance</p><h1 className="page-title">Contact</h1><p className="intro">Une question, une remarque ou simplement envie d&apos;échanger ? Écrivez-moi.</p><div className="mt-12"><ContactForm /></div></div></div> }
