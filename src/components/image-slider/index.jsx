import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from './styles.module.css';

export default function ImageSlider({url, page = 1, limit = 5}) {
   const [images, setImages] = useState([]);
   const [currImage, setCurrImage] = useState(0);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchImages = async (getUrl) => {
      try {
         setLoading(true);
         
         const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
         const data = await response.json();

         if(data) {
            setImages(data);
            setLoading(false);
         }
      } catch (err) {
         setError(err.message);
         setLoading(false);
      }
   }

   const handlePre = () => {
      setCurrImage(currImage === 0 ? images.length - 1 : currImage - 1);
   }

   const handleNext = () => {
      setCurrImage(currImage === images.length - 1 ? 0 : currImage + 1);
   }

   useEffect(() => {
      if(url !== '') {
         fetchImages(url);
      }
   }, [url]);

   console.log(images);

   if(loading) {
      return <div>Loading...</div>;
   }

   if(error) {
      return <div>Error occured {error}</div>;
   }

   return (
      <div className={styles.container}>
         <BsArrowLeftCircleFill className={styles.leftarrow} onClick={handlePre} />
         {
            images && images.length 
               ? images.map((item, index) => (
                  <img 
                     key={item.id}
                     alt={item.download_url}
                     src={item.download_url}
                     className={
                        currImage === index
                        ? styles.active
                        : styles.inactive
                     }
                  />
               ))
               : null
         }
         <BsArrowRightCircleFill className={styles.rightarrow} onClick={handleNext} />
         <span className={styles.circleindicator}>
            {images && images.length
               ? images.map((_, index) => (
                  <button
                     key={index}
                     className={
                        currImage === index
                           ? styles.currindicator
                           : styles.inactiveindicator  
                     }
                     onClick={() => setCurrImage(index)}
                  ></button>
               ))
               : null
            }
         </span>
      </div>
   );
}