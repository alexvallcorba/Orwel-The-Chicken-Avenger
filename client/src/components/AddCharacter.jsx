import { useState } from "react";
import { baseURL, config } from '../services';
import axios from 'axios'
import { useHistory } from "react-router";




function AddCharacter() {
  const newCharacter = {
    name: "",
    role: "",
    type: "",
    strengths: "",
    weaknesses: "",
    location: "",
  };
  const [input, setInput] = useState(newCharacter);
  const history = useHistory();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(baseURL, config, input);
    console.log(res);
    history.push("/");
  };
  return (
    <div>
     
      <h1>New
        Character</h1>
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <label> Name</label>
        <input class Name= "input" type="text" name="name" />
        <br />
        <label> type</label>
        <input class Name= "input" type="text" name="type" />
        <br />
        <label> Role </label>
        <input class Name= "input" type="text" name="role" />
        <br />
        <label> Strengths </label>
        <input class Name= "input" type="text" name="strengths" />
        <br />
        <label> Weaknesses </label>
        <input type="text" name="weaknesses" />
        <br />
        <label>Character Location </label>
        <input class Name= "input"type="text" name="location" />
        <br />
        <img
            onClick={handleSubmit}
            className="crack"
            src="https://i.imgur.com/1Va0dQb.png"
            alt=""
          />
      </form>
    </div>
  );
}

export default AddCharacter
        
      
        

