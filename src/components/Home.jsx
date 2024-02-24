import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

function Home({jsonData}) {
  
  return (
    <div className='tophome'>
      <div className='intro'>
        
        <div id="imageContainer">
          <img src='https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_1280.jpg' alt='Giraffes'/>
        </div>
        <div id="imageContainer1">
          <img src='https://cdn.pixabay.com/photo/2020/10/27/07/40/cheetahs-5689873_640.jpg' alt='Cheetahs'/>
        </div>
        <div id="imageContainer2">
          <img src='https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_640.jpg' alt='Rhinos'/>
        </div>
        <div id="imageContainer3">
          <img src='https://cdn.pixabay.com/photo/2019/11/22/11/43/birds-4644652_640.jpg' alt='Flamingoes'/>
        </div>
        <div id="imageContainer4">
          <img src='https://cdn.pixabay.com/photo/2019/04/11/11/48/kenya-4119572_1280.jpg' alt='Savannah'/>
        </div>
        <div id="imageContainer5">
          <img src='https://cdn.pixabay.com/photo/2015/11/05/23/41/mount-kilimanjaro-1025146_640.jpg' alt='Mount Kilimanjaro'/>
        </div>
        <div id='head'>
         <h1>Exploring Kenya with Maestro Travels: A Site for Travelers</h1>
         <p>Explore the beauty of Kenya with Maestro Travels - your ultimate guide to Kenyan travel destinations. Discover stunning landscapes, wildlife, and cultural experiences that will leave you enchanted. Start planning your dream Kenyan adventure with Maestro Travels today.</p>
        </div>
         {/* <div className='images'>
         <img src='https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_1280.jpg' alt='Giraffes'/>
         <img src='https://cdn.pixabay.com/photo/2020/10/27/07/40/cheetahs-5689873_640.jpg' alt='Cheetahs'/>
         <img src='https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_640.jpg' alt='Rhinos'/>
         <img src='https://cdn.pixabay.com/photo/2019/11/22/11/43/birds-4644652_640.jpg' alt='Flamingoes'/>
         <img src='https://cdn.pixabay.com/photo/2019/04/11/11/48/kenya-4119572_1280.jpg' alt='Savannah'/>
         <img src='https://cdn.pixabay.com/photo/2015/11/05/23/41/mount-kilimanjaro-1025146_640.jpg' alt='Mount Kilimanjaro'/>
         <img src='https://cdn.pixabay.com/photo/2015/11/06/15/39/safari-1029079_640.jpg' alt='Wildlife'/>
         <img src='https://cdn.pixabay.com/photo/2017/11/06/15/42/leopard-2923963_640.jpg' alt='Leopard'/>
         </div> */}
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
    <div id="aboutSection">
      <div id="imageContainer6">
        <img src='https://cdn.pixabay.com/photo/2015/11/06/15/39/safari-1029079_640.jpg' alt='Wildlife'/>
      </div>
      <div id="aboutInfo">
        <h1>About</h1>
        <p>
          At Maestro Travels, we are passionate about showcasing the rich tapestry
          of tourist destinations that Kenya has to offer. Our mission is to
          inspire and guide travelers to explore the diverse landscapes, cultural
          treasures, and hidden gems that make Kenya a captivating destination.
        </p>
        <NavLink to={"/about"}>
        <button>See more...</button>
        </NavLink>
      </div>
    </div>
    </div>
  )
}
export default Home

