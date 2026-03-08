import type { ComponentConfig } from '@puckeditor/core'
import { TABLE_ATTRS, FULL_WIDTH_TABLE_STYLE } from '../utils.js'

const defaultProps = {
  columnCount: 2,
  column1: [],
  column2: [],
  column3: [],
  gap: 16,
  verticalAlign: 'top',
}

export const EmailColumnsConfig: ComponentConfig = {
  label: 'Columns',
  fields: {
    column1: { type: 'slot' },
    column2: { type: 'slot' },
    column3: { type: 'slot' },
  },
  defaultProps,
  render: ({ columnCount, column1: Col1, column2: Col2, column3: Col3, gap, verticalAlign }) => {
    const ColSlot1 = Col1 as any
    const ColSlot2 = Col2 as any
    const ColSlot3 = Col3 as any
    const halfGap = Math.floor(gap / 2)

    const colStyle: React.CSSProperties = {
      verticalAlign,
      paddingLeft: `${halfGap}px`,
      paddingRight: `${halfGap}px`,
    }

    return (
      <table {...TABLE_ATTRS} style={FULL_WIDTH_TABLE_STYLE}>
        <tbody>
          <tr>
            <td style={colStyle}>
              <ColSlot1 />
            </td>
            <td style={colStyle}>
              <ColSlot2 />
            </td>
            {columnCount === 3 && (
              <td style={colStyle}>
                <ColSlot3 />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    )
  },
}
