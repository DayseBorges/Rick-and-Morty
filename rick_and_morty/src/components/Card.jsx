import styles from "./Card.module.css";
import { deleteCharacter } from "../redux/actions"
import { useDispatch } from "react-redux"

export default function Card({ name, species, gender, image, id}) {

   const dispatch = useDispatch();

   const handleClick= () => {
      dispatch(deleteCharacter(id))
   }

   return (
      <div className={styles.divCard}>
         
         <div className={styles.button}>
            <button onClick={handleClick}>X</button>
         </div>

         <img src={image} alt={name} />

         <div className={styles.name}>
            <h2>{name}</h2>
         </div>
         
         <div className={styles.characters}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
      </div>
   );
}