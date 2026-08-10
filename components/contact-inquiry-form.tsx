'use client'

import { useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const whatsappNumber = '622183785852'
const contactEmail = 'info.wss@wirasarana.com'

export function ContactInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [showValidation, setShowValidation] = useState(false)

  const isValid =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.message.trim().length > 0

  const messageLines = [
    'Hello PT Wira Sarana Samudra,',
    '',
    `Name: ${form.name || '-'}`,
    `Company: ${form.company || '-'}`,
    `Email: ${form.email || '-'}`,
    `Phone: ${form.phone || '-'}`,
    '',
    'Inquiry details:',
    form.message || '-',
  ]

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function openEmail() {
    setShowValidation(true)
    if (!isValid) {
      return
    }

    const subject = encodeURIComponent(`Inquiry from ${form.name}`)
    const body = encodeURIComponent(messageLines.join('\n'))
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  function openWhatsApp() {
    setShowValidation(true)
    if (!isValid) {
      return
    }

    const text = encodeURIComponent(messageLines.join('\n'))
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault()
        openEmail()
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Your full name"
            required
            className="h-13 w-full rounded-[20px] border border-border/80 bg-background/80 px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            placeholder="Company name"
            className="h-13 w-full rounded-[20px] border border-border/80 bg-background/80 px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="name@company.com"
            required
            className="h-13 w-full rounded-[20px] border border-border/80 bg-background/80 px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="+62 ..."
            className="h-13 w-full rounded-[20px] border border-border/80 bg-background/80 px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Tell us about your vessel, cargo, service requirement, ETA, or operational needs..."
            required
            className="min-h-[160px] w-full resize-y rounded-[24px] border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={openWhatsApp}
          className="h-12 border-border bg-white hover:bg-secondary"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp Us
        </Button>
        <Button type="submit" size="lg" className="h-12">
          <Mail className="size-4" aria-hidden="true" />
          Send via Email
        </Button>
      </div>

      {showValidation && !isValid ? (
        <p className="text-sm text-destructive">
          Please complete name, email, and message first.
        </p>
      ) : (
        <p className="text-xs leading-relaxed text-muted-foreground">
          Use either email or WhatsApp and our team can continue the discussion
          from there.
        </p>
      )}
    </form>
  )
}
