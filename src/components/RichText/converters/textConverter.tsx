import { defaultColors } from '@payloadcms/richtext-lexical/client'
import { SerializedTextNode } from '@payloadcms/richtext-lexical'
import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import type {
  StateValues,
  TextStateFeatureProps,
} from 'node_modules/@payloadcms/richtext-lexical/dist/features/textState/feature.server'
import { CSSProperties } from 'react'

export const colorState: TextStateFeatureProps['state'] = {
  color: {
    //...defaultColors.text,
    text: {
      label: 'Violet',
      css: {
        color: '#3e1d40',
      },
    },
    secondary: {
      label: 'Saumon',
      css: {
        color: '#faa98c'
      }
    },
    accent: {
      label: 'Bleu',
      css: {
        color: '#8ea6d7'
      }
    }

  },
  background: {
    //...defaultColors.background,
    primarybkg: {
      label: 'Violet',
      css: {
        'background-color': '#532755',
      },
    },
    secondarybkg: {
      label: 'Saumon',
      css: {
        'background-color': '#faa98c'
      }
    },
    accentbkg: {
      label: 'Bleu',
      css: {
        'background-color': '#8ea6d7'
      }
    }
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

type ExtractColorKeys<T> = {
  [P in keyof T]: T[P] extends StateValues ? keyof T[P] : never
}[keyof T]

type ColorStateKeys = ExtractColorKeys<typeof colorState>

const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKETHROUGH = 4
const IS_UNDERLINE = 8
const IS_CODE = 16
const IS_SUBSCRIPT = 32
const IS_SUPERSCRIPT = 64
const IS_HIGHLIGHT = 128

const toReactStyle = (css: Record<string, string>): CSSProperties => {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(css)) {
    // 'background-color' -> 'backgroundColor'
    const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    out[camel] = v
  }
  return out as CSSProperties
}

export const textConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    const styles: CSSProperties = {}

    if (node.$) {
      Object.entries(colorState).forEach(([stateKey, stateValues]) => {
        const stateValue = node.$ && (node.$[stateKey] as ColorStateKeys)

        if (stateValue && stateValues[stateValue]) {
          const reactCss = toReactStyle(stateValues[stateValue].css)
          Object.assign(styles, reactCss)
        }
      })
    }

    let text: React.ReactNode = node.text

    if (node.format & IS_BOLD) {
      text = <strong>{text}</strong>
    }
    if (node.format & IS_ITALIC) {
      text = <em>{text}</em>
    }
    if (node.format & IS_STRIKETHROUGH) {
      text = <span style={{ textDecoration: 'line-through' }}>{text}</span>
    }
    if (node.format & IS_UNDERLINE) {
      text = <span style={{ textDecoration: 'underline' }}>{text}</span>
    }
    if (node.format & IS_CODE) {
      text = <code>{text}</code>
    }
    if (node.format & IS_SUBSCRIPT) {
      text = <sub>{text}</sub>
    }
    if (node.format & IS_SUPERSCRIPT) {
      text = <sup>{text}</sup>
    }
    if (node.format & IS_HIGHLIGHT) {
      text = <mark>{text}</mark>
    }

    if (node.$) {
      text = <span style={styles}>{text}</span>
    }
    return text
  },
}
