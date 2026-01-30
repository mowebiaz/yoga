import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Retreat: Block = {
  slug: 'retreat',
  imageURL: '/images/retreat.webp',
  imageAltText: 'retraite de yoga',
  labels: {
    singular: 'Retraite',
    plural: 'Retraites',
  },
  fields: [
    {
      name: 'title',
      label: 'Nom de la retraite',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },

    {
      name: 'place',
      label: 'Lieu',
      type: 'relationship',
      relationTo: 'places',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'richText',
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
  interfaceName: 'RetreatBlock',
}
