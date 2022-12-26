import styles from "./Card.module.css";
import { deleteCharacter } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

export default function Card({ name, image, id}) {

   const dispatch = useDispatch();

   const handleClick= () => {
      dispatch(deleteCharacter(id))
   }

   return (
      <div className={styles.divCard}>

         <img src={image} alt={name} className={styles.img}/>

         <div >
            <Link to={`/details/${id}`} className={styles.name}>{name}</Link>
         </div>
      
         
      </div>
   );
}
