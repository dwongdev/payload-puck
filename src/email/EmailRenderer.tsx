/**
 * EmailRenderer - Server-safe React component for rendering Puck email data
 *
 * Wraps Puck's Render with email config.
 * For producing HTML strings, use renderToEmailHtml() instead.
 */

import { Render } from '@puckeditor/core'
import type { Config as PuckConfig, Data as PuckData } from '@puckeditor/core'
import { emailBaseConfig } from '../config/config.email.js'

export interface EmailRendererProps {
  data: PuckData
  config?: PuckConfig
}

/**
 * Renders Puck email data as React elements.
 * Server-safe — no hooks or client-side interactivity.
 */
export function EmailRenderer({
  data,
  config = emailBaseConfig,
}: EmailRendererProps) {
  if (!data || !data.content) {
    return null
  }

  return <Render config={config} data={data} />
}
