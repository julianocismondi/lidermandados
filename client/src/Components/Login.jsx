import React, { useState, useContext, useEffect, useRef, Fragment } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Alerts from "./Alerts";

const Login = (props) => {
    const dataUser = {
        username: "",
        password: ""
      };
  const [user, setUser] = useState(dataUser);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser(dataUser);
  };

  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/todos");
      } else{
        setMessage(message);
        timerID = setTimeout(() => {
            props.history.push("/login");
          }, 2000)
      } 
    });
  };

  return (
    <Fragment>
      <div className="container min-vh-100">
        <form
          className="row vh-100 justify-content-center align-items-center"
          onSubmit={onSubmit}
        >
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Inicio de sesión</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <input
                    id="username"
                    name="username"
                    className="form-control"
                    type="text"
                    value={user.username}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    className="form-control"
                    type="password"
                    value={user.password}
                    autoComplete="new-password"
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            {message ? <Alerts message={message}/> : null}
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Login;
