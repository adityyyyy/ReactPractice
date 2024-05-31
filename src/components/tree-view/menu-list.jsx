import MenuItem from './menu-item'
import styles from './styles.module.css'

export default function MenuList ({list = []}) {
   

   return (
      <ul className={styles.menulistcontainer}>
         {
            list && list.length
               ? list.map((listItem) => (
                  <MenuItem key={listItem.id} item={listItem} />
               ))
               : null
         }
      </ul>
   )
}  