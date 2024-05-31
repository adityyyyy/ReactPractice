import { FaStar } from 'react-icons/fa'
import { useState } from 'react';

import styles from './styles.module.css';

export default function StarRating({ noStars = 7 }) {
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);

   const handleClick = (index) => {
      setRating(index);
   }

   const handleMouseMove = (index) => {
      setHover(index);
   }

   const handleMouseLeave = () => {
      setHover(rating);
   }

   return (
      <div className='star-rating'>
         {[...Array(noStars)].map((_, index) => {
            index += 1;

            return (
               <FaStar
                  key={index}
                  className={
                     index <= (hover || rating) ? styles.active : styles.disabled
                  }
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseMove(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={40}
               />
            );
         })}
      </div>
   );
}