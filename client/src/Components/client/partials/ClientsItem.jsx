import React from "react";

const ClientsItem = (props) => {
  return (
    <tr>
        <td>{props.clients.id}</td>
        <td>{props.clients.name}</td>
        <td>{props.clients.province}</td>
        <td>{props.clients.city}</td>
        <td>{props.clients.address}</td>
        <td>
            <a href={"/api/client/delete/"+props.clients._id+"?_method=DELETE"} className=" btn btn-primary">
            Editar
            </a>
            
            <form method="POST" action={"/api/client/delete/"+props.clients._id+"?_method=DELETE"}>
                <button type="submit" className="btn btn-danger">Eliminar</button>
            </form>
        </td>
    </tr>
    );
};

export default ClientsItem;
