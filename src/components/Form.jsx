import React from "react";

function Form ({findRecipe}) {
    return (
    <form className="recipeSearch" onSubmit={(e) => findRecipe(e) }>
        <input type="text" name="recipeName"/>
        <button>Explore</button>
    </form>
    )
};

export default Form; 