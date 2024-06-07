import { useState } from "react"; /* se agrega automatico useState */
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega */
import { Form, Button } from "react-bootstrap";

/* componente de funcion Formulario con dos props */
const Formulario = ({ onAgregarColaborador, setError }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  /* al escribir en el input del formulario, cuando un cambio en los campos, actualiza el estado */
  /* con spread para mantener los valores existentes y solo actualizar el campo cambiado */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  /* al enviar el formulario, primero previene el comportamiento, verifica campos llenos */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !colaborador.nombre ||
      !colaborador.correo ||
      !colaborador.edad ||
      !colaborador.cargo ||
      !colaborador.telefono
    ) {
      setError("Completa todos los campos  !");
      return;
    }
    onAgregarColaborador(colaborador); /* agrega nuevo colaborador */
    /* resetea los valores del estado a estado inicial */
    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  /* se llama al enviar el formulario */
  return (
    <Form onSubmit={handleSubmit} className="w-75 mb-2">
      <Form.Group>
        <Form.Control
          type="text"
          className="form-control-sm mb-3"
          name="nombre"
          value={colaborador.nombre}
          onChange={handleChange}
          placeholder="Nombre del colaborador"
        />

        <Form.Control
          type="email"
          className="form-control form-control-sm mb-2"
          name="correo"
          value={colaborador.correo}
          onChange={handleChange}
          placeholder="Email del colaborador"
        />

        <Form.Control
          type="number"
          className="form-control form-control-sm mb-2"
          name="edad"
          value={colaborador.edad}
          onChange={handleChange}
          placeholder="Edad del colaborador"
        />

        <Form.Control
          type="text"
          className="form-control form-control-sm mb-2"
          name="cargo"
          value={colaborador.cargo}
          onChange={handleChange}
          placeholder="Cargo del colaborador"
        />

        <Form.Control
          type="text"
          className="form-control form-control-sm mb-2"
          name="telefono"
          value={colaborador.telefono}
          onChange={handleChange}
          placeholder="Telefono del colaborador"
        />
        <Button type="submit" className="btn btn-primary btn-sm mt-2 w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};
export default Formulario;
