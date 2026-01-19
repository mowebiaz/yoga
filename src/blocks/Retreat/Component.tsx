'use client'

import { useRef } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import Image from 'next/image'
import { RichText } from '@/components/RichText/RichText'
import type { Place, RetreatBlock as RetreatBlockProps } from '@/payload-types'
import { formatFrenchDate } from '@/utilities/formatFrenchDate'
import '../Workshop/Workshop.scss'

type Props = RetreatBlockProps & { place: Place }

export const RetreatBlock: React.FC<Props> = ({
  title,
  startDate,
  endDate,
  description,
  place,
  image,
}) => {
  const ref = useRef<HTMLDialogElement | null>(null)
  const closeModal = () => {
    ref.current?.close()
  }

  const openModal = () => {
    ref.current?.showModal()
  }

  if (ref.current) {
    ref.current.addEventListener('click', (event) => {
      if (event.target === ref.current) {
        closeModal()
      }
    })
  }

  return (
    <>
      <article className="workshop-card">
        {image && typeof image === 'object' && image.url ? (
          <div className="workshop-card__image">
            image
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 876px) 100vw, (max-width: 992px) 50vw, 25vw"
            />
          </div>
        ) : (
          <div className="workshop-card__image default">
            <p>Pas d&apos;image</p>
            <Image
              src={'/images/yoga-grenoble.webp'}
              alt={"pas d'image"}
              fill
              sizes="(max-width: 876px) 100vw, (max-width: 992px) 50vw, 25vw"
            />
            <div className="overlay"></div>
          </div>
        )}

        <div className="workshop-card__content">
          <h3>{title}</h3>
          <div>
            <p>{`du ${formatFrenchDate(startDate)}`}</p>
            <p>{`au ${formatFrenchDate(endDate)}`}</p>
          </div>
          <div className="place">
            <p>
              {place?.name} <br /> {place?.address} <br /> {place?.zip}{' '}
              {place?.city}
            </p>
            {place?.googleMapsLink && (
              <a
                href={place.googleMapsLink}
                target="_blank"
                rel="no-opener no-referrer"
              >
                Voir la carte
              </a>
            )}
          </div>
          <div className="workshop-card__info">
            {description ? (
              <button
                onClick={openModal}
                className="btn btn--secondary"
              >
                Plus d&apos;info
              </button>
            ) : (
              <p className="text-italic">infos sur demande</p>
            )}
          </div>
        </div>
      </article>

      <dialog
        ref={ref}
        className="workshop-modal"
      >
        <h3>{title}</h3>
        <div className="workshop-modal__content">
          <FaCalendarAlt color="#532755" />
          <div>
            <p>{`du ${formatFrenchDate(startDate)}`}</p>
            <p>{`au ${formatFrenchDate(endDate)}`}</p>
          </div>
          <FaMapMarkerAlt color="#532755" />
          <div className="place">
            <p>
              {place?.name} <br /> {place?.address} <br /> {place?.zip}{' '}
              {place?.city}
            </p>
            {place?.googleMapsLink && (
              <a
                href={place.googleMapsLink}
                target="_blank"
                rel="no-opener no-referrer"
              >
                Voir la carte
              </a>
            )}
          </div>

          <div className="workshop-modal__description">
            {description && <RichText data={description} />}
          </div>

          <button onClick={closeModal}>
            <IoMdCloseCircle
              size={30}
              color="#532755"
            />
          </button>
        </div>
      </dialog>
    </>
  )
}
