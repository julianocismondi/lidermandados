import React, { Fragment } from "react";
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

const data = [
  {
    id: 1,
    nombre: "Juan",
    provincia: "Misiones",
    ciudad: "Oberá",
    direccion: "100 hectareas",
  },
];
const ListClient = (props) => {
  const state = {
    data: data,
    openmodal: false,
  };
 const mostrarModal = () =>{
      state.openmodal = true;
  }
  return (
    <Fragment>
        <Container>
        <Button color="primary" onClick={mostrarModal}> Nuevo Cliente</Button>
      <Table>
        <thead>
          <th>Id</th>
          <th>Nombre</th>
          <th>Provincia</th>
          <th>Ciudad</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </thead>

        <tbody>
          {state.data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.provincia}</td>
              <td>{elemento.ciudad}</td>
              <td>{elemento.direccion}</td>
              <td>
                <Button color="primary">Editar</Button> {"  "}
                <Button color="danger">eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        </Container>

        <Modal isOpen={state.openmodal}>
            <ModalHeader>
                <div>
                    <h3>Insertar registro</h3>
                </div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label>Nombre</label>
                    <input className="form-control" name="nombre" type="text"/>
                </FormGroup>
                <FormGroup>
                    <label>Provincia</label>
                    <input className="form-control" name="provincia" type="text"/>
                </FormGroup>
                <FormGroup>
                    <label>Ciudad</label>
                    <input className="form-control" name="ciudad" type="text"/>
                </FormGroup>
                <FormGroup>
                    <label>Dirección</label>
                    <input className="form-control" name="direccion" type="text"/>
                </FormGroup>
            </ModalBody>
        </Modal>
      
    </Fragment>
  );
};

export default ListClient;
