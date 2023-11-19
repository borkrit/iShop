import React from 'react'

import logo from '@/img/logo.svg'
import shoppingCard from '@/img/cart.svg'
import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header  className={style.header} >
      <div className={style.header__container}>
        <Link href={'/'} >
      <Image src={logo} alt='logo' /></Link>
      <Image src={shoppingCard} alt='logo' />
      </div>
    </header>
  )
}
