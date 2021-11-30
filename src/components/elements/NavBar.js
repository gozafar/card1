import react from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contack Book
          </Link>

          <div>
            <Link
              to="/contacts/add"
              className="btn btn-light navbar-nav ml-auto"
            >
              Create Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
