import React, { useState, useEffect} from "react";
import './details.css'
const url = "http://localhost:3000/destinations"

/*
- Fetches the reviews from the server and renders them
- Handles errors in fetch
- Manages states of isLoading, error, and  reviews
*/ 
const DisplayReviews = ({ facilityGuide }) =>{
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReviews = async () =>{
            setIsLoading(true)
            try{
                // Fetch all destinations
                const response = await fetch(url);
                if (response.ok) {
                const destinations = await response.json();
                // Filter destinations by the logged-in tour guide
                const filteredDestinations = destinations.filter(destination => destination.tourGuide === facilityGuide);
                // Extract reviews from these destinations
                const allReviews = filteredDestinations.reduce((acc, destination) => [...acc, ...destination.reviews], []);
                setReviews(allReviews);
                } else {
                throw new Error("Failed to fetch destinations");
                }

            }catch(err){
                console.log(err);
                setError("Failed to fetch the reviews!");

            }finally{
                setIsLoading(false);
            }
        }
        fetchReviews()

        // Fetch the reviews after every 10 seconds
        // const interval = setInterval(fetchReviews, 20000);

        // // Clean the interval to avoid memory leaks
        // return () => clearInterval(interval)
    }, [facilityGuide])

    return (
        <div>
            <h3>Reviews</h3>
                {isLoading 
                ?(
                    <p>Loading reviews...</p>
                ): error
                ?(
                    <p>{error}</p>
                ): reviews && reviews.length > 0
                ?(
                    reviews.map((review, index) => (
                        <div style={{ marginBottom: "10px"}} key={index}>{review}</div>
                    ))
                ): (
                    <p>There are no reviews yet...</p>
                )
                }
        </div>
    )
}

export default DisplayReviews

