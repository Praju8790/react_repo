import Header from './containers/Header';
import './App.css';
import {Switch} from "react-router"
import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
       <Switch>
       <Route path="/"exact Component={ProductListing}/>
      <Route path="/Product/:productId" Component={ProductDetail}/>
      <Route >404 Not Found!</Route>
       </Switch>
    
      </Router>


     
    </div>
  );
}

export default App;
