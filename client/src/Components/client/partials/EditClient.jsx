import React from 'react';
import { Fragment } from 'react';


const EditClient = () => {
  return ( 
    <Fragment>
      
        <form
          className="row vh-100 justify-content-center align-items-center"
         
        >
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Client</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    type="text"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">Provincia</label>
                  <input
                    id="state"
                    name="state"
                    className="form-control"
                    type="text"
                   
                  
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
           
          </div>
        </form>
    </Fragment>
   );
}
 
export default EditClient;