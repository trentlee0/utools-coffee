import { NoneTemplate, templateBuilder } from 'utools-utils'
import * as caffeinate from './caffeinate'

export const none: Array<NoneTemplate> = [
  {
    code: 'prevent',
    cmds: ['Coffee On', 'Coffee 阻止睡眠'],
    explain: '阻止 Mac 睡眠，运行 Caffeinate',
    handler: () => caffeinate.preventSleep()
  },
  {
    code: 'allow',
    cmds: ['Coffee Off', 'Coffee 恢复睡眠'],
    explain: '恢复 Mac 睡眠，关闭 Caffeinate',
    handler: () => caffeinate.allowSleep()
  },
  {
    code: 'status',
    cmds: ['Coffee Status', 'Coffee 睡眠状态'],
    explain: '查看 Mac 睡眠状态',
    handler: () => {
      utools.hideMainWindow()
      utools.outPlugin()
      utools.showNotification(`${caffeinate.isRunning() ? '阻止睡眠 ☕️' : '允许睡眠 🌳'} 状态`)
    }
  }
]

export default templateBuilder()
  .none(...none)
  .build()
