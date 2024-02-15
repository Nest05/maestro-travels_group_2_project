import React, { useState } from "react";
import './destination.css';
// import DisplayReviews from "./DisplayReviews";
const url = "http://localhost:3000/destinations";

/*
- User fills out a form with details of the tourist destination
- User submits the data to be posted to the server
- Function does a POST request to the server
- Handles failure or success of the request
*/ 
const AddDestinationForm = ({ tourGuide }) =>{

    /*
    - Handle state by storing all user interactivities
    - Reset form as soon as the user submits the data
    */ 
    const [formData, setFormData] = useState({

        name: "",
        tourGuide: tourGuide,
        location: "",
        image: "",
        description: "",
        reviews:[],
        services: {
            images:[],
            Accomodation: "",
            otherServices: []
        }
    })
    const [error, setError] = useState("");
    // const [facilityGuide, setFacilityGuide] = useState(null)

    /*
    - Handle change by targetting the various names and values of the input
    - Updates state of formData
    */ 
    const handleChange = event =>{
        const {name, value} = event.target;
        setFormData(prevState =>({
            ...prevState,
            [name]: value,
        }));
    }

    // Handles select change
    const handleSelectChange = event =>{
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                [name]: value 
            }
        }));
    }

    /*
    - Creates a new input dynamically
    - Enables formData.services.images to accept more than one string in the array
    */ 
    const handleAddImage = () => {
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                images: [...prevState.services.images, ""]
            }
        }));
    }

    /*
    - Dynamically creates a new input for user 
    - Targets the value of the input and adds to array
    */ 
    const handleImageChange = (index, value) => {
        const newImages = [...formData.services.images];
        newImages[index] = value;
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                images: newImages
            }
        }));
    }

    const handleAddService = () =>{
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                otherServices: [...prevState.services.otherServices, ""]
            }
        }));
    }

    /*
    - Dynamically creates a new input for user 
    - Targets the value of the input and adds to array
    */ 
    const handleServiceChange = (index, value) =>{
        const newService = [...formData.services.otherServices];
        newService[index] = value;
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                otherServices: newService
            }
        }));
    }

    /*
    - Makes post request to the server
    - Handle various responses from the server
    */ 
    const postData = async () =>{
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData)
            })
            if (response.ok){
                // const data = await response.json();
                // setFacilityGuide(data.tourGuide)
                alert("Successful!");
                setFormData({

                    name: "",
                    tourGuide: "",
                    location: "",
                    image: "",
                    description: "",
                    reviews:[],
                    services: {
                        images:[],
                        Accomodation: "",
                        otherServices: []
                    }
                })
            }else{
                throw new Error("Failed to post data!");
            }

        }catch(error){
            console.error(error)
            setError("There was a problem submitting your data!")
        }
    }
    // Checks if all input areas are filled before submitting data
    const handleSubmit = event =>{
        event.preventDefault();
        if (formData.name.length > 0 &&
            formData.location.length > 0 &&
            formData.image.length > 0 &&
            formData.description.length > 0 &&
            formData.services.images.length > 0 &&
            formData.services.otherServices.length > 0 ) { 
            postData();
        } else {
            setError("Please fill all the input fields")
        }
    }

    return (
        <div className="about destiny">
            <form id="add-destination" onSubmit={handleSubmit} action="submit">
                <label className="label" htmlFor="label">Facility Name</label>
                <br />
                <input 
                    className="add-destination-form"
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter facility name" 
                />
                <br />
                <label className="label" htmlFor="label">Facility Location</label>
                <br />
                <input 
                    className="add-destination-form"
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="Enter facility's location" 
                />
                <br />
                <label className="label" htmlFor="label">Facility Image</label>
                <br />
                <input 
                    className="add-destination-form"
                    type="text" 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    placeholder="Enter facility's image" 
                />
                <br />
                <label className="label" htmlFor="label">Facility Description</label>
                <br />
                <textarea  
                    style={{
                        resize: "vertical",
                        minHeight: "100px"
                    }}
                    id="text-area" 
                    placeholder="Enter your facility description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                >
                </textarea>
                <br />
                <select 
                    name="Accomodation" 
                    id="Accomodation" 
                    onChange={handleSelectChange}
                    value={formData.services.Accomodation}
                >
                    <option value="All">Select Accomodation type</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <br />
                {formData.services.images.map((image, index) => (
                    <div key={index}>
                        <label className="label" htmlFor={`image-${index}`}>Facility Image {index + 1}</label>
                        <br />
                        <input
                            className="add-destination-form"
                            type="text"
                            id={`image-${index}`}
                            name={`image-${index}`}
                            value={image}
                            onChange={e => handleImageChange(index, e.target.value)}
                            placeholder="Enter facility's image"
                        />
                    </div>
                ))}
                <br />
                <button type="button" onClick={handleAddImage}>Add Image</button>
                <br />
                {formData.services.otherServices.map((service, index) => (
                    <div key={index}>
                        <label className="label" htmlFor={`otherServices-${index}`}>Facility Sevices {index + 1}</label>
                        <br />
                        <input
                            className="add-destination-form"
                            type="text"
                            id={`otherServices-${index}`}
                            name={`otherServices-${index}`}
                            value={service}
                            onChange={e => handleServiceChange(index, e.target.value)}
                            placeholder="Enter facility's other services"
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddService}>Add Service</button>
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddDestinationForm;

