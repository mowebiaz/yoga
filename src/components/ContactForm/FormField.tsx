import { FieldError, UseFormRegister } from 'react-hook-form'
import type { FormData, ValidFieldNames } from './contact-types'

type CommonProps = {
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error?: FieldError
  label?: string
  helpText?: string
  className?: string
  id?: string // to force a different id from the name
  layout?: 'stack' | 'inline' // inline = checkbox/radio
  afterControl?: React.ReactNode // ex: right custom label for checkbox/radio
}

type InputProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    as?: 'input'
  }

type TextareaProps = CommonProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
    as: 'textarea'
  }

export type FormFieldProps = InputProps | TextareaProps

export const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    name,
    register,
    error,
    label,
    id,
    className,
    as = 'input',
    ...rest
  } = props as FormFieldProps & { as?: 'input' | 'textarea' }

  const fieldId = id ? id : `${name}`
  const errorId = `${fieldId}-error`
  const describedBy = error ? errorId : null

  const commonA11y = {
    id: fieldId,
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': describedBy || undefined,
  }

  const layout = props.layout ?? 'stack'

  if (layout === 'inline') {
    return (
      <div className={className}>
        <div className="field-inline">
          {as === 'textarea' ? (
            <textarea
              {...commonA11y}
              {...register(name)}
              {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              {...commonA11y}
              {...register(name)}
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {props.afterControl}
        </div>

        {error && (
          <div
            id={errorId}
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="error-message">{error.message}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {as === 'textarea' ? (
        <textarea
          {...commonA11y}
          {...register(name)}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          {...commonA11y}
          {...register(name)}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <div
          id={errorId}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="error-message">{error.message}</p>
        </div>
      )}
    </div>
  )
}
