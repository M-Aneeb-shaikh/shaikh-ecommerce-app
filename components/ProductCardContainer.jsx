'use client'
import ProductCard from '@/components/ProductCard';
import React, { use, useEffect, useState } from 'react'
import Loading from './Loading';

export default function ProductCardContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('/api/products/fetch/all')
      .then(async res => {
        const parsed = await res.json();
        console.log(parsed.data)
        setProducts(parsed.data);
      })
      .catch(err => console.log(err))
      .finally(()=>setIsLoading(false))
  }, [])

  return (
    <section className='relative pt-6'>
      {loading && <Loading />}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products?.map((item, index) => (
          <ProductCard
            id={item.id}
            imgUrl={item.image}
            title={item.title}
            price={item.price}
            ratings={item.rating.count}
            key={index}
          />
        ))}
      </div>

    </section>
  )
}
