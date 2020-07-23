import React, { useState, Fragment } from "react";

const EditClient = (props) => {
  const dataClient = {
    name: "",
    province: "",
    city: "",
    address: "",
  };

  const [client, setClients] = useState(dataClient);

  const onChange = (e) => {
    setClients({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <form>
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  type="text"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="province">Provincia</label>
                <input
                  id="province"
                  name="province"
                  className="form-control"
                  type="text"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  id="city"
                  name="city"
                  className="form-control"
                  type="text"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="2"
                  onChange={onChange}
                ></textarea>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col text-center">
                    <button className="btn btn-primary mr-2" type="submit">
                      Guardar
                    </button>
                  
                  
                    <button className="btn btn-danger ml-2" type="reset">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </form>
    </Fragment>
  );
};

export default EditClient;
