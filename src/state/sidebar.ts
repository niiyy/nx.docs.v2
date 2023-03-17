import { IMethod } from '@/types/method'
import { StateKey } from '@/types/state'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const sideBarState = atom<any>({
  key: StateKey.SIDEBAR,
  default: null,
})

const exportedMethods = atom<any[]>({
  key: StateKey.EXPORTED_METHODS,
  default: [],
})

export const useExportedMethodsValue = () => useRecoilValue(exportedMethods)
export const useSetExportedMethods = () => useSetRecoilState(exportedMethods)
export const useExportedMethodsState = () => useRecoilState(exportedMethods)

export const useSideBarValue = () => useRecoilValue(sideBarState)
export const useSetSideBar = () => useSetRecoilState(sideBarState)
export const useSideBarState = () => useRecoilState(sideBarState)
