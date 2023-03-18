import { Admonition } from '@/components/admonition/Admonition'
import { CodeBlock } from '@/components/code/CodeBlock'
import { List } from '@/components/list/List'
import { Typography } from '@/components/typography/Typography'
import { FlexColumn } from '@/layouts/FlexLayout'
import ViewLayout from '@/layouts/ViewLayout'
import Link from 'next/link'
import React from 'react'

const Developement = () => {
  return (
    <ViewLayout>
      <FlexColumn style={{ gap: 40 }}>
        <FlexColumn
          style={{
            gap: 15,
          }}
        >
          <Typography variant="h1">Setting up</Typography>
          <Admonition variant="info" title="Information">
            You can help to improve the documentation or the framework by making
            pull requests at <Link href="#">framework</Link> or{' '}
            <Link href="#">documentation</Link>
          </Admonition>
          <Admonition variant="error" title="Important">
            You need to disable <code className="code__item">yarn</code>{' '}
            resource otherwise <code className="code__item">NX</code> is not
            gonna start
          </Admonition>
        </FlexColumn>
        <FlexColumn
          style={{
            gap: 20,
          }}
        >
          <Typography type="secondary" variant="h1">
            Tools
          </Typography>
          <Typography type="secondary" variant="span">
            make sure to have the following tools and successfully installed
          </Typography>
          <List>
            <Link href="#">node.js</Link>
            <Link href="#">pnpm</Link>
            <Link href="#">git</Link>
          </List>
        </FlexColumn>
        <FlexColumn
          style={{
            gap: 20,
          }}
        >
          <Typography variant="h3">Installing dependencies</Typography>
          <Typography type="secondary" variant="h4">
            Clone the repository
          </Typography>
          <Typography type="secondary" variant="span">
            clone the repository into your{' '}
            <code className="code__item">resources</code> folder
          </Typography>
          <CodeBlock>git clone https://github.com/niiyy/NX NX</CodeBlock>
          <Typography type="secondary" variant="h4">
            Run the command
          </Typography>
          <Typography type="secondary" variant="span">
            navigate to <code className="code__item">/</code> and run
          </Typography>
          <CodeBlock>pnpm i</CodeBlock>
          <Typography variant="h3">Building files</Typography>
          <Typography type="secondary" variant="h4">
            Building all
          </Typography>
          <Typography type="secondary" variant="span">
            navigate to <code className="code__item">/</code> and run
          </Typography>
          <CodeBlock>pnpm build</CodeBlock>

          <Typography type="secondary" variant="h4">
            Building NUI
          </Typography>
          <Typography type="secondary" variant="span">
            navigate to <code className="code__item">/apps/ui</code> and run
          </Typography>
          <CodeBlock>pnpm build</CodeBlock>

          <Typography type="secondary" variant="h4">
            Building Game Scripts
          </Typography>
          <Typography type="secondary" variant="span">
            navigate to <code className="code__item">/apps/rc</code> and run
          </Typography>
          <CodeBlock>pnpm build</CodeBlock>

          <Typography type="secondary" variant="h4">
            Building Locales
          </Typography>
          <Typography type="secondary" variant="span">
            navigate to <code className="code__item">/packages/locale</code> and
            run
          </Typography>
          <CodeBlock>pnpm build</CodeBlock>

          <Typography variant="h3">Building files</Typography>
          <Typography type="secondary" variant="h4">
            Watching all
          </Typography>
          <Typography type="secondary" variant="span">
            to watch all files in FiveM env you need to must navigate to{' '}
            <code className="code__item">/</code> and run
          </Typography>
          <CodeBlock>pnpm dev:ig</CodeBlock>
          <Typography type="secondary" variant="span">
            to watch all files in browser env you need to navigate to{' '}
            <code className="code__item">/</code> and run
          </Typography>
          <CodeBlock>pnpm dev</CodeBlock>
        </FlexColumn>
      </FlexColumn>
    </ViewLayout>
  )
}

export { Developement }
