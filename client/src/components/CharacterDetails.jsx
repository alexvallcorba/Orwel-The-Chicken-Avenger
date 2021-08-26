import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.css";
import { motion } from "framer-motion";
// import Bird from "../services/sounds/bass.wav";
// import { useEffect } from "react";
// import Explosion from "../services/sounds/explosion1.wav";
// import useSound from "use-sound";






function CharacterDetails(props) {
  const { id } = useParams();
  const history = useHistory();
  // const [play] = useSound(Explosion);


  const character = props.characters.find((character) => character.id === id);
  console.log(character);

  // useEffect(() => {
    
  // }, [])
    
    
    

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    history.push("/");
  };

  return (
    <div className="details-container">
      <div id="name-image">
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
          TYPE:
          <br />
          {character.fields.type}
        </p>
       
        <p>
          ROLE:
          <br />
        
          {character.fields.role}
        </p>
        <p>
          STRENGTHS:
          <br />
        
          {character.fields.strengths}
        </p>
        <p>
          WEAKNESSES:
          <br />
        
          {character.fields.weaknesses}
        </p>
        <p>
          LOCATION:
          <br />
        
          {character.fields.location}
        </p>
        </div>
        <div className="trash" >
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
            // onClick={() => {
            //   play()
              
            // }}
          />
         </motion.div>
          ) : null}
          </div>
      
    </div>
  );
}

export default CharacterDetails;
