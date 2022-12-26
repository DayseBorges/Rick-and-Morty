import { connect, useSelector } from "react-redux";
import React, {useState} from "react";
import { createCharacter } from "../../redux/actions.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'
import style from './Form.module.css'
import img from '../../imagenes/RickPhoto.jpg'


const Form = (props) => {
    const [form, setForm] = useState ({
        name: '',
        species: '',
        status: '',
        gender: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm ({
            ...form,
            [property]:value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCharacter({
            ...form,
            id: Date.now(),
            image: (img)
        })
    }

 

    return (
        <div className={style.container}>

            <NavBar />

            <form className={style.form} onSubmit={(event) => handleSubmit(event)}>
                <input className={style.input} placeholder="Name..." name='name' value={form.name} onChange={(event) => handleChange(event)}/>

                <select className={style.input} name="species" value={form.species} onChange={(event) => handleChange(event)} >
                <option hidden selected>Species...</option> 
                <option>Human</option>
                <hr />
                <option>Alien</option>
                <hr />
                <option>Animal</option>
                </select>

                <select className={style.input} placeholder="Status..." name="status" value={form.status} onChange={(event) => handleChange(event)} >
                    <option hidden selected>Species...</option> 
                    <option>Alive</option>
                    <hr />
                    <option>Unknown</option>
                    <hr />
                    <option>Dead</option>
                </select>

                <input className={style.input} placeholder="Gender..." name="gender" value={form.gender} onChange={(event) => handleChange(event)} />  
            </form>

                <button className={style.boton} onClick={handleSubmit} type="submit">SUBMIT</button>  
            <div className={styles.cards}>
                {[...props.myCharacters].map(character => {
                    return (
                        <Card
                        image={character.image}
                        name={character.name}
                        />
                    )
                })
                }

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      myCharacters: state.myCharacters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCharacter: (character) => {dispatch(createCharacter(character))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Form);
