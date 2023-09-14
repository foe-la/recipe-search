import React from "react";
import "./RecipeDisplay.css"
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  RecipeDisplay ({products}) {
    //fuction to return loaded JSX
    const loaded = () => {
    //The component must return some JSX
    return (
    <>
    <div className="product-content-container">
    {products.map((product) => {
        return (
            
          <div className="productContent">
            <p>{product?.title}</p>
            <img className="productImage" src={product?.image} />
          </div>
          
        )
      })}
    {/* <h1> {products.Title} </h1>
    <img src={products.image} alt={products.id} /> */}
    </div>
    </>
    );
  };
  //function to return loading JSX
  const loading = () => {
    return <h1> No Recipe to Display</h1>;
  };
  //Ternary operator to determine which JSX function will return
  return products ? loaded() : loading();
};
  
  // export the component to use it in other files