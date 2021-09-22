import './App.css';
import Classexample from './components/Classexample';
import Classexample2 from './components/Classexample2';

function App() {
  return (
    <div className="App">
      <Classexample 
        title = {"Water Bottles"}
        desc = {"Drink 2 cups of water a day!"}
        cost = {2.99}
      />

      <Classexample 
        title = {"Toys"}
        desc = {"Made out of Legos."}
        cost = {10.99}
      />

      <Classexample2 
        title = {"iPad"}
        desc = {"One of Apple's many products."}
        cost = {199.99}
        initialStock = {30}
      />

      <Classexample2 
        title = {"Surface Pro"}
        desc = {"One of Microsofts's many products."}
        cost = {"1,200.99"}
        initialStock = {100}
      />
    </div>
  );
}

export default App;
