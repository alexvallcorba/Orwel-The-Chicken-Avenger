import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function CharacterDetails(props) {
  const { id } = useParams();
  const history = useHistory();

  const character = props.characters.find((character) => character.id === id);
  console.log("Alex", character);

  if (!character.fields) {
    return <p>...loading</p>;
  }

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    history.push("/")
  };


  return (
    <div>
      <img
        class="character-image"
        id="image"
        src={character.fields.image}
        alt=""
      />
      <h1 className="detailsBox">{character.fields.name}</h1>
      <div className="paragraph">
        <p>Type: {character.fields.type}</p>
        <p>{character.fields.role}</p>
        <p>Strengths: {character.fields.strengths}</p>
        <p>Weaknesses: {character.fields.weaknesses}</p>
        <p>Location: {character.fields.Location}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default CharacterDetails;
