import React, { useState, useRef, useEffect, Fragment } from "react";
import AuthService from "../Services/AuthService";
import Message from "./Message";
import { AuthContext } from "../Context/AuthContext";

const Register = (props) => {
  const dataUser = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    branchoffice: "",
    value: "1",
  };

  const [user, setUser] = useState(dataUser);

  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser(dataUser);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <Fragment>
        <div className="alert alert-danger" role="alert">
    
</div>
      <div className="container pt-5">
        <form className="row" onSubmit={onSubmit}>
          <div className="col-md-8 col-sm-10 col-lg-6 mx-auto my-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Registro</h3>
              </div>
              <div className="card-body">
                <h5>Datos personales</h5>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="first_name">Nombre</label>
                      <input
                        id="first_name"
                        name="firstname"
                        className="form-control"
                        value={user.firstname}
                        type="text"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Apellido</label>
                      <input
                        id="last_name"
                        name="lastname"
                        className="form-control"
                        value={user.lastname}
                        type="text"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="email">Correo electrónico</label>
                      <input
                        id="email"
                        name="email"
                        className="form-control"
                        value={user.email}
                        type="email"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Número de telefono</label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={user.phone}
                    type="text"
                    onChange={onChange}
                  />
                </div>

                <h5>Datos de acceso</h5>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="username">Usuario</label>
                      <input
                        id="username"
                        name="username"
                        className="form-control"
                        value={user.username}
                        type="text"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="password">Contraseña</label>
                      <input
                        id="password"
                        name="password"
                        className="form-control"
                        type="password"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="role">Tipo de usuario</label>
                  <select
                    defaultValue="operator"
                    name="role"
                    onChange={onChange}
                    className="form-control"
                  >
                    <option value="administrator">Administrador</option>
                    <option value="operator">Operador</option>
                  </select>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Registrar{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Register;
