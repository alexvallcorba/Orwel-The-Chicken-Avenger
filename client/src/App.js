import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { baseURL, config } from './services';
import Heroes from './components/Heroes';
import Villains from './components/Villains';
import AddCharacter from './components/AddCharacter';
import CharacterDetails from './components/CharacterDetails';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactPlayer from "react-player";
import NavBar from './components/NavBar';

function App() {
  const [characters, setCharacters] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  useEffect(() => {
    const getCharacters = async () => {
      try {
      const res = await axios.get(baseURL, config)
      setCharacters(res.data.records)
      } catch (error) {
        console.error(error.message)
      }
      
    }
    getCharacters()
    
  }, []);
  
  return (
    <article className="App">
      <Header />
      <NavBar />
      <Route path = "/" exact>
     
      <ReactPlayer className="video" url="https://youtu.be/uYAoxHidMqs" />
      </Route>
      <Route exact path="/heroes">
        <Heroes characters={characters} />
      </Route>
      <Route exact path="/villains">
        <Villains characters={characters} />
      </Route>
      <Route exact path="/addcharacter">
        <AddCharacter setToggleFetch = {setToggleFetch}/>
      </Route>
      <Route path="/characterDetails/:id">
        <CharacterDetails characters={characters} setToggleFetch = {setToggleFetch}/>
      </Route>
      <Footer />
    </article>
  );
}



export default App;






