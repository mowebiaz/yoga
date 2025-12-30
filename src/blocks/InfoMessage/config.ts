import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const InfoMessage: Block = {
  slug: 'infoMessage',
  //The image container uses a 3:2 aspect ratio (e.g., 480x320 pixels)
  /*   imageURL:
    'https://cdn.pixabay.com/photo/2021/02/27/06/08/lines-6053765_1280.png',
  imageAltText: 'bloc avec une image et du texte', */
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
