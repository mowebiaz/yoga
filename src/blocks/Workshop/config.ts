import { Block } from 'payload'

export const Workshop: Block = {
  slug: 'workshop',
  //The image container uses a 3:2 aspect ratio (e.g., 480x320 pixels)
  /*     imageURL:
    'https://cdn.pixabay.com/photo/2021/02/27/06/08/lines-6053765_1280.png',
  imageAltText: 'bloc avec une image et du texte', */
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
  interfaceName: 'WorkshopBlock',
}
