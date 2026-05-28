import { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./components/MoviesCard";
import mockMovies from "./Data/mockMovies";
import MovieModel from "./components/MovieModel";
import Header from "./components/Header";

const MOVIES_INITIAL = 20
const MOVIES_PER_LOAD = 10
const App =()=>{
  const [movies,setMovies]  = useState([]);
  const [visibleCount,setVisibleCount] = useState(MOVIES_INITIAL);
  const [modelMovie,setModelMovie] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");
  const [sortYear,setSortYear] = useState(null);
  const [darkMode,setDarkMode] = useState(false);
  console.log(darkMode);
  
  console.log(modelMovie);
  
  useEffect(()=>{
    setMovies(mockMovies);
  },[])

  const handileMore =()=>{
    setVisibleCount((prev)=>prev + MOVIES_PER_LOAD);
  }

  const filterMovies = movies.filter((movie)=>movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  if(sortYear === "asc"){
    filterMovies.sort((a,b)=>a.year -b.year);
  }else if(sortYear === "desc"){
    filterMovies.sort((a,b)=>b.year - a.year);
  }

   const displyeMovies = filterMovies.slice(0,visibleCount);

  return(
    <div className={darkMode ? "app dark" :"app"}>


      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortYear ={sortYear} setSortYear={setSortYear} darkMode={darkMode} setDarkMode ={setDarkMode}/>


        <div className="movie-list">
         {
          displyeMovies.map((movie)=>(
          <MovieCard key ={movie.id} movie ={movie} openModel = {setModelMovie} / >
          ))
         }
         
        </div>
       {
        visibleCount < movies.length && (
          <div className="load-more-container">
          <button onClick={handileMore} className="load-more-btn">Show More</button>
        </div>
        )
       }
       {
        modelMovie && (
          <MovieModel movie={modelMovie} closeModal = {()=>setModelMovie(null)}/>
        )
       }
    </div>
  )
};
export default App;