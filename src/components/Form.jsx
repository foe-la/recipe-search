import React from "react";
import { useState, useEffect } from "react";
import "./Form.css"

function Form ({findRecipe}) {
    //State to hold the data of form
    // const [formData, setFormData] = useState({
    //     searchterm: "",
    // });
    const [formData, setFormData] = useState("");
    //handleChange - updates formData when the input changes
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        // setFormData({ formData.searchterm: event.target.value });
        setFormData(event.target.value);

    };
    // console.log(formData);
    const handleSubmit = (event) => {
        //prevent page form refreshing
        event.preventDefault();
        //pass the search term to findRecipe prop
        findRecipe(formData);
    };

    //The component must return some JSX
    return (
        <div className="search-container">
    <form className="recipeSearch" onSubmit={ handleSubmit }>
        <input className="formInput"
        type="text" 
        name="recipeName"
        onChange={ handleChange }
        value={formData}
        />
        <button className="formButton">Explore</button>
    </form>
    </div>
    )
};

export default Form; 