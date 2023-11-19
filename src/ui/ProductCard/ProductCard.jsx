import React from 'react'

import style from './style.module.scss'
import Image from 'next/image'
import productImg from '@/img/testProduct.png';
import Link from 'next/link';




export default function ProductCard({slug,title,price}) {
  return (
    <div  className={style.product} >
      <div className={style.product__container}>
        <Image src={productImg} alt='logo product' />
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <Link href={`/${slug}`} >Show more </Link>
      </div>
    </div>
  )
}
