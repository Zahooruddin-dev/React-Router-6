import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = React.useState([])
  useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])
  
  
  console.log(vans);
  
  return (
      <h1>Vans page goes here 🚐</h1>
  )
}