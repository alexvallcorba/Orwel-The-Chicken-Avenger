import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./AddCharacter.css";


function AddCharacter(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [strengths, setStregths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [location, setLocation] = useState("");

  const params = useParams();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCharacter = {
      name,
      role,
      type,
      strengths,
      weaknesses,
      location,
      image: "https://i.imgur.com/FZyBQ1S.png",
      spray: "https://i.imgur.com/2IFjKrJ.png",
    };
    history.push("/");
    await axios.post(baseURL, { fields: newCharacter }, config);
    // }
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };

  return (
    <div className="boxContainer">
      <h1 className="FormTitle">CREATE NEW CHARACTER</h1>

      <form className="formBox" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          className="inputColor"
          placeholder="New character's name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        {/* <label htmlFor="type">Type:</label> */}
        <input
          className="inputColor"
          placeholder="Type"
          type="text"
          id="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <br />
        {/* <label htmlFor="role">Role:</label> */}
        <input
          className="inputColor"
          placeholder="Hero or Villain"
          type="text"
          id="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        />
        <br />
        {/* <label htmlFor="location">Location:</label> */}
        <input
          className="inputColor"
          placeholder="Location"
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <br />
        {/* <label htmlFor="strengths">Strengths:</label> */}
        <textarea
          className="inputColor"
          placeholder="Character's Strengths"
          id="strengths"
          onChange={(e) => setStregths(e.target.value)}
          value={strengths}
        />
        <br />
        {/* <label htmlFor="weaknesses">Weaknesses:</label> */}
        <textarea
          className="inputColor"
          placeholder="Character's Weaknesses"
          id="weaknesses"
          onChange={(e) => setWeaknesses(e.target.value)}
          value={weaknesses}
        />
        <br />
        <img
          onClick={handleSubmit}
          className="crack"
          src="https://i.imgur.com/1Va0dQb.png"
          alt="Cracked egg"
        />
      </form>
    </div>
  );
}
export default AddCharacter;
