import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Explosion from "../services/sounds/explosion1.wav";

function CharacterDetails(props) {
  const { id } = useParams();
  const history = useHistory();

  const character = props.characters.find((character) => character.id === id);
  console.log(character);

  let audio = new Audio(Explosion);

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
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
        <p>
          <h3>TYPE:</h3>
          {character.fields.type}
        </p>
        <p>
          <h3>ROLE:</h3>
          {character.fields.role}
        </p>
        <p>
          <h3>STRENGTHS:</h3>
          {character.fields.strengths}
        </p>
        <p>
          <h3>WEAKNESSES:</h3>
          {character.fields.weaknesses}
        </p>
        <p>
          <h3>LOCATION:</h3>
          {character.fields.location}
        </p>
        <div className="TrashPosition">
          {character.fields.mainCharacter !== "true" ? (
            <motion.div
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
            >
              <img
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
