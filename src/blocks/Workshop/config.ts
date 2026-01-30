import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Workshop: Block = {
  slug: 'workshop',
  imageURL: '/images/workshop.webp',
  imageAltText: 'atelier de yoga',
  labels: {
    singular: 'Atelier',
    plural: 'Ateliers',
  },
  fields: [
    {
      name: 'title',
      label: "Nom de l'atelier",
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          displayFormat: 'dd/MM/yyyy',
        },
      }
    },
    {
      name: 'startTime',
      type: 'text',
      required: true,
    },
    {
      name: 'endTime',
      type: 'text',
      required: true,
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
  interfaceName: 'WorkshopBlock',
}
