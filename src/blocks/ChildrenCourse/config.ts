import type { Block } from 'payload'

export const ChildrenCourse: Block = {
  slug: 'childrenCourse',
  labels: {
    singular: 'Cours enfant',
    plural: 'Cours enfants',
  },
  imageURL: '/images/children-course.webp',
  imageAltText: 'cours de yoga enfant',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: '3 à 6 ans', value: '3-6' },
        { label: '7 à 10 ans', value: '7-10' },
        { label: '11 à 14 ans', value: '11-14' },
      ],
      required: true,
    },
    {
      name: 'dayOfWeek',
      type: 'select',
      options: [
        { label: 'Lundi', value: 'lundi' },
        { label: 'Mardi', value: 'mardi' },
        { label: 'Mercredi', value: 'mercredi' },
        { label: 'Jeudi', value: 'jeudi' },
        { label: 'Vendredi', value: 'vencredi' },
        { label: 'Samedi', value: 'samedi' },
        { label: 'Dimanche', value: 'dimanche' },
      ],
      required: true,
    },
    {
      name: 'startTime',
      label: 'Heure de début',
      type: 'text',
      required: true,
    },
    { name: 'endTime', label: 'Heure de fin', type: 'text', required: true },
    {
      name: 'place',
      label: 'Lieu',
      type: 'relationship',
      relationTo: 'places',
      required: true,
    },
  ],
  interfaceName: 'ChildrenCourseBlock',
}
