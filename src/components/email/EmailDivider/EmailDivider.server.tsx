import type { ComponentConfig } from '@puckeditor/core'
import type { EmailDividerProps } from './EmailDivider.types.js'
import { TABLE_ATTRS } from '../utils.js'
import { colorValueToEmailCSS } from '../../../fields/shared.js'

const defaultProps: EmailDividerProps = {
  color: { hex: '#dddddd' },
  thickness: 1,
  width: '100%',
}

export const EmailDividerConfig: ComponentConfig<EmailDividerProps> = {
  label: 'Divider',
  defaultProps,
  render: ({ color, thickness, width }) => {
    const borderColor = colorValueToEmailCSS(color) ?? '#dddddd'
    return (
      <table {...TABLE_ATTRS} style={{ width, margin: '0 auto', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td
              style={{
                borderTop: `${thickness}px solid ${borderColor}`,
                fontSize: '1px',
                lineHeight: '1px',
                height: '1px',
              }}
            >
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    )
  },
}
