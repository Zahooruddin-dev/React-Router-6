import React from "react"; 
import { useOutletContext } from "react-router-dom";
export default function VansPhtoto(){
  const{van} = useOutletContext()
  return(
    <section>
      <h5>Photos:</h5>
      <img src={van.imageUrl}></img>
    </section>
  )
}