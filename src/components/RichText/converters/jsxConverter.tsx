import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'
import { internalDocToHref } from '@/components/RichText/converters/internalLink'
import type { InfoMessageBlock as InfoMessageBlockProps } from '@/payload-types'
import { textConverter } from './textConverter'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<InfoMessageBlockProps>

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...textConverter,
})
