import { useState } from 'react';

import data from './data.js';
import styles from './styles.module.css';

export default function MultiSelection() {
   const [selected, setSelected] = useState(null);
   const [enableMulti, setEnableMulti] = useState(false);
   const [multiSelected, setMultiSelected] = useState([]);

   const handleSingleSelection = (id) => {
      setSelected(id === selected ? null : id);
   }

   const handleMultiSelection = (id) => {
      setSelected(null);
      if (multiSelected.includes(id)) {
         setMultiSelected(multiSelected.filter((item) => item!== id));
      } else {
         setMultiSelected([...multiSelected, id]);
      }
   }

   return (
      <div className={styles.container}>
         <button className={styles.btn} onClick={() => setEnableMulti(!enableMulti)}>
            Enable Multi Selection
         </button>
         <div className={styles.dataContainer}>
            {
               data && data.length > 0 ?
                  data.map((item) => (
                     <div className={styles.datas} key={item.id} onClick={() => enableMulti ? handleMultiSelection(item.id) : handleSingleSelection(item.id)}>
                        <div>
                           {item.question}
                           <span>+</span>
                        </div>
                        {selected === item.id || multiSelected.includes(item.id) ?
                        <div>{item.answer}</div>
                        : null
                        }
                     </div>
                  ))
                  : <div>No data found</div>
            }
         </div>
      </div>
   );
}
