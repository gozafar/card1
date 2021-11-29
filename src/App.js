import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/elements/NavBar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="py-3">
            {" "}
            <Contacts />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
