import type { ComponentConfig } from '@puckeditor/core'
import type { EmailSpacerProps } from './EmailSpacer.types.js'
import { TABLE_ATTRS, FULL_WIDTH_TABLE_STYLE } from '../utils.js'

const defaultProps: EmailSpacerProps = {
  height: 24,
}

export const EmailSpacerConfig: ComponentConfig<EmailSpacerProps> = {
  label: 'Spacer',
  defaultProps,
  render: ({ height }) => (
    <table {...TABLE_ATTRS} style={FULL_WIDTH_TABLE_STYLE}>
      <tbody>
        <tr>
          <td style={{ height: `${height}px`, fontSize: '1px', lineHeight: `${height}px` }}>
            &nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  ),
}
