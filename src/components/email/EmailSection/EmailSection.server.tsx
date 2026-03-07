import type { ComponentConfig } from '@puckeditor/core'
import { TABLE_ATTRS, centeredTableStyle } from '../utils.js'
import { colorValueToEmailCSS, paddingValueToEmailCSS } from '../../../fields/shared.js'

const defaultProps = {
  content: [],
  backgroundColor: null,
  padding: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px', linked: true },
  maxWidth: 600,
}

export const EmailSectionConfig: ComponentConfig = {
  label: 'Section',
  fields: {
    content: { type: 'slot' },
  },
  defaultProps,
  render: ({ content: Content, backgroundColor, padding, maxWidth }) => {
    const bgColor = colorValueToEmailCSS(backgroundColor)
    const paddingCSS = paddingValueToEmailCSS(padding)
    const ContentSlot = Content as any

    return (
      <table {...TABLE_ATTRS} style={centeredTableStyle(maxWidth)}>
        <tr>
          <td
            style={{
              ...(bgColor ? { backgroundColor: bgColor } : {}),
              ...(paddingCSS ? { padding: paddingCSS } : {}),
            }}
          >
            <ContentSlot />
          </td>
        </tr>
      </table>
    )
  },
}
