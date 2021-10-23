import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import AddProducts from './components/AddProducts/AddProducts';
import UpdateProducts from './components/UpdateProducts/UpdateProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/products/add">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/products/update/:id">
              <UpdateProducts></UpdateProducts>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
