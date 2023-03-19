import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropDown } from '../dropdown/DropDown'
import { Discord } from '../icons/Discord'
import { GitHub } from '../icons/GitHub'
import { Search } from '../icons/Search'
import { Input } from '../input/Input'

const Header = () => {
  return (
    <header className="main__header">
      <div className="left">
        <Link href="/">
          <Image src="/nx/logo.svg" width={50} height={50} alt="Logo" />
        </Link>
        <DropDown
          items={[
            {
              title: 'Installation',
              description: 'How to install NX',
              href: '/docs?view=installation',
            },
            {
              title: 'Developement',
              description: 'How to develop NX',
              href: '/docs?view=developement',
            },
            {
              title: 'API',
              description: 'API Reference',
              href: '/docs',
            },
          ]}
          title="Setup"
        ></DropDown>
      </div>
      <div className="right">
        <div className="links">
          <Link target="_blank" href="https://discord.gg/d6pRBjBUyn">
            <Discord width={25} />
          </Link>
          <Link target="_blank" href="https://github.com/niiyy/NX">
            <GitHub width={25} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
