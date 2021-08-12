import React from "react";
import { ModalContext } from "../context/ModalContext";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const { informacion } = props;

  const mostarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={informacion[`strIngredient${i}`]}>
            {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {informacion.strDrink}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Instrucciones</h3>
        <p>{informacion.strInstructions}</p>
        <img
          className="img-fluid my-4 text-center"
          src={informacion.strDrinkThumb}
          alt={informacion.strDrink}
        />
        <h3>Ingredientes y cantidades</h3>
        <ul>{mostarIngredientes(informacion)}</ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Receta = ({ receta }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const { informacion, setIdReceta, setInformacion } = React.useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-info"
            onClick={() => {
              setIdReceta(receta.idDrink);
              setModalShow(true);
            }}
          >
            Ver Receta
          </button>

          <MyVerticallyCenteredModal
            show={modalShow}
            informacion={informacion}
            onHide={() => {
              setModalShow(false);
              setInformacion({})
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Receta;
