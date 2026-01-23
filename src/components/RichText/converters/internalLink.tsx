import { SerializedLinkNode } from '@payloadcms/richtext-lexical'

export const internalDocToHref = ({
  linkNode,
}: {
  linkNode: SerializedLinkNode
}) => {
  const { value } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return `/${slug}`
}

/*   if (relationTo === 'posts') {
    return `/blog/${slug}`
  } else if (relationTo === 'users') {
    return `/users/${slug}`
  } else {
    return `/${slug}`
  } */
