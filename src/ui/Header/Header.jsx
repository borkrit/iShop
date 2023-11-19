import React from 'react'

import logo from '@/img/logo.svg'
import shoppingCard from '@/img/cart.svg'
import style from './style.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header  className={style.header} >
      <div className={style.header__container}>
      <Image src={logo} alt='logo' />
      <Image src={shoppingCard} alt='logo' />
      </div>
    </header>
  )
}
