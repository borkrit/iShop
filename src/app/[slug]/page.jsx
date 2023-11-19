"use client"
import React from 'react'
import products from '../data'
import Link from 'next/link'
import  {useRouter}  from 'next/navigation';


 const SingleCard =(props)=> {
  let product = products.find((item)=> item.slug === props.params.slug)
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <p> {product.title}</p>
      <p> {product.price}</p>
      <button onClick={goBack}>
      Back
    </button>
    </div>
  )
}


export default SingleCard;