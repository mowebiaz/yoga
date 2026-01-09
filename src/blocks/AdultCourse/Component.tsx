import type {
  AdultCourseBlock as AdultCourseBlockProps,
  Place,
} from '@/payload-types'
import './AdultCourse.scss'

type Props = AdultCourseBlockProps & { place: Place }

export const AdultCourseBlock: React.FC<Props> = ({
  type,
  dayOfWeek,
  startTime,
  endTime,
  place,
}) => {
  return (
    <article className="adult-course">
      <div className="adult-course__header">
        <h3 className={type}>{type === 'hatha' ? 'Hatha Yoga' : 'Yin Yoga'}</h3>
        <div>
          <p className="text-accent">{dayOfWeek}</p>
          <p>{`${startTime} - ${endTime}`}</p>
        </div>
      </div>
      <div className="adult-course__place">
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
    </article>
  )
}
