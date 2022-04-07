import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.css";
import { motion } from "framer-motion";
import Explosion from "../services/sounds/explosion1.wav";

function CharacterDetails(props) {
  const { id } = useParams();
  //using paramas so we can find each individual character. 
  const history = useHistory();
  // useHistory. when delete a character, push is back to landing page. line 24

  const character = props.characters.find((character) => character.id === id);
  console.log(character);

  let audio = new Audio(Explosion);

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.removeCharacterCallback()   // line 21 changes the value and things happen based on value.
    audio.play();
    history.push("/");
  };

  return (
    <div className="details-container">
      <div className="image-container">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 230,
            damping: 100,
          }}
        >
          <img
            class="character-image"
            id="image"
            src={character.fields.image}
            alt=""
          />
        </motion.div>
        <h1 className="detailsName">{character.fields.name}</h1>
      </div>

      <div className="detailsFields">
        <h3>TYPE:</h3>
        <p>{character.fields.type}</p>
        <h3>ROLE:</h3>
        <p>{character.fields.role}</p>
        <h3>STRENGTHS:</h3>
        <p>{character.fields.strengths}</p>
        <h3>WEAKNESSES:</h3>
        <p>{character.fields.weaknesses}</p>
        <h3>LOCATION:</h3>
        <p>{character.fields.location}</p>

        <div className="TrashPosition">
          {character.fields.mainCharacter !== "true" ? (
            <motion.div
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
            >
              <img
                alt="Trash can"
                className="trashCan"
                src="https://i.imgur.com/EArYeyj.png"
                onClick={handleDelete}
              />
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
