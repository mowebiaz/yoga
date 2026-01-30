import { TextStateFeature } from '@payloadcms/richtext-lexical'

type TextState = NonNullable<Parameters<typeof TextStateFeature>[0]>['state']

export const textState: TextState = {
  color: {
    text: {
      label: 'Violet',
      css: {
        color: '#3e1d40',
      },
    },
    secondary: {
      label: 'Saumon',
      css: {
        color: '#faa98c',
      },
    },
    accent: {
      label: 'Bleu',
      css: {
        color: '#8ea6d7',
      },
    },
  },
  background: {
    primarybkg: {
      label: 'Violet',
      css: {
        'background-color': '#532755',
      },
    },
    secondarybkg: {
      label: 'Saumon',
      css: {
        'background-color': '#faa98c',
      },
    },
    accentbkg: {
      label: 'Bleu',
      css: {
        'background-color': '#8ea6d7',
      },
    },
  },
  size: {
    large: {
      label: 'Large text',
      css: {
        'font-size': 'large',
      },
    },
  },
}
