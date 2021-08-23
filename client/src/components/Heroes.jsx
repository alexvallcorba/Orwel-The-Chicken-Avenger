import { Link } from "react-router-dom";

function Heroes(props) {
  const heroes = props.characters.filter((character) => {
    console.log(character.fields.role);
    return character.fields.role.toLowerCase() === "hero"

  });
  console.log(heroes)

  return (
    <>
      <h1 className="heroesList">HEROES</h1>
      <div className="character-box">
        {heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/characterDetails/${hero.id}`}>
              <img
                className="spray"
                src={hero.fields.spray}
                alt="heroes-spray"
                />
                </Link>
            </div>
          );
        })}
        </div>
    </>
  );
}
    

export default Heroes;
      
