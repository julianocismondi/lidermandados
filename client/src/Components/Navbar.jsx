import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const admin = "administrator";
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };
  const unauthenticatedNavBar = () => {
    return (
      <Fragment>
        {/* <Link to="/" className="btn btn-primary mx-2">
          <li>Inicio</li>
        </Link>

        <Link to="/register" className="btn btn-primary mx-2">
          <li>Registrarse</li>
        </Link> */}
      </Fragment>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <Fragment>
        <Link to="/" className="btn btn-primary">
          <li>Inicio</li>
        </Link>

        <Link to="/todos" className="btn btn-primary">
          <li>Todos</li>
        </Link>

        <Link to="/client" className="btn btn-primary">
          <li>Client</li>
        </Link>

        {user.role === admin ? (
          <Link to="/admin" className="btn btn-primary">
            <li>Admin</li>
          </Link>
        ) : null}

        <button
          type="button"
          className="btn btn-danger"
          onClick={onClickLogoutHandler}
        >
          Cerrar Sesion
        </button>
      </Fragment>
    );
  };

  return (
    <nav>
      <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/">
          <div className="navbar-brand">Lider Mandados</div>
        </Link>
        <ul id="nav-mobile" className="navbar-nav mr-sm-2">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
