import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import RecipeDisplay from './components/RecipeDisplay';



//Function to findRecipe
function App() {

//variable with apiKey
const apiKey = "90a7c75671e24ed79b3fd5202b9cb83b";

//State to hold recipe data
const [products, setProducts] = useState([null]);

// console.log(products) 
//   return (
//     <div>
//       <>
//       {products.map((products) => {
//         return (
//           <div>
//             <RecipeDisplay />
//           </div>
//         )
//       })}
//       </>
//     </div>
//   )
//     }  

console.log(products);
  const findRecipe = async (searchTerm) => {
    // const state = {
    //   products: []
    // };
    // const recipeName = e.target.value;
    // e.preventDefault();
   try {
    // const apiRecipe = await fetch(`https://api.spoonacular.com/food/products/search?query=${searchTerm}&apiKey=${apiKey}`); 

    const apiRecipe = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`); 

    //Parse JSON response into a javascript object
    const recipeData = await apiRecipe.json();
    //set the product state to the recipe
    setProducts(recipeData.results);
    // this.state({products: recipeData.products});
    // console.log(this.state.products);
    // console.log(recipeData.products[0].image);
   
  } catch(e){
    console.error(e)
  }
}

  useEffect(() => {
    findRecipe("Yogurt");
  }, []);

  return (
    <div className="App">
      <header className="App-Name">
        <h1> Dinner Suggestions </h1>
      </header>
      <p> Need help on deciding what to cook? Search a food and let Dinner Suggestions be your tool. </p>
      <p>Type any food of choice in the search and explore your dinner options!</p>
      <Form findRecipe={ findRecipe } />
      <RecipeDisplay products={ products } />
      {/* { this.state.products.map((product) => {
        return <p>{ product.title }</p>
      })  } */}
      <footer></footer>
      
    </div>
  );
    }   

//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
//90a7c75671e24ed79b3fd5202b9cb83b

export default App;
