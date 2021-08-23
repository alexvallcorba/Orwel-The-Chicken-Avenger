import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

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
      spray: "https://i.imgur.com/lsiRg8P.png"
    };
    history.push("/");
    await axios.post(baseURL, { fields: newCharacter }, config);
    // }
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>CREATE NEW CHARACTER</h1>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="type">Type:</label>
      <input
        type="text"
        id="type"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <label htmlFor="strengths">Strengths:</label>
      <textarea
        id="strengths"
        onChange={(e) => setStregths(e.target.value)}
        value={strengths}
      />
      <label htmlFor="weaknesses">Weaknesses:</label>
      <textarea
        id="weaknesses"
        onChange={(e) => setWeaknesses(e.target.value)}
        value={weaknesses}
      />
      <img
        onClick={handleSubmit}
        className="crack"
        src="https://i.imgur.com/1Va0dQb.png"
        alt="Cracked egg"
      />
    </form>
  );
}
export default AddCharacter;
