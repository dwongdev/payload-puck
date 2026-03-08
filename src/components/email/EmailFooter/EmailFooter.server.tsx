import type { ComponentConfig } from '@puckeditor/core'
import type { EmailFooterProps } from './EmailFooter.types.js'
import { TABLE_ATTRS, FULL_WIDTH_TABLE_STYLE } from '../utils.js'

const mutedStyle: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '1.5',
  color: '#999999',
  margin: '0 0 4px 0',
}

const defaultProps: EmailFooterProps = {
  companyName: 'Company Name',
  address: '123 Main St, City, State 12345',
  unsubscribeText: 'Unsubscribe',
  unsubscribeUrl: '#',
}

export const EmailFooterConfig: ComponentConfig<EmailFooterProps> = {
  label: 'Footer',
  defaultProps,
  render: ({ companyName, address, unsubscribeText, unsubscribeUrl }) => (
    <table {...TABLE_ATTRS} style={FULL_WIDTH_TABLE_STYLE}>
      <tbody>
        <tr>
          <td
            align="center"
            style={{
              padding: '20px',
              textAlign: 'center',
              borderTop: '1px solid #eeeeee',
            }}
          >
            <p style={mutedStyle}>{companyName}</p>
            <p style={mutedStyle}>{address}</p>
            <p style={{ ...mutedStyle, marginTop: '8px' }}>
              <a
                href={unsubscribeUrl}
                style={{
                  color: '#999999',
                  textDecoration: 'underline',
                  fontSize: '12px',
                }}
              >
                {unsubscribeText}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ),
}
