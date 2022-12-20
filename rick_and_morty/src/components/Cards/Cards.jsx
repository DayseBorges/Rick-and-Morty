import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'
import { connect } from 'react-redux'
import { getCharacters } from '../../redux/actions';


class Cards extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
       <div className={styles.cards}>
              {
              [...this.props.myCharacters,...this.props.characters].map(character => {
              return (
                <Card
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  key={character.id}
                  id={character.id}
                />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    myCharacters: state.myCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cards);
