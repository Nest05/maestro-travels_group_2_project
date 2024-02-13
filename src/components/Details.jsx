import React from 'react'
import { useParams } from 'react-router-dom'

function Details({jsonData}) {

    // call useParams to access the `params` from the url
    const {id} = useParams();

    const myDestination = jsonData.find(destination => destination.id === id)
    console.log(jsonData.find(destination => destination.id === id))
    

  return (
    <div>
        <h3>Name: {myDestination.name} </h3>
        <img src={myDestination.image} alt='image' />
        <h3>Location: {myDestination.location} </h3>
        <h4> Description: {myDestination.description} </h4>
        <p>Reviews</p>
        <ul>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
        </ul>
    </div>
  )
}

export default Details