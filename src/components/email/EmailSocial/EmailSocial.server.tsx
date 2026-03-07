import type { ComponentConfig } from '@puckeditor/core'
import type { EmailSocialProps, SocialPlatform } from './EmailSocial.types.js'
import { TABLE_ATTRS } from '../utils.js'

const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  facebook: 'Facebook',
  x: 'X',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
}

const defaultProps: EmailSocialProps = {
  links: [
    { platform: 'facebook', url: '#' },
    { platform: 'x', url: '#' },
    { platform: 'instagram', url: '#' },
  ],
  iconSize: 32,
  alignment: 'center',
}

export const EmailSocialConfig: ComponentConfig<EmailSocialProps> = {
  label: 'Social Links',
  defaultProps,
  render: ({ links, iconSize, alignment }) => {
    if (!links?.length) {
      return (
        <table {...TABLE_ATTRS} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '10px 0' }} />
          </tr>
        </table>
      )
    }

    return (
      <table {...TABLE_ATTRS} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          <td align={alignment} style={{ padding: '10px 0', textAlign: alignment }}>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  lineHeight: `${iconSize}px`,
                  textAlign: 'center',
                  backgroundColor: '#cccccc',
                  color: '#ffffff',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  margin: '0 4px',
                }}
              >
                {PLATFORM_LABELS[link.platform]?.charAt(0) ?? '?'}
              </a>
            ))}
          </td>
        </tr>
      </table>
    )
  },
}
