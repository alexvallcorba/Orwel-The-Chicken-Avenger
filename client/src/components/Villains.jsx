import { Link } from "react-router-dom";
import "./Villains.css"
import { motion } from "framer-motion";
// import Spray from "../services/sounds/spray_can.wav";
// import { useEffect } from "react";

function Villains(props) {
  // let audio = new Audio(Spray);

  const villains = props.characters.filter((character) => {
    console.log(character.fields.role);
    return character.fields.role.toLowerCase() === "villain"

  });
  console.log(villains)
  
  // useEffect(() => {
  //   audio.play();
  // }, [])

  return (
    <>
      <h1 className="villainsList">VILLAINS</h1>
      <div className="character-box">
        {villains.map((villain) => {
          return (
            <div key={villain.id}>
              <Link to={`/characterDetails/${villain.id}`}>
              <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 115,
                      damping: 20,
                    }}
                  >
                    <img
                      className="spray"
                      src={villain.fields.spray}
                      alt="orwell-spray"
                    />
                  </motion.div>
                </Link>
            </div>
          );
        })}
        </div>
    </>
  );
}
    

export default Villains;
      
