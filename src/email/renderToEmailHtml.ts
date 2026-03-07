/**
 * renderToEmailHtml - Produces a complete email HTML string from Puck data
 *
 * Uses React's renderToStaticMarkup to generate static HTML,
 * then wraps it in the email document shell with reset CSS.
 */

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type { Config as PuckConfig, Data as PuckData } from '@puckeditor/core'
import { EmailRenderer } from './EmailRenderer.js'
import { getEmailDocumentParts } from './email-document.js'
import { colorValueToEmailCSS, type ColorValue } from '../fields/shared.js'

export interface RenderToEmailHtmlOptions {
  /** Puck config to use (defaults to emailBaseConfig) */
  config?: PuckConfig
}

/**
 * Renders Puck data to a complete email HTML string.
 *
 * @example
 * ```ts
 * import { renderToEmailHtml } from '@delmaredigital/payload-puck/email'
 *
 * const html = renderToEmailHtml(emailData)
 * await sendEmail({ to: 'user@example.com', html })
 * ```
 */
export function renderToEmailHtml(
  data: PuckData,
  options: RenderToEmailHtmlOptions = {}
): string {
  const rootProps = data.root?.props as {
    subject?: string
    previewText?: string
    backgroundColor?: string | ColorValue
    fontFamily?: string
    maxWidth?: number
  } | undefined

  // Resolve backgroundColor — could be a ColorValue object or plain string
  let bgColor = '#f4f4f4'
  if (rootProps?.backgroundColor) {
    if (typeof rootProps.backgroundColor === 'string') {
      bgColor = rootProps.backgroundColor
    } else {
      bgColor = colorValueToEmailCSS(rootProps.backgroundColor) ?? '#f4f4f4'
    }
  }

  const { before, after } = getEmailDocumentParts({
    previewText: rootProps?.previewText,
    backgroundColor: bgColor,
    fontFamily: rootProps?.fontFamily,
    maxWidth: rootProps?.maxWidth,
  })

  const contentHtml = renderToStaticMarkup(
    React.createElement(EmailRenderer, {
      data,
      config: options.config,
    })
  )

  return before + contentHtml + after
}
