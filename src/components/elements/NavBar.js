import react from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a href="" className="navbar-brand">
            Contack Book{" "}
            <div>
              <a href="" className="btn btn-light navbar-nav ml-auto">
                Create Contact
              </a>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
