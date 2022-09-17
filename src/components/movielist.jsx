import React from 'react'
const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie,idx) => 
            <div className='d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt="movie's poster" />

            </div>)}
        </>
    )
}

export default MovieList