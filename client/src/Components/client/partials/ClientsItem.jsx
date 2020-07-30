import React from "react";

const ClientsItem = (props) => {
  return (
    <tr>
      <td>{props.clients.name}</td>
      <td>{props.clients.province}</td>
      <td>{props.clients.city}</td>
      <td>{props.clients.address}</td>
      <td>
        <form method="POST" action={"/api/client/"+props.clients._id+"?_method=DELETE"}>
          <button type="submit" className="btn btn-danger mx-2">
          <i className="fas fa-trash-alt"></i>
          </button>

          <a href={"/api/client/edit" + props.clients._id} className="btn btn-primary mx-2">
          <i className="fas fa-pen-square"></i>
          </a>
        </form>
      </td>
    </tr>
  );
};

export default ClientsItem;
