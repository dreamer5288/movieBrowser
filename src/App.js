import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutView from './components/AboutView';
import Home from './components/Home';
import MovieView from './components/MovieView';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';

function App() {
  // For SearchView
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const api_key = 'ec4b75ba5174c571b7c68d3b3e51a581';


  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ec4b75ba5174c571b7c68d3b3e51a581&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  //For Home View
  const [topMovies, setTopMovies] = useState([]);
    // const api_key = 'ec4b75ba5174c571b7c68d3b3e51a581';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ec4b75ba5174c571b7c68d3b3e51a581&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                setTopMovies(data.results)
            })
    }, [])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home topMovies={topMovies}/>
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" >
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>

  );
}

export default App;
