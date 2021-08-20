import { useParams } from "react-router-dom";

function CharacterDetails(props) {
  const { id } = useParams();
  const character = props.characters.field((character) => {
    return character.id === Number(id);
  });
  



 return (
   <div>
     <img
       class="character-image"
       id="image"
       src={character.fields?.image}
       alt=""
     />
     <h1 className="market">{character.fields?.name}</h1>
     <div className="paragraph">
       <p>Type: {character.fields?.type}</p>
       <p>{character.fields?.value}</p>
       <p>Strengths: {character.fields?.strengths}</p>
       <p>Weaknesses: {character.fields?.weaknesses}</p>
       <p>Location: {character.fields?.Location}</p>
     </div>
   </div>
 );
}

export default CharacterDetails




