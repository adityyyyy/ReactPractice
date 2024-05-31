import { useEffect, useState } from "react"
import MenuList from "./menu-list"
import styles from './styles.module.css'

import {FaPlus, FaMinus} from 'react-icons/fa'

export default function MenuItem({ item }) {
   const [show, setShow] = useState(false)
   const [icon, setIcon] = useState(FaPlus)

   useEffect(() => {
      if(show) setIcon(FaMinus)
      else setIcon(FaPlus)
   }, [show])

   return (
      <li className={styles.itemcontainer}>
         <div onClick={() => setShow(!show)}>
            <p>
               {item.label}
               {
                  item && item.children && item.children.length
                     ? <span>{icon}</span>
                     : null
               }
            </p>
         </div>
         {
            show && item && item.children && item.children.length
               ? <MenuList list={item.children} />
               : null
         }
      </li>
   )
}