import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Fragment>
      <div className="container min-vh-100">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">Bienvenido</h1>
                <div className="row">
                  <div className="col-12 text-center text-light">
                    <Link to="/login" className="btn btn-primary">
                      Iniciar sesión
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Home;
