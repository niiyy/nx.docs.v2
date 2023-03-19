import Prism from 'prismjs'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Copy } from '../icons/Copy'
import { Typography } from '../typography/Typography'

export interface ICodeBlock {
  title?: string
  language?: string
}

const CodeBlock = (props: PropsWithChildren<ICodeBlock>) => {
  const { children, title, language = 'js' } = props
  const [copySucces, setCopySucces] = useState(false)
  const [activeTimeout, setActiveTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (copySucces) {
      activeTimeout && clearTimeout(activeTimeout)
      setActiveTimeout(null)
      const _timeout = setTimeout(() => {
        setCopySucces(false)
        setActiveTimeout(_timeout)
      }, 2000)
    }

    return () => {
      activeTimeout && clearTimeout(activeTimeout)
    }
  }, [copySucces])

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string)
    setCopySucces(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [children, language])

  return (
    <div className="codeblock">
      {title && (
        <header className="codeblock__header">
          <Typography variant="span">{title}</Typography>
        </header>
      )}

      <div className="codeblock__body">
        <button
          onClick={handleCopy}
          className={`copy__code ${copySucces ? '--active' : ''}`}
        >
          {copySucces ? 'Copied' : 'Copy'} <Copy _color="#555356" />
        </button>
        <pre>
          <code className={`language-${language}`} ref={codeRef}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
}

export { CodeBlock }
