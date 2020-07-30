import React, { useState, useEffect } from "react";

import ClientService from "../../../Services/ClientService";
import ClientsItem from "./ClientsItem";

const ListClient = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    ClientService.getClients().then((data) => {
      setClients(data.clients);
    });
  }, []);

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
         
          <th>Nombre</th>
          <th>Provincia</th>
          <th>Ciudad</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((clients) => (
          <ClientsItem key={clients._id} clients={clients} />
        ))}
      </tbody>
      <tfoot>
            <tr>
                
                <th>Nombre</th>
                <th>Provincia</th>
                <th>Ciudad</th>
                <th>Dirección</th>
                <th>Acciones</th>
            </tr>
        </tfoot>
    </table>
  );
};

export default ListClient;
