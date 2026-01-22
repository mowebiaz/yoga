//import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'
//import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { InfoMessageBlock } from '@/blocks/InfoMessage/Component'
import type { InfoMessageBlock as InfoMessageBlockProps } from '@/payload-types'
import { internalDocToHref } from '@/components/RichText/converters/internalLink'
import { textConverter } from './textConverter'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<InfoMessageBlockProps>

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...textConverter,
  blocks: {
    /*     mediaBlock: ({ node }) => (
      <MediaBlock
        {...node.fields}
        enableGutter={false}
        disableInnerContainer={true}
      />
    ), */
    infoMessage: ({ node }) => <InfoMessageBlock {...node.fields} />,
  },
})
