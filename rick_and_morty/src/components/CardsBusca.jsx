import Card from './Card';
import styles from './Cards.module.css'

export default function CardsBusca(props) {
   const { charactersId } = props;
   return (
   <div className={styles.cards}>
      {
        charactersId.map(({ name, species, gender, image }, index) => {
          return <Card
              key={index}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          })
        }
   </div>
   )
}
