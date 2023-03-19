import { CodeBlock } from '@/components/code/CodeBlock'
import { ArgumentsTable } from '@/components/table/Arguments'
import { Typography } from '@/components/typography/Typography'
import { FlexColumn } from '@/layouts/FlexLayout'
import { useSideBarState, useSideBarValue } from '@/state/sidebar'
import { capitalize } from '@/utils/string'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Developement } from './Developement'
import { useMethodsService } from './hooks/useMethodsService'
import { Installation } from './Installation'
import { Welcome } from './Welcome'

const Main = () => {
  const data = useSideBarValue()
  const { getMethodCallExample } = useMethodsService()

  useEffect(() => {
    document.title = `${data.__type ? data.name : capitalize(data)} | NX`
  }, [data])

  return (
    <div className="views__wrapper">
      {data === 'installation' && <Installation />}
      {data === 'developement' && <Developement />}
      {data === 'welcome' && <Welcome />}

      {data?.__type === 'method' && (
        <FlexColumn className="method__wrapper" style={{ gap: 50 }}>
          <FlexColumn style={{ gap: 5 }}>
            <Typography variant="h2">{data.name}</Typography>
            <CodeBlock>{getMethodCallExample(data)}</CodeBlock>
            <Link
              className="declaration__file"
              href={`https://github.com/niiyy/NX/tree/main/${data.file}`}
              target="_blank"
            >
              <Typography type="secondary" variant="span">
                {data.file}
              </Typography>
            </Link>
          </FlexColumn>
          {data.params.length !== 0 ? (
            <FlexColumn style={{ gap: 10 }}>
              <Typography variant="h4">Arguments</Typography>
              <ArgumentsTable _arguments={data.params}></ArgumentsTable>
            </FlexColumn>
          ) : (
            <Typography type="secondary" variant="h6">
              No arguments
            </Typography>
          )}
          {/* {JSON.stringify(data)} */}
        </FlexColumn>
      )}
    </div>
  )
}

export { Main }
