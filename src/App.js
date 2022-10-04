import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

function App() {

  const [movies, setMovies] = useState([]);
  const [favourites,setFavourites] = useState([])
  const [searchValue,setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fbabb382`
   
    const response = await fetch(url);
    const resJson = await response.json();
   
    if (resJson.Search){
      setMovies(resJson.Search)
    }

  }


  
  useEffect(()=> {
    getMovieRequest(searchValue)
  },
  [searchValue]
  );


  const addFavouriteMovie = (movie)=>{
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
  }

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = "Movies"/>
      <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies = {movies} handleFavourites={addFavouriteMovie} FavoriteComponent={AddFavorites}/>
      </div>
      <div className='row'>
      <MovieList movies = {favourites} handleFavourites={addFavouriteMovie} FavoriteComponent={AddFavorites}/>
      </div>
    </div>

  );
}

export default App;
