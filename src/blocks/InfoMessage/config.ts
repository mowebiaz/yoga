import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const InfoMessage: Block = {
  slug: 'infoMessage',
    labels: {
    singular: 'Message',
    plural: 'Messages',
  },
  imageURL: '/images/info-message.webp',
  imageAltText: 'message d’information',
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
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
        ],
      }),
    },
  ],
  interfaceName: 'InfoMessageBlock',
}
