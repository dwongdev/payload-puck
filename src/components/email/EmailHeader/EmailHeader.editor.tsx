import type { ComponentConfig } from '@puckeditor/core'
import type { EmailHeaderProps } from './EmailHeader.types.js'
import { EmailHeaderConfig } from './EmailHeader.server.js'
import { createColorPickerField } from '../../../fields/ColorPickerField.js'

export const EmailHeaderEditorConfig: ComponentConfig<EmailHeaderProps> = {
  ...EmailHeaderConfig,
  fields: {
    logoSrc: { type: 'text', label: 'Logo URL' },
    logoAlt: { type: 'text', label: 'Logo Alt Text' },
    logoWidth: {
      type: 'number',
      label: 'Logo Width (px)',
      min: 30,
      max: 400,
    },
    title: { type: 'text', label: 'Title (optional)' },
    backgroundColor: createColorPickerField({ label: 'Background Color' }),
  },
}
