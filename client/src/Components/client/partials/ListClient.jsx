import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
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
    <Fragment>
      <Container>
        <Table className= "table table-hover">
          <thead>
            <th>#</th>
            <th>Nombre</th>
            <th>Provincia</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {clients.map((clients) => (
              
                  
                    <ClientsItem key={clients._id} clients={clients} />
                
             
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal>
        <ModalHeader>
          <div>
            <h3>Insertar registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nombre</label>
            <input className="form-control" name="nombre" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Provincia</label>
            <input className="form-control" name="provincia" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Ciudad</label>
            <input className="form-control" name="ciudad" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Dirección</label>
            <input className="form-control" name="direccion" type="text" />
          </FormGroup>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ListClient;
