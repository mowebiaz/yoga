import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { anyone } from './Users/access/anyone'
import user from './Users/access/user'
import editor from './Users/access/editor'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
    create: user,
    update: editor,
    delete: editor,
  },
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'filename', 'alt'],
  },
  fields: [
    {
      name: 'nom',
      type: 'text',
      /*       admin: {
        position: 'sidebar',
      }, */
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()]
        },
      }),
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
        'Texte alternatif de l\'image, utilisé pour l\'accessibilité et le SEO',
      },
    },
    {
      name: 'creditText',
      type: 'text',
      admin: {
        description: 'Texte de crédit pour l\'image (ex: source de l\'image)',
        placeholder: 'Image générée avec Midjourney',
      },
    },
    {
      name: 'photographe',
      type: 'text',
      admin: {
        description: "Nom du photographe ou de l'illustrateur",
        placeholder: 'Morgane Couvet',
      },
    },
  ],
  upload: {
    formatOptions: {
      format: 'webp',
    },
    mimeTypes: ['image/*'],

    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'square',
        width: 500,
        height: 500,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'small',
        width: 600,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'medium',
        width: 900,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'large',
        width: 1400,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'xlarge',
        width: 1920,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
        formatOptions: {
          format: 'webp',
        },
      },
    ],
  },
}
