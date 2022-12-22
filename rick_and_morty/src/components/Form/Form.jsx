import { connect } from "react-redux";
import React from "react";
import { createCharacter } from "../../redux/actions.jsx";
import characters from "../../data";

const Form = (props) => {
    const [form, setForm] = React.useState ({
        name: '',
        species: '',
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
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        })
        alert('Personaje creado');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name..." name={form.name} onChange={handleChange}/>
            <input placeholder="Species..." name="species" value={form.species} onChange={handleChange} />
            <input placeholder="Gender..." name="gender" value={form.gender} onChange={handleChange} />
            <button type="submit">SUBMIT</button>    
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCharacter: (character) => {dispatch(createCharacter(character))}
    }
}

export default connect(null, mapDispatchToProps) (Form);
