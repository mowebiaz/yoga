import type { WorkshopBlock as WorkshopBlockProps } from '@/payload-types'

type Props = {
  className?: string
} & WorkshopBlockProps

export const WorkshopBlock: React.FC<Props> = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
