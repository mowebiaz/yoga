'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdCloseCircle } from 'react-icons/io'
import { LuLoader } from 'react-icons/lu'
import Link from 'next/link'
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
    formState: { errors, isSubmitting, isValid, touchedFields, isSubmitted },
    reset,
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const closeDialog = () => {
    reset()
    clearErrors()
    dialogRef.current?.close()
  }

  if (dialogRef.current) {
    dialogRef.current.addEventListener('click', (event) => {
      if (event.target === dialogRef.current) {
        closeDialog()
      }
    })
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
      setGlobalError("Une erreur s'est produite. Réessayez plus tard.")
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
          autoFocus={true}
          name="name"
          label="Nom *"
          type="text"
          placeholder="Nom"
          register={register}
          error={touchedFields.name || isSubmitted ? errors.name : undefined}
          autoComplete="name"
          className="contact-form__field"
        />

        <FormField
          name="email"
          label="Email *"
          type="email"
          placeholder="Email"
          register={register}
          error={touchedFields.email || isSubmitted ? errors.email : undefined}
          autoComplete="email"
          className="contact-form__field"
        />

        <FormField
          as="textarea"
          name="message"
          label="Message *"
          placeholder="Message"
          register={register}
          error={
            touchedFields.message || isSubmitted ? errors.message : undefined
          }
          className="contact-form__field"
        />

        <div className="contact-form__checkbox-container">
          <FormField
            type="checkbox"
            name="accepted"
            register={register}
            error={
              touchedFields.accepted || isSubmitted
                ? errors.accepted
                : undefined
            }
            id="accepted"
            layout="inline"
            aftercontrol={
              <label
                htmlFor="accepted"
                className="checkbox"
              >
                J&apos;ai lu et j&apos;accepte la{' '}
                <Link href="/politique-de-confidentialite">
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
            className="error-message"
          >
            {globalError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`btn btn--secondary ${isSubmitting ? 'is-loading' : ''}`}
        >
          <span className="btn__text">Envoyer</span>
          <span
            className="btn__loader"
            aria-hidden={!isSubmitting}
          >
            <LuLoader />
          </span>
        </button>
      </form>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
      >
        <p>Votre message a bien été envoyé.</p>
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Fermer"
        >
          <IoMdCloseCircle
            size={30}
            color="#f9f0e9"
          />
        </button>
      </dialog>
    </>
  )
}
