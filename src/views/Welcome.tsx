import LinkCard from '@/components/card/LinkCard'
import { Discord } from '@/components/icons/Discord'
import { Typography } from '@/components/typography/Typography'
import { FlexColumn, FlexLayout } from '@/layouts/FlexLayout'
import ViewLayout from '@/layouts/ViewLayout'
import React from 'react'

const Welcome = () => {
  return (
    <ViewLayout>
      <FlexColumn
        style={{
          gap: 30,
        }}
      >
        <FlexColumn
          style={{
            gap: 10,
          }}
        >
          <Typography variant="h1">Welcome 👋</Typography>
          <Typography type="secondary" variant="p">
            {' '}
            NX is a robust and comprehensive FiveM framework designed to
            streamline server management for users. It offers centralized
            control over various aspects of the server, including player
            inventories, identities, and other key features. With NX, users can
            easily manage and customize their servers to suit their unique
            needs, creating a highly immersive gaming experience for their
            community. The framework offers a range of powerful tools and
            features, making it an ideal solution for anyone looking to enhance
            their FiveM server management capabilities. Whether you're a
            seasoned server administrator or just getting started, NX provides
            the flexibility and scalability you need to take your server to the
            next level.
          </Typography>
        </FlexColumn>

        <FlexColumn
          style={{
            gap: 10,
          }}
        >
          <Typography variant="h4">Join the community</Typography>
          <Typography type="secondary" variant="p">
            See the source code, connect with others, and get connected.
          </Typography>
          <FlexLayout
            style={{
              gap: 20,
              flexWrap: 'wrap',
              marginTop: 10,
            }}
          >
            <LinkCard
              style={{
                flex: 1,
              }}
              href="#"
              description="qzdqdqdqzdhjqzhd ,qzdyh,qdh,qzdyh,qzd yh,qd, "
              img={<Discord width={30} _color="white" />}
              title="Discord"
              imgBG="rgb(49, 49, 232)"
            />
            <LinkCard
              style={{
                flex: 1,
              }}
              href="#"
              description="qzdqdqdqzdhjqzhd ,qzdyh,qdh,qzdyh,qzd yh,qd, "
              img={<Discord width={30} _color="white" />}
              title="Discord"
              imgBG="rgb(49, 49, 232)"
            />
          </FlexLayout>
        </FlexColumn>
      </FlexColumn>
    </ViewLayout>
  )
}

export { Welcome }
