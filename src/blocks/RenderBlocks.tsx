// src/components/RenderBlocks.tsx
import { InfoMessageBlock } from '@/blocks/InfoMessage/Component'
import type { Page } from '@/payload-types'
import { WorkshopBlock } from './Workshop/Component'

const blockComponents = {
  infoMessage: InfoMessageBlock,
  workshop: WorkshopBlock,
}

type PageLayout =
  | Page['layoutHome']
  | Page['layoutCoursAdulte']
  | Page['layoutCoursEnfant']
  | Page['layoutWorkshops']
  | Page['layoutAbout']
  | Page['layoutContact']

export const RenderBlocks: React.FC<{
  blocks?: PageLayout | null
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div
                  //className="my-16"
                  key={'id' in block && block.id ? block.id : index}
                >
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </>
    )
  }

  return null
}
