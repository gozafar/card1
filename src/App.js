import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/elements/NavBar";
// import Contacts from "./components/contacts/Contacts";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./redux/Store";
import AddContacts from "./components/contacts/AddContacts";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContacts} />

                {/* <Contacts /> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
