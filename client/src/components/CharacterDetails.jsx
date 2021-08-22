import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from '../services';
import axios from 'axios';



 function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const history = useHistory();

  

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.getCharacter(baseURL, config, id);
      console.log(res)
      if (res.fields) {
        setCharacter(res);
      } else {
        history.push("/");
      }
    };
    getCharacters();
  }, []);

  return (
    <div> 
      <img class="character-image" id="image" src={character.fields?.image} alt="" />
      <h1 className="detailsBox">{character.fields?.name}</h1>
      <div className="paragraph">
        <p>Type: {character.fields?.type}</p>
        <p>{character.fields?.role}</p>
        <p>Strengths: {character.fields?.strengths}</p>
        <p>Weaknesses: {character.fields?.weaknesses}</p>
        <p>Location: {character.fields?.Location}</p>
      </div>
    </div>
    

  );
 }

export default CharacterDetails