import { CollectionConfig } from 'payload'
import { anyone } from './Users/access/anyone'
import editor from './Users/access/editor'

export const Places: CollectionConfig = {
  slug: 'places',
  access: {
    read:  anyone,
    create: editor,
    update: editor,
    delete: editor,
  },
  labels: {
    singular: 'Lieu',
    plural: 'Lieux',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Salle',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      label: 'Rue',
      type: 'text',
      required: true,
    },
    { name: 'zip', label: 'Code postal', type: 'text', required: true },
    { name: 'city', label: 'Ville', type: 'text', required: true },
    {
      name: 'googleMapsLink',
      label: 'Lien Google Map',
      type: 'text',
    },
  ],
}
