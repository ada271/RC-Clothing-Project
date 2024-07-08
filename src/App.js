import "./App.scss";
import Header from "./components/header/Header";

import { categories, products } from "./helper/data";

function App() {

  // console.log(products)
  return (
    <div className="App">
      <Header categories={categories}/>
    </div>
  );
}

export default App;