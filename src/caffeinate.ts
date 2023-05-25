import { execCommand, storage } from 'utools-utils'

const RUNNING_KEY = 'running'

export async function preventSleep() {
  utools.hideMainWindow()
  utools.outPlugin()
  storage.local.set(RUNNING_KEY, true)
  await execCommand('caffeinate')
  storage.local.set(RUNNING_KEY, false)
}

export async function allowSleep() {
  utools.hideMainWindow()
  utools.outPlugin()
  storage.local.set(RUNNING_KEY, false)
  await execCommand('killall caffeinate')
}

export function isRunning() {
  return storage.local.get<boolean>(RUNNING_KEY)
}
