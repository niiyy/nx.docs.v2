import { useSetExportedMethods } from '@/state/sidebar'
import Methods from '../data/_doc.json'
import { useEffect } from 'react'

export const useLoadExportedMethods = () => {
  const setExportedMethods = useSetExportedMethods()

  useEffect(() => {
    setExportedMethods(Methods)
  }, [])
}
