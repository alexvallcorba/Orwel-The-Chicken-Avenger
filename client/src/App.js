import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import Heroes from "./components/Heroes";
import Villains from "./components/Villains";
import AddCharacter from "./components/AddCharacter";
import CharacterDetails from "./components/CharacterDetails";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactPlayer from "react-player";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Recipes from "./components/Recipes";

function App() {
  const [characters, setCharacters] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(baseURL, config);
        setCharacters(res.data.records);
      } catch (error) {
        console.error(error.message);
      }
    };
    getCharacters();
  }, [toggleFetch]);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.matchMedia("(min-width: 480px)").addListener(handler);
  }, []);

  return (
    <article className="App">
      <div className="header">
        <Header className="header" />
        {matches ? <NavBar /> : ""}
      </div>

      <Route path="/" exact>
        <div className="home">
          <About />
          <div className="video">
            <ReactPlayer width={"100%"} height={"100%"} url="https://youtu.be/uYAoxHidMqs" />
          
            </div>
        </div>
      </Route>
      <Route exact path="/heroes">
        <Heroes characters={characters} />
      </Route>
      <Route exact path="/villains">
        <Villains characters={characters} />
      </Route>
      <Route exact path="/addcharacter">
        <AddCharacter setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/characterDetails/:id">
        <CharacterDetails
          characters={characters}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route  path="/recipes">
        <Recipes />
      </Route>
      {!matches ? <NavBar /> : ""}

      <Footer />
    </article>
  );
}

export default App;
