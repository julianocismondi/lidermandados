import React from "react";
const Client = () => {
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
                <h3 className="card-title">Nuevo cliente</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    type="text"
                    value={}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Contraseña</label>
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
            {message ? <Alerts message={message} /> : null}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Client;
