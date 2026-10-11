'use server'

export type ContactState = { errors?: { name?: string; email?: string; message?: string }; success?: string }

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const message = String(formData.get('message') || '').trim()
  const honeypot = String(formData.get('website') || '')
  if (honeypot) return { success: 'Merci pour votre message.' }
  const errors: ContactState['errors'] = {}
  if (!name) errors.name = 'Veuillez renseigner votre nom.'
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Veuillez renseigner une adresse email valide.'
  if (!message) errors.message = 'Veuillez écrire un message.'
  if (Object.keys(errors).length) return { errors }
  // TODO: Connect an email/provider integration here.
  return { success: 'Merci pour votre message. Je vous répondrai dès que possible.' }
}
