import React from 'react'
import { NavLink } from 'react-router-dom'

function Home({jsonData}) {
   

  return (
    <div>
        {
        jsonData.map( destination => (
        <div key={destination.id} className="about">
            <h3>Name: {destination.name} </h3>
            <img src={destination.image} alt='Destination look' />
            <h3>Location: {destination.location}</h3>
            <h4> Description: {destination.description} </h4>
            <NavLink to={`/${destination.id}`}>
            <button>View More</button>
            </NavLink>
        </div>
        ))            
         }     
    </div>
  )
}
export default Home

