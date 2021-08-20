import { Link } from "react-router-dom";

function Heroes({ characters }) {

  const heroes = characters.filter(
    (character) => character.fields.role === "hero"
  );
  return (

    <div>
      {
        heroes.map((hero) => {
          return (
            <div >
              <Link to={`/characterdetails/${hero.id}`}></Link>
            </div>
          );
        })}
    </div>
  )
}

export default Heroes
                