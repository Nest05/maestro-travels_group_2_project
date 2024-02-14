import React, { useState, useEffect} from "react";
const url = "http://localhost:3000/destinations"

/*
- Fetches the reviews from the server and renders them
- Handles errors in fetch
- Manages states of isLoading, error, and  reviews
*/ 
const DisplayReviews = ({ facilityId }) =>{
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReviews = async () =>{
            setIsLoading(true)
            try{
                const response = await fetch(`${url}/${facilityId}`)
                const data = await response.json()
                setReviews(data.reviews);

            }catch(err){
                console.log(err);
                setError("Failed to fetch the reviews!");

            }finally{
                setIsLoading(false);
            }
        }
        fetchReviews()

        // // Fetch the reviews after every 10 seconds
        // const interval = setInterval(fetchReviews, 20000);

        // // Clean the interval to avoid memory leaks
        // return () => clearInterval(interval)
    }, [facilityId])

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

