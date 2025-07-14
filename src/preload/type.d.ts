import type { Platform } from "@electron-toolkit/utils"
import type { AnyFn } from "@vueuse/core"
import type { Rectangle } from "electron"
import { IPackageJson } from 'package-json-type'
export type Inject = {
  sharedValue: {
    sync(name: string, v: any): void
    boot<T>(name: string): T
    watch<T>(name: string, cb: (v: T) => void): () => void
  }
  injectFunction: {
    sync(name: string, ...v: any[]): InjectFunctionResult<Awaited<any>>
    call(name: string, ...v: any[]): Promise<InjectFunctionResult<any>>
  }
  event<T extends keyof On['event']>(event: T, callback: (...p: On['event'][T]) => void): () => void
}

export type On = {
  event: {

  }
}

export interface SharedValueType {
  platform: Platform
}

export type InjectFunctionResult<T> = {
  isError: false
  result: T
} | {
  isError: true
  result: unknown
}

export interface InjectFunctionType extends Record<string, AnyFn> {
}