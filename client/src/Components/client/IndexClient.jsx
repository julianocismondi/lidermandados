import React, { Fragment } from "react";
import EditClient from "./partials/EditClient";
import ListClient from "./partials/ListClient";

const IndexClient = props => {

  return (
    <Fragment>
      <div className="container mt-4 pt-4">
       
        <div className="row">
          <div className="col-md-8">
            <ListClient></ListClient>
          </div>
          <div className="col-md-4">
            <EditClient></EditClient>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexClient;
