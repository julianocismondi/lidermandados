import React from "react";
import ClientService from "../../../Services/ClientService";
import { Fragment,useEffect, useState } from "react";


const ListClient = (props) => {
  const [clients, setClients] = useState([]);
  

  useEffect(() => {
    ClientService.getClients().then((data) => {
      setClients(data.clients);
    });
  }, []);

  return (
    <Fragment>
      <table className="table table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Provincia</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Dirección</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              {clients.map((client) => {
                return  clients;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListClient;
