'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdCloseCircle } from 'react-icons/io'
import Link from 'next/link'
//import { Loader } from '@/src/components/Loader/loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, FormData, ValidFieldNames } from './contact-types'
import { FormField } from './FormField'
import './ContactForm.scss'

export function ContactForm() {
  const [globalError, setGlobalError] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm({ resolver: zodResolver(contactSchema), mode: 'onBlur' })

  const closeDialog = () => {
    reset()
    clearErrors()
    dialogRef.current?.close()
  }

  const onSubmit = async (data: FormData) => {
    setGlobalError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const payload = await response.json()
      const errors = payload?.errors ?? {}

      if (response.ok && payload.success) {
        reset()
        clearErrors()
        dialogRef.current?.showModal()
        return
      }

      if (payload?.errors) {
        // Define a mapping between server-side field names and their corresponding client-side names
        const fieldErrorMapping: Record<string, ValidFieldNames> = {
          name: 'name',
          email: 'email',
          message: 'message',
          accepted: 'accepted',
          websiteyoga: 'websiteyoga',
        }

        // Find the first field with an error in the response data
        const fieldWithError = Object.keys(fieldErrorMapping).find(
          (field) => errors[field],
        )

        // If a field with an error is found, update the form error state using setError
        if (fieldWithError) {
          // Use the ValidFieldNames type to ensure the correct field names
          setError(fieldErrorMapping[fieldWithError], {
            type: 'server',
            message: errors[fieldWithError],
          })
        }

        return
      }
      setGlobalError(
        payload?.message ?? "Une erreur s'est produite. Réessayez plus tard.",
      )
    } catch (error) {
      setGlobalError('Submitting form failed! (réseau ou serveur)')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
      >
        <FormField
          name="name"
          label="Nom *"
          type="text"
          placeholder="Nom"
          register={register}
          error={errors.name}
          autoComplete="name"
          className="contact-form__field"
        />

        <FormField
          name="email"
          label="Email *"
          type="email"
          placeholder="Email"
          register={register}
          error={errors.email}
          autoComplete="email"
          className="contact-form__field"
        />

        <FormField
          as="textarea"
          name="message"
          label="Message *"
          placeholder="Message"
          register={register}
          error={errors.message}
          className="contact-form__field"
        />

        <div className="contact-form__checkbox-container">
          <FormField
            type="checkbox"
            name="accepted"
            register={register}
            error={errors.accepted}
            id="accepted"
            layout="inline"
            afterControl={
              <label
                htmlFor="accepted"
                className="checkbox"
              >
                J&apos;ai lu et j&apos;accepte la{' '}
                <Link
                  href="/politique-de-confidentialite"
                  className="link"
                >
                  politique de confidentialité
                </Link>
              </label>
            }
          />
        </div>

        <FormField
          type="text"
          name="websiteyoga"
          register={register}
          error={errors.websiteyoga}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
        />

        {globalError && (
          <div
            role="alert"
            className="alert"
          >
            {globalError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'loading' : 'Envoyer'}
        </button>
      </form>

      <dialog ref={dialogRef}>
        <p>Merci pour votre message.</p>
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Fermer"
        >
          Fermer
        </button>
      </dialog>
    </>
  )
}
