/**
 * Email Puck configuration - Server-safe
 *
 * All components render to table-based, inline-styled HTML
 * compatible with email clients. No Tailwind, no CSS classes.
 *
 * Use with EmailRenderer or renderToEmailHtml().
 */

import type { Config as PuckConfig, ComponentConfig } from '@puckeditor/core'
import type { ReactNode } from 'react'

// Layout
import { EmailWrapperConfig } from '../components/email/EmailWrapper/EmailWrapper.server.js'
import { EmailSectionConfig } from '../components/email/EmailSection/EmailSection.server.js'
import { EmailColumnsConfig } from '../components/email/EmailColumns/EmailColumns.server.js'

// Content
import { EmailTextConfig } from '../components/email/EmailText/EmailText.server.js'
import { EmailHeadingConfig } from '../components/email/EmailHeading/EmailHeading.server.js'
import { EmailImageConfig } from '../components/email/EmailImage/EmailImage.server.js'
import { EmailButtonConfig } from '../components/email/EmailButton/EmailButton.server.js'

// Utility
import { EmailSpacerConfig } from '../components/email/EmailSpacer/EmailSpacer.server.js'
import { EmailDividerConfig } from '../components/email/EmailDivider/EmailDivider.server.js'

// Prebuilt
import { EmailHeaderConfig } from '../components/email/EmailHeader/EmailHeader.server.js'
import { EmailFooterConfig } from '../components/email/EmailFooter/EmailFooter.server.js'
import { EmailSocialConfig } from '../components/email/EmailSocial/EmailSocial.server.js'

export const emailBaseConfig = {
  root: {
    fields: {
      subject: { type: 'text', label: 'Subject Line' },
      previewText: { type: 'textarea', label: 'Preview Text' },
      maxWidth: { type: 'number', label: 'Max Width (px)' },
    },
    defaultProps: {
      subject: '',
      previewText: '',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Arial, Helvetica, sans-serif',
      maxWidth: 600,
    },
    render: ({ children }: { children: ReactNode }) => <>{children}</>,
  },
  categories: {
    layout: {
      title: 'Layout',
      components: ['EmailWrapper', 'EmailSection', 'EmailColumns'],
      defaultExpanded: true,
    },
    content: {
      title: 'Content',
      components: ['EmailText', 'EmailHeading', 'EmailImage', 'EmailButton'],
    },
    utility: {
      title: 'Utility',
      components: ['EmailSpacer', 'EmailDivider'],
    },
    prebuilt: {
      title: 'Prebuilt',
      components: ['EmailHeader', 'EmailFooter', 'EmailSocial'],
    },
  },
  components: {
    EmailWrapper: EmailWrapperConfig as ComponentConfig<any>,
    EmailSection: EmailSectionConfig as ComponentConfig<any>,
    EmailColumns: EmailColumnsConfig as ComponentConfig<any>,
    EmailText: EmailTextConfig as ComponentConfig<any>,
    EmailHeading: EmailHeadingConfig as ComponentConfig<any>,
    EmailImage: EmailImageConfig as ComponentConfig<any>,
    EmailButton: EmailButtonConfig as ComponentConfig<any>,
    EmailSpacer: EmailSpacerConfig as ComponentConfig<any>,
    EmailDivider: EmailDividerConfig as ComponentConfig<any>,
    EmailHeader: EmailHeaderConfig as ComponentConfig<any>,
    EmailFooter: EmailFooterConfig as ComponentConfig<any>,
    EmailSocial: EmailSocialConfig as ComponentConfig<any>,
  },
} satisfies PuckConfig
