import { ExtractPropTypes, PropType, VNodeChild } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import { MessageType } from './types'

export const messageProps = {
  icon: Function as PropType<() => VNodeChild>,
  type: {
    type: String as PropType<MessageType>,
    default: 'info'
  },
  content: [String, Number, Function] as PropType<
  string | number | (() => VNodeChild)
  >,
  closable: Boolean,
  keepAliveOnHover: Boolean,
  onClose: Function as PropType<() => void>,
  onMouseenter: Function as PropType<(e: MouseEvent) => void>,
  onMouseleave: Function as PropType<(e: MouseEvent) => void>
} as const

export type MessageProps = ExtractPublicPropTypes<typeof messageProps>
export type MessageSetupProps = ExtractPropTypes<typeof messageProps>
