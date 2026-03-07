import type { ComponentConfig } from '@puckeditor/core'
import { TABLE_ATTRS, FULL_WIDTH_TABLE_STYLE, vmlBackgroundOpen, vmlBackgroundClose } from '../utils.js'
import { colorValueToEmailCSS } from '../../../fields/shared.js'

const defaultProps = {
  content: [],
  backgroundColor: { hex: '#ffffff' },
  backgroundImage: '',
  maxWidth: 600,
}

export const EmailWrapperConfig: ComponentConfig = {
  label: 'Wrapper',
  fields: {
    content: { type: 'slot' },
  },
  defaultProps,
  render: ({ content: Content, backgroundColor, backgroundImage, maxWidth }) => {
    const bgColor = colorValueToEmailCSS(backgroundColor) ?? '#ffffff'
    const ContentSlot = Content as any

    const tdStyle: React.CSSProperties = {
      backgroundColor: bgColor,
    }

    if (backgroundImage) {
      tdStyle.backgroundImage = `url(${backgroundImage})`
      tdStyle.backgroundSize = 'cover'
      tdStyle.backgroundPosition = 'center'
    }

    // VML markup is generated internally by vmlBackgroundOpen/Close utilities
    // for Outlook email client compatibility - no user input is used
    return (
      <table {...TABLE_ATTRS} style={FULL_WIDTH_TABLE_STYLE}>
        <tr>
          <td style={tdStyle}>
            {backgroundImage && (
              <div dangerouslySetInnerHTML={{ __html: vmlBackgroundOpen({ width: maxWidth ?? 600, src: backgroundImage }) }} />
            )}
            <ContentSlot />
            {backgroundImage && (
              <div dangerouslySetInnerHTML={{ __html: vmlBackgroundClose() }} />
            )}
          </td>
        </tr>
      </table>
    )
  },
}
