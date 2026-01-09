import type { Block } from 'payload'

export const AdultCourse: Block = {
  slug: 'adultCourse',
  labels: {
    singular: 'Cours adulte',
    plural: 'Cours adultes',
  },
  //The image container uses a 3:2 aspect ratio (e.g., 480x320 pixels)
  /*   imageURL:
    'https://cdn.pixabay.com/photo/2021/02/27/06/08/lines-6053765_1280.png',
  imageAltText: 'bloc avec une image et du texte', */
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
