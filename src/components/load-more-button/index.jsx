import { useEffect, useState } from "react";

import styles from './styles.module.css';

export default function LoadMore() {
   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [count, setCount] = useState(0);
   const [error, setError] = useState(null);
   const [disableButton, setDisableButton] = useState(false);

   const fetchProducts = async () => {
      const url = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`

      try {
         setLoading(true);

         const response = await fetch(url);
         const data = await response.json();

         
         if(data) {
            setProducts([...products, ...data.products]);
            setLoading(false);
         }
      } catch (err) {
         setError(err.message);
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchProducts();
   }, [count]);

   useEffect(() => {
      if(products && products.length === 100) {
         setDisableButton(true);
      }
      // console.log(products.length);
   }, [products]);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error occured {error}</div>;
   }

   return (
      <div className={styles.container}>
         <div className={styles.productscontainer}> 
            {
               products && products.length > 0
                  ? products.map((item) => (
                     <div className={styles.product} key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                     </div>
                  ))
                  : null
            }
         </div>
         <button disabled={disableButton} onClick={() => setCount(count+1)}>Load More</button>
      </div>
   );
}