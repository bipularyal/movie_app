import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MovieList from './components/movielist';
function App() {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = () => {
    const url = "https://www.omdbapi.com/?s=harry&apikey=fbabb382"
  }
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
      <MovieList movies = {movies}/>
      </div>

    </div>

  );
}

export default App;
