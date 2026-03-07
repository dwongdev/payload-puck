import type { ComponentConfig } from '@puckeditor/core'
import type { EmailHeaderProps } from './EmailHeader.types.js'
import { TABLE_ATTRS, FULL_WIDTH_TABLE_STYLE } from '../utils.js'
import { colorValueToEmailCSS } from '../../../fields/shared.js'

const defaultProps: EmailHeaderProps = {
  logoSrc: '',
  logoAlt: 'Logo',
  logoWidth: 150,
  title: '',
  backgroundColor: { hex: '#ffffff' },
}

export const EmailHeaderConfig: ComponentConfig<EmailHeaderProps> = {
  label: 'Header',
  defaultProps,
  render: ({ logoSrc, logoAlt, logoWidth, title, backgroundColor }) => {
    const bgColor = colorValueToEmailCSS(backgroundColor) ?? '#ffffff'

    return (
      <table {...TABLE_ATTRS} style={FULL_WIDTH_TABLE_STYLE}>
        <tr>
          <td
            align="center"
            style={{
              backgroundColor: bgColor,
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {logoSrc && (
              <img
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  width: `${logoWidth}px`,
                  maxWidth: '100%',
                  height: 'auto',
                  border: 0,
                }}
              />
            )}
            {title && (
              <p
                style={{
                  margin: logoSrc ? '12px 0 0 0' : '0',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#333333',
                  lineHeight: '1.2',
                }}
              >
                {title}
              </p>
            )}
          </td>
        </tr>
      </table>
    )
  },
}
