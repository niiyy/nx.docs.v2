import { Admonition } from '@/components/admonition/Admonition'
import { CodeBlock } from '@/components/code/CodeBlock'
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
      <FlexColumn style={{ alignItems: 'center' }}>
        <Image src="/welcome.svg" height="750" width="750" alt="welcome" />
      </FlexColumn>
      <FlexColumn style={{ gap: 20 }}>
        <FlexColumn style={{ gap: 10 }}>
          <Typography type="secondary" variant="span">
            Welcome to NX, the opensource Framework for FiveM.
          </Typography>
          <Typography type="secondary" variant="span">
            Click here <Link href="#">Source Code</Link> to download the source
            code or visit <Link href="#">Realese</Link> to the download the
            latest version.
          </Typography>
        </FlexColumn>

        <Typography variant="h1">Getting started</Typography>
        <Admonition
          variant="info"
          title="Information"
          content="The Framework is still under development so updates may be released regularly."
        />
        <Typography variant="h1">Requirements</Typography>

        <FlexColumn style={{ gap: 10 }}>
          <Admonition
            variant="warn"
            title="Warning"
            content="You have to stop basic-gamemode"
          />
          <CodeBlock>{codeString}</CodeBlock>
        </FlexColumn>
      </FlexColumn>
    </ViewLayout>
  )
}

export { Installation }
