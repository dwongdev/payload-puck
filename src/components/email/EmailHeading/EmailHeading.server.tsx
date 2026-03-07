import type { ComponentConfig } from '@puckeditor/core'
import type { EmailHeadingProps } from './EmailHeading.types.js'
import { colorValueToEmailCSS } from '../../../fields/shared.js'

const HEADING_SIZES: Record<number, string> = {
  1: '32px',
  2: '24px',
  3: '20px',
}

const defaultProps: EmailHeadingProps = {
  text: 'Heading',
  level: 1,
  color: { hex: '#333333' },
  alignment: 'left',
}

export const EmailHeadingConfig: ComponentConfig<EmailHeadingProps> = {
  label: 'Heading',
  defaultProps,
  render: ({ text, level, color, alignment }) => {
    const textColor = colorValueToEmailCSS(color) ?? '#333333'
    const fontSize = HEADING_SIZES[level] ?? '24px'

    return (
      <p
        style={{
          margin: '0 0 16px 0',
          padding: 0,
          fontSize,
          fontWeight: 'bold',
          color: textColor,
          textAlign: alignment,
          lineHeight: '1.2',
        }}
      >
        {text}
      </p>
    )
  },
}
