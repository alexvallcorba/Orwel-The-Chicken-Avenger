import { Link } from "react-router-dom";

function Villains(props) {
  const villains = props.characters.filter((character) => {
    console.log(character.fields.role);
    return character.fields.role.toLowerCase() === "villain"

  });
  console.log(villains)

  return (
    <>
        {villains.map((villain) => {
          return (
            <div key={villain.id}>
              <Link to={`/characterdetails/${villain.id}`}></Link>
              <img
                className="spray"
                src={villain.fields.spray}
                alt="villains-spray"
              />
            </div>
          );
        })}
    </>
  );
}
    

export default Villains;
