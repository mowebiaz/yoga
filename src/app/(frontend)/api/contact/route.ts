import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/components/ContactForm/contact-types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      // If validation errors, map them into an object
      const serverErrors = Object.fromEntries(
        result.error?.issues?.map((issue) => [issue.path[0], issue.message]) ||
          [],
      )

      // Respond with a JSON object containing the validation errors
      return NextResponse.json({ errors: serverErrors }, { status: 400 })
    }

    // Honeypot check
    if (result.data.websiteyoga?.trim()) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    await resend.emails.send({
      from: 'MorganeWeb <mw@notifications.morganeweb.com>',
      to: 'contact@morganeweb.com',
      subject: `Nouveau message de ${result.data.name} sur yoga.morganeweb.com`,
      replyTo: result.data.email,

      text: `
        Nom: ${result.data.name}\n
        Email: ${result.data.email}\n
        Message: ${result.data.message}\n
      `,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Impossible d'envoyer le message." },
      { status: 500 },
    )
  }
}
