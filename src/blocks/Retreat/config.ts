import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Retreat: Block = {
  slug: 'retreat',
  //The image container uses a 3:2 aspect ratio (e.g., 480x320 pixels)
  /*     imageURL:
    'https://cdn.pixabay.com/photo/2021/02/27/06/08/lines-6053765_1280.png',
  imageAltText: 'bloc avec une image et du texte', */
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
    },
    {
      name: 'endDate',
      type: 'date',
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
  interfaceName: 'RetreatBlock',
}
