export const useMethodsService = () => {
  const getMethodCallExample = (method: any): string => {
    const methodParamsFormated = []

    for (const param of method.params) {
      methodParamsFormated.push(param.name)
    }

    return `NX.${method.service}.${method.name}(${methodParamsFormated.join(
      ', ',
    )})`
  }

  return { getMethodCallExample }
}
