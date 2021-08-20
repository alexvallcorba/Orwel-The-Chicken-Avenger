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
import NavBar from './components/NavBar';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(baseURL, config)
      console.log(res.data.records);
      setCharacters(res.data.records)
    }
    getCharacters()
    
  }, []);
  
  return (
    <article className="App">
      <Header />
      <Route exact path="/heroes">
        <Heroes characters={characters} />
      </Route>
      <Route exact path="/villains">
        {/* <Villains characters={characters} /> */}
      </Route>
      <Route exact path="/addcharacter">
        {/* <AddCharacter /> */}
      </Route>
      <Route path="/detail/:id">
        <CharacterDetails characters={characters}/>
      </Route>
      <NavBar />
      <Footer />
    </article>
  );
}



export default App;






