import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <ProductListing /> */}

        <Switch>
          <Route path="/" component={ProductListing} />
          <Route path="/product/productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
