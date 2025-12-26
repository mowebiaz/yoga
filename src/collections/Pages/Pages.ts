import { CollectionConfig } from 'payload'
import admin from '../Users/access/admin'
import { anyone } from '../Users/access/anyone'
import editor from '../Users/access/editor'

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
/*     {
      name: 'layout',
      type: 'blocks',
      label: 'Blocs de contenu',
      blocks: [],
    } */
  ],
}
