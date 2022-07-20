import React from "react";
import { actors, movies } from "../data";

function Actors() {


  return (<div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actors.map((actor,index)=>{
  return (<div key={index}>
   <h3>Name:{actor.name}</h3>
   <p>Movies</p>
   {actor.movies.map((movie,index)=>{
   return (<ul key={index}>
            <li>{movie}</li>
             </ul>
     )

   })}
   
 </div>)
  })}
  
  
  
  </div>);
}

export default Actors;
