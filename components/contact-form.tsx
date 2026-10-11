'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from '@/app/contact/actions'

const initialState: ContactState = {}
export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)
  return <form action={action} className="space-y-6" noValidate>
    <div className="grid gap-6 sm:grid-cols-2"><Field label="Nom" name="name" error={state.errors?.name} /><Field label="Email" name="email" type="email" error={state.errors?.email} /></div>
    <div className="sr-only" aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div><label htmlFor="message" className="field-label">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={7} aria-invalid={!!state.errors?.message} aria-describedby={state.errors?.message ? 'message-error' : undefined} className={`field-input resize-y ${state.errors?.message ? 'error' : ''}`} />{state.errors?.message && <p id="message-error" className="field-error">{state.errors.message}</p>}</div>
    {state.success && <p className="border-l-2 border-lit-blue pl-3 font-sans text-sm text-lit-blue" role="status">{state.success}</p>}
    <button className="button-primary" type="submit" disabled={pending}>{pending ? 'Envoi…' : 'Envoyer'}</button>
  </form>
}
function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) { return <div><label htmlFor={name} className="field-label">{label} <span aria-hidden="true">*</span></label><input id={name} name={name} type={type} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={`field-input ${error ? 'error' : ''}`} />{error && <p id={`${name}-error`} className="field-error">{error}</p>}</div> }
