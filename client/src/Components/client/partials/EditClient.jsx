import React, { useState, Fragment, useContext } from "react";
import ClientService from '../../../Services/ClientService';
import Message from '../../Message';
import { AuthContext } from '../../../Context/AuthContext';

const EditClient = (props) => {
  const dataClient = {
    name: "",
    province: "",
    city: "",
    address: "",
  };

  const [client, setClients] = useState(dataClient);
  const [ message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const onChange = (e) => {
    setClients({ ...client, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setClients({ name: "", province: "", city: "", address: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    resetForm();
    ClientService.postClient(client).then((data) => {
      const { message } = data;
     

      if (message.msgBody === "UnAuthorized") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                className="form-control"
                type="text"
                value={client.name}
                required={true}
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
                required={true}
                value={client.province}
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
                value={client.city}
                required={true}
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
                value={client.address}
                onChange={onChange}
              ></textarea>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-primary mx-2" type="submit">
                    Guardar
                  </button>

                  <button className="btn btn-danger mx-2" onClick={resetForm}>
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      { message ? <Message message={ message }/> : null }
    </Fragment>
  );
};

export default EditClient;
