import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const getMovieRequest = async() => {
    const url = "https://www.omdbapi.com/?s=harry&apikey=fbabb382"
    const response = await fetch(url);
    const resJson = await response.json();
    setMovies(resJson.Search)
  };
  useEffect(()=> {
    getMovieRequest();
  },[]);
  return (
    <div className='container-fluid movie-app'>
      <div className="row">
        <MovieListHeading heading = "Movies"/>
      </div>
      <div className='row'>
      <MovieList movies = {movies}/>
      <SearchBox/>
      </div>

    </div>

  );
}

export default App;
