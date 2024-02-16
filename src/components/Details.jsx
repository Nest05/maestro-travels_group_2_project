import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './details.css';

function Details({jsonData}) {

    // call useParams to access the `params` from the url
    const {id} = useParams();

    const destinationDetails = jsonData.find( data => parseInt(data.id) === parseInt(id));

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className="detail">
        <h3>{destinationDetails && destinationDetails.name} </h3>
        <img src={destinationDetails && destinationDetails.image} alt='Destination look' />
        <h3>Location: {destinationDetails && destinationDetails.location} </h3>
        <h4> Description: {destinationDetails && destinationDetails.description} </h4>
        <h4>Reviews:</h4>
        <ul>
            {destinationDetails && destinationDetails.reviews.map((review) =>{
                return (
                    <li>{review}</li>
                )
            })}
        </ul>
        <div>
            <h3>Services</h3>
            <h4>Accomodation: {destinationDetails && destinationDetails.services.accomodation}</h4>
    {/* Map and render the array of images */}
            <Slider {...settings}>
            { destinationDetails && destinationDetails.services.images.map((image) => {
                return (
                    <div className="slide">
                        <img src={image} alt='Destination look'/>
                    </div>
                )
            })}
            </Slider>
    {/* Map and render the array of other services */}
            <h3>We Offer The Following Services at {destinationDetails && destinationDetails.name}</h3>
            <ol>
            { destinationDetails && destinationDetails.services.otherServices.map((service) => {
                return (
                    <li>{service}</li>
                )
            })   
            }
            </ol>

        </div>
    </div>
  )
}

export default Details