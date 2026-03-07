import type { ComponentConfig } from '@puckeditor/core'
import type { EmailSpacerProps } from './EmailSpacer.types.js'
import { EmailSpacerConfig } from './EmailSpacer.server.js'

export const EmailSpacerEditorConfig: ComponentConfig<EmailSpacerProps> = {
  ...EmailSpacerConfig,
  fields: {
    height: {
      type: 'number',
      label: 'Height (px)',
      min: 1,
      max: 200,
    },
  },
}
