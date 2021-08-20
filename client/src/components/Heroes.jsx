import { Link } from "react-router-dom";

function Heroes(props) {
  const heroes = props.characters.filter((character) => {
    console.log(character.fields.role);
    return character.fields.role.toLowerCase() === "hero"

  });
  console.log(heroes)

  return (
    <>
        {heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/characterdetails/${hero.id}`}></Link>
            </div>
          );
        })}
    </>
  );
}
    

export default Heroes;
