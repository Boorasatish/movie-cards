import React from "react";
import "./styles/Header.css";
const Header =({searchTerm,setSearchTerm ,sortYear,setSortYear,darkMode,setDarkMode})=>{
    return(
   <header>
    <div className="logo">
    
    <h1>My fav movies</h1>
    </div>
    <div className="header-control">
        <input type="text" placeholder="Search movies,,,," value={searchTerm}onChange={(e)=>setSearchTerm(e.target.value)}/>

        <select value={sortYear || ""}onChange={(e)=>setSortYear(e.target.value)}>
            <option value="">Sort by</option>
            <option value="asc">Year Assecnding</option>
            <option value="desc">Year Desending</option>
        </select>
        <label >
            <input type="checkbox" checked={darkMode}onClick={()=>setDarkMode(!darkMode)}/>
            DarckMode
        </label>
    </div>
   </header>

    )
};
export default Header;