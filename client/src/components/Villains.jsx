import { Link } from "react-router-dom";

function Villains(props) {

  const villains = props.characters.filter(
    (character) => character.fields.role === "hero"
  );
  return (

    <div>
      {
        villains.map((villain) => {
          return (
            <div key={villain.id}>
              <Link to={`/villains/${villain.id}`}></Link>
              <h1>Villains list here</h1>
            </div>
          );
        })}
    </div>
  )
}

export default Villains
                