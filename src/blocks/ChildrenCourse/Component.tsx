import type {
  ChildrenCourseBlock as ChildrenCourseBlockProps,
  Place,
} from '@/payload-types'
import './ChildrenCourse.scss'

//import './AdultCourse.scss'

type Props = ChildrenCourseBlockProps & { place: Place }

export const ChildrenCourseBlock: React.FC<Props> = ({
  type,
  dayOfWeek,
  startTime,
  endTime,
  place,
}) => {
  return (
    <article className="children-course">
      <div className="children-course__header">
        <div>
          <p className="text-accent">{dayOfWeek}</p>
          <p>{`${startTime} - ${endTime}`}</p>
        </div>
        <div className={`age age--${type}`}>
          <h3>
            {type === '3-6'
              ? '3 - 6 ans'
              : type === '7-10'
                ? '7 - 10 ans'
                : '11 - 14 ans'}
          </h3>
        </div>
      </div>
      <div className="children-course__place">
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
