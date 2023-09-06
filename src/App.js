import './App.css';
import Form from './components/Form';

function App() {

  const findRecipe = (e) => {
    // const recipeName = e.target.value;
    e.preventDefault();
    console.log("recipeName");
  }
  return (
    <div className="App">
      <header className="App-Name">
        <h1> Recipe Finder</h1>
      </header>
      <Form findRecipe={ findRecipe } />
    </div>
  );
}

export default App;
