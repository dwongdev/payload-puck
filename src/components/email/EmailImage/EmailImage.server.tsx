import type { ComponentConfig } from '@puckeditor/core'
import type { EmailImageProps } from './EmailImage.types.js'
import { TABLE_ATTRS } from '../utils.js'

const defaultProps: EmailImageProps = {
  image: null,
  alt: '',
  width: 600,
  height: null,
  alignment: 'center',
  link: '',
}

export const EmailImageConfig: ComponentConfig<EmailImageProps> = {
  label: 'Image',
  defaultProps,
  render: ({ image, alt, width, height, alignment, link }) => {
    if (!image?.url) {
      return (
        <table {...TABLE_ATTRS} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td
              align={alignment}
              style={{
                padding: '20px',
                textAlign: alignment,
                color: '#999999',
                fontSize: '14px',
              }}
            >
              No image selected
            </td>
          </tr>
        </table>
      )
    }

    const imgElement = (
      <img
        src={image.url}
        alt={alt || image.alt || ''}
        width={width}
        height={height ?? undefined}
        style={{
          display: 'block',
          width: `${width}px`,
          maxWidth: '100%',
          height: height ? `${height}px` : 'auto',
          border: 0,
          outline: 'none',
          textDecoration: 'none',
        }}
      />
    )

    const content = link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        {imgElement}
      </a>
    ) : (
      imgElement
    )

    return (
      <table {...TABLE_ATTRS} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          <td align={alignment} style={{ textAlign: alignment }}>
            {content}
          </td>
        </tr>
      </table>
    )
  },
}
