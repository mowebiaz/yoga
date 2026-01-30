import type { Block } from 'payload'

export const AdultCourse: Block = {
  slug: 'adultCourse',
  labels: {
    singular: 'Cours adulte',
    plural: 'Cours adultes',
  },
  imageURL: '/images/adult-course.webp',
  imageAltText: 'cours de yoga adulte',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Hata yoga', value: 'hatha' },
        { label: 'Yin Yoga', value: 'yin' },
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
  interfaceName: 'AdultCourseBlock',
}
