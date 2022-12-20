import styles from "./Card.module.css";


export default function Card({ name, species, gender, image, id, }) {



   const handleClick= ({charactersId}) => {
    charactersId: state.charactersId.filter(
        (char) => char.id !== action.payload
    )
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