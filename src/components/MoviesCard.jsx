import React from "react";
import "./styles/Moviecard.css";
const MovieCard =({movie,openModel })=>{
    return(
        <div className="movie-card" key={movie.id} onClick={()=>openModel(movie)}>
            <img src={movie.poster} alt=""/>
            <h3>{movie.title}</h3>
            <p>{movie.rating}</p>
          </div>
    );
};
export default MovieCard;