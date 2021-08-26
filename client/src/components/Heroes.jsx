import { Link } from "react-router-dom";
import "./Heroes.css"
import { motion } from "framer-motion";
import Spray from "../services/sounds/spray_can.wav";
import { useEffect } from "react";



function Heroes(props) {
  let audio = new Audio(Spray);

  const heroes = props.characters.filter((character) => {
    console.log(character.fields.role);
    return character.fields.role.toLowerCase() === "hero"

  });
  console.log(heroes)
  
  useEffect(() => {
    audio.play();
  }, [])

  return (
    <>
      <h1 className="heroesList">HEROES</h1>
      <div className="character-box">
        {heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/characterDetails/${hero.id}`}>
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
                      src={hero.fields.spray}
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
    

export default Heroes;
      
