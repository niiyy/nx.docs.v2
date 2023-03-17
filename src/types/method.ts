export interface IMethod {
  name: string
  service: string
  file: string
  params: IMethodParams[]
  return: string
  category: string
}

export interface IMethodParams {
  name: string
  type: string
  hasDefaultValue: boolean
  defaultValue: string
  isOptional: boolean
}
