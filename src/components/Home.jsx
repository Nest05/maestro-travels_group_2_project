import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

function Home({jsonData}) {
   

  return (
    <div className='tophome'>
      <div className='intro'>
         <h1>Hello, welcome to Maestro Travels</h1>
         <h2>Explore the beauty of Kenya with Maestro Travels - your ultimate guide to Kenyan travel destinations. Discover stunning landscapes, wildlife, and cultural experiences that will leave you enchanted. Start planning your dream Kenyan adventure with Maestro Travels today.</h2>
      </div>
    <div className='home'>
        {
        jsonData.map( destination => (
        <div key={destination.id} className="athome">
          <NavLink to={`/${destination.id}`}>
          <div className='image'>
            <img src={destination.image} alt='Destination look' />
            <h3>{destination.name}</h3>
          </div>
          </NavLink>
        </div>
        ))            
         }     
    </div>
    </div>
  )
}
export default Home

