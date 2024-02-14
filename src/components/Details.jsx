import React from 'react'
import { useParams } from 'react-router-dom'

function Details({jsonData}) {

    // call useParams to access the `params` from the url
    const {id} = useParams();
    console.log(id)
    console.log(jsonData)

    const destinationDetails = jsonData.find( data => data.id === parseInt(id))
    console.log(destinationDetails.services.images)

  return (
    <div>
        <h3>Name: {destinationDetails.name} </h3>
        <img src={destinationDetails.image} alt='image' />
        <h3>Location: {destinationDetails.location} </h3>
        <h4> Description: {destinationDetails.description} </h4>
        <h4>Reviews:</h4>
        <ul>
            {destinationDetails.reviews.map((review) =>{
                return (
                    <li>{review}</li>
                )
            })}
        </ul>
        <div>
            <h3>Services</h3>
            <h4>Accomodation: {destinationDetails.services.accomodation}</h4>
    {/* Map and render the array of images */}
            { destinationDetails.services.images.map((image) => {
                return (
                    <div>
                        <img src={image}/>
                    </div>
                )
            })}
    
    {/* Map and render the array of other services */}
            
            { destinationDetails.services.otherServices.map((service) => {
                return (
                    <p>{service}</p>
                )
            })   
            }


        </div>
    </div>
  )
}

export default Details