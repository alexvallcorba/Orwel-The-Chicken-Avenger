import { Link } from "react-router-dom";

function Heroes(props) {
  const [heroes, setHeroes] = useState([])

  const heroes = props.characters.filter(
    (character) => character.fields.role === "hero"

  );
  console.log(heroes)
  return (
    <div>
      {
        heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/characterdetails/${hero.id}`}></Link>
              <h1>Heroes list here</h1>
            </div>
          );
        })}
    </div>
  )
}


export default Heroes
                