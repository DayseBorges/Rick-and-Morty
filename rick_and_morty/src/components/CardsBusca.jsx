import Card from './Card/Card';
import styles from './Cards/Cards.module.css'

export default function CardsBusca(props) {
   const { charactersId } = props;
   return (
   <div className={styles.cards}>
      {
        charactersId.map(({ name, species, gender, image, id}) => {
          return <Card
              name={name}
              // species={species}
              // gender={gender}
              image={image}
              key={id}
              id={id}
            />
          })
        }
   </div>
  )
}
