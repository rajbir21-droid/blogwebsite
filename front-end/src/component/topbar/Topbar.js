import { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light colru">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <span className="ff">Blog</span>
    <span className="ff1">Scope</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="link" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="link" to="/write">Write</Link>
        </li>
        <li className="nav-item la" onClick={handleLogout}>
          {user && "Logout"}
        </li>
      </ul>
      <div className="topRight">
        {user ? (
          <Link className="showcase" to="/settings">
          {`Welcome,${user.username}👋`}
          </Link>
        ) : (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}
