import React from 'react'
const MovieList = (props) => {
    const FavoriteComponent = props.FavoriteComponent
    return (
        <>
            {props.movies.map((movie,idx) => 
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt="movie's poster"></img>
                <div className="overlay d-flex align-items-center justify-content-center" onClick={props.handleFavourites}>
                    <FavoriteComponent/>
                </div>
            </div>)}
        </>
    )
}

export default MovieList