import MenuList from "./menu-list";
import styles from './styles.module.css'

export default function TreeView({ menu = [] }) {

   return (
      <div className={styles.treeviewcontainer}>
         <MenuList list={menu} />
      </div>
   );
}