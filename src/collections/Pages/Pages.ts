import { CollectionConfig } from 'payload'
import { InfoMessage } from '@/blocks/InfoMessage/config'
import { Workshop } from '@/blocks/Workshop/config'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import admin from '../Users/access/admin'
import { anyone } from '../Users/access/anyone'
import editor from '../Users/access/editor'
import { revalidatePage, revalidatePageDelete } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: anyone,
    create: admin,
    update: editor,
    delete: admin,
  },
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),

  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'nom de la page',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'slug de la page',
      unique: true,
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Blocs de contenu',
      labels: {
        singular: 'un Bloc',
        plural: ' des Blocs',
      },
      blocks: [InfoMessage, Workshop],
      admin: {
        description:
          'Construisez la mise en page de cette page en ajoutant des blocs de contenu.',

      },
    },
  ],
  versions: {
    drafts: {
      autosave: { interval: 100 },
      //schedulePublish: true,
      //validate: false,
    },
    maxPerDoc: 100,
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidatePageDelete],
  }
}
