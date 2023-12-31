import styles from './page.module.css'
import ProductCard from '@/ui/ProductCard/ProductCard'
import products from './data';

export default function Home() {
  return (
    <main className={styles.main}>
      
    <div className={styles.products__lists}>
    {
        products.map((item,key)=>(
          <ProductCard key={key} slug={item.slug} title={item.title} price={item.price}/>
        ))
      }
    </div>



      
      
    </main>

  )
}
