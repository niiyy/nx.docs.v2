import { Admonition } from '@/components/admonition/Admonition'
import { CodeBlock } from '@/components/code/CodeBlock'
import { List } from '@/components/list/List'
import { Typography } from '@/components/typography/Typography'
import { FlexColumn } from '@/layouts/FlexLayout'
import ViewLayout from '@/layouts/ViewLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Installation = () => {
  const codeString = `ensure spawnmanager 
ensure skinchanger 
ensure NX 
  
stop basic-gamemode`

  return (
    <ViewLayout>
      <Typography variant="h1">Installation</Typography>
      <FlexColumn style={{ alignItems: 'center' }}>
        <img
          className="welcome-img"
          src="/welcome.svg"
          width="750"
          alt="welcome"
        />
      </FlexColumn>
      <FlexColumn style={{ gap: 20 }}>
        <FlexColumn style={{ gap: 10 }}>
          <Typography type="secondary" variant="span">
            Welcome to NX, the opensource Framework for FiveM.
          </Typography>
        </FlexColumn>

        <Typography variant="h1">Getting started</Typography>
        <Admonition variant="info" title="Information">
          The Framework is still under development so updates may be released
          regularly.
        </Admonition>
        <Typography type="secondary" variant="span">
          Click here <Link href="#">Source Code</Link> to download the source
          code or visit <Link href="#">Realese</Link> to the download the latest
          version.
        </Typography>
        <Typography variant="h1">Requirements</Typography>
        <List>
          <Link href="https://github.com/mitlight/skinchanger">
            skinchanger
          </Link>
          <Link href="https://github.com/citizenfx/cfx-server-data/tree/master/resources/%5Bmanagers%5D/spawnmanager">
            spawnmanager
          </Link>
        </List>
        <FlexColumn style={{ gap: 10 }}>
          <Admonition variant="warn" title="Warning">
            You have to stop basic-gamemod
          </Admonition>
          <CodeBlock>{codeString}</CodeBlock>
        </FlexColumn>
      </FlexColumn>
    </ViewLayout>
  )
}

export { Installation }
