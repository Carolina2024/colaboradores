import { useState } from "react";
import { BaseColaboradores } from "./utils/BaseColaboradores"; /* se agrega */
import Listado from "./components/Listado"; /* se agrega import */
import Formulario from "./components/Formulario"; /* se agrega import */
import Buscador from "./components/Buscador"; /* se agrega import */
import Alerta from "./components/Alert"; /* se agrega import */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega */
import { Container, Row, Col } from "react-bootstrap";

function App() {
  /* variables de estado con hook para añadir estadosa los componentes de funcion con valor y funcion para actualizar */
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  /* para agregar nuevo colaborador a la lista con reseto de los mensajes */
  const agregarColaborador = (nuevoColaborador) => {
    setAlertMessage("");
    setAlertType("");

    /* verifica campos completados */
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlertMessage("Completa todos los campos !");
      setAlertType("danger");
      return;
    }

    /* se agrega nuevo colaborador a la lista con mensaje de alerta con setTimeout para limpíar mensaje a 3seg */
    setColaboradores([
      ...colaboradores,
      { id: colaboradores.length + 1, ...nuevoColaborador },
    ]);
    setAlertMessage("Colaborador agregado !");
    setAlertType("success");

    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
  };

  /* funcion para eliminar un colaborador segun su id con metodo filter para crear nueva lista */
  const eliminarColaborador = (id) => {
    /* eliminar colaborador con id */
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  return (
    <Container className="p-4">
      <h2 className="text-start">Lista de Colaboradores</h2>
      <Row className="mt-2">
        <Col className="small">
          <Buscador
            colaboradores={colaboradores}
            setFilteredColaboradores={setFilteredColaboradores}
          />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col lg={8} xs={6} className="mb-5 w-70">
          <Listado
            colaboradores={
              filteredColaboradores.length > 0
                ? filteredColaboradores
                : colaboradores
            }
            eliminarColaborador={eliminarColaborador}
          />
        </Col>
        <Col ms-3 lg={4} xs={8} className="w-30">
          <h4 className="text-start mb-3">Agregar Colaborador</h4>
          <Formulario
            onAgregarColaborador={agregarColaborador}
            setError={setAlertMessage}
          />
          <Alerta message={alertMessage} type={alertType} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;