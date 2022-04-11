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
import { FullScreen, useFullScreenHandle } from "react-full-screen";


function App() {
  const [characters, setCharacters] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );
  const handle = useFullScreenHandle();


  //call async await function that retrive the characters and puts them in the characters  array.
  const getCharacters = async () => {
    try {
      const res = await axios.get(baseURL, config);
      setCharacters(res.data.records);
      console.log(characters)
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
   
    getCharacters();
  }, []);

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
          <div className="videoBox">
             {/* <button onClick={handle.enter}>
                 Enter fullscreen
              </button> */}

              <FullScreen handle={handle}>
                  <ReactPlayer className="player" url="https://youtu.be/uYAoxHidMqs" />
              </FullScreen>
    </div>
        </div>

            
            
          
          






      </Route>

      <Route exact path="/heroes">
        <Heroes characters={characters} />
        {/* passing props cause Heroes components can have the data from the chacters array */}
      </Route>

      <Route exact path="/villains">
        <Villains characters={characters} />
        {/* passing props cause Villains components can have the data from the chacters array */}
      </Route>

      <Route exact path="/addcharacter">
        <AddCharacter addCharacterCallback = {getCharacters} />
      </Route>

      <Route path="/characterDetails/:id">
        <CharacterDetails
          characters={characters}
          removeCharacterCallback = {getCharacters} />
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
            
          
            
