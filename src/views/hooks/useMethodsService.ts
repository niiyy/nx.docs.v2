export const useMethodsService = () => {
  const getMethodCallExample = (method: any): string => {
    const methodParamsFormated = []

    for (const param of method.params) {
      methodParamsFormated.push(param.name)
    }

    console.log(method)

    if (method.type === 'p_method') {
      const str = `const NX = exports.NX.useServer()\n\nconst nxPlayer = NX.Players.Get(1)\n\nnxPlayer.${
        method.name
      }(${methodParamsFormated.join(', ')})`

      return str
    }
    return `NX.${method.service}.${method.name}(${methodParamsFormated.join(
      ', ',
    )})`
  }

  return { getMethodCallExample }
}
