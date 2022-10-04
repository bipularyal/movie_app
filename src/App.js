import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavourites from './components/RemoveFavourites';

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

  const saveToLocalStrage = (items) => {
    localStorage.setItem('react-movie-app-favorites',JSON.stringify(items))
  }
  
  useEffect(()=> {
    getMovieRequest(searchValue)
  },
  [searchValue]
  );

  useEffect(()=> {
    const prevFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'))
    setFavourites(prevFavorites)

  },
  [searchValue]
  );

  const addFavouriteMovie = (movie)=>{
    if (favourites.indexOf(movie) !== -1) return
    const newFavouriteList = [...favourites, movie]
    // console.log(newFavouriteList)
    setFavourites(newFavouriteList)
    saveToLocalStrage(newFavouriteList)
  }
  const removeFavouriteMovie = (movie)=>{
    const newFavourites = favourites.filter(item => item.Title !== movie.Title)
    setFavourites(newFavourites)
    saveToLocalStrage(newFavourites)

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
      <MovieListHeading heading = "Favourites"/>
      <div className='row'>
      <MovieList movies = {favourites} handleFavourites={removeFavouriteMovie} FavoriteComponent={RemoveFavourites}/>
      </div>
    </div>

  );
}

export default App;
