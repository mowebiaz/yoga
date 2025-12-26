import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const InfoMessage: Block = {
  slug: 'infoMessage',
  fields: [
    {
      name: 'style',
      type: 'select',
      options: [
        { label: 'info', value: 'info' },
        { label: 'attention', value: 'warning' },
        { label: 'important', value: 'danger' },
        { label: 'success', value: 'success' },
      ],
      required: true,
      defaultValue: 'info',
    },
    {
      name: 'content',
      label: 'Message',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        admin: {
          placeholder: 'Écrivez votre message ici...',
        },
/*         features: ({rootFeatures}) => [
          ...rootFeatures,
        ] */
      })
    }
  ],
  interfaceName: 'InfoMessageBlock',
}
