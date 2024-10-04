import React from "react"; 
import { useOutletContext } from "react-router-dom";
export default function VansPricing(){
  const{van} = useOutletContext()
  return(
    <section>
      <h6>Pricing: <strong>{van.price} $</strong></h6>
    </section>
  )
}