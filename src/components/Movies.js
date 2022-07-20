import React from "react";
import { movies } from "../data";

function Movies() {
  return  (<div>
    <h1>Movies Page</h1>
    {/*{code here}*/}
  {movies.map((movie,index)=>{
  return (
  
  <div key={index}>
   <h3>Name:{movie.title}</h3>
    <p>Time:{movie.time}</p>
   {movie.genres.map((genre,index)=>{
   return (<ul key={index}>
            <li>{genre}</li>
             </ul>
     )

   })}
   
 </div>)
  })}
  
  
  
  </div>)
}

export default Movies;
