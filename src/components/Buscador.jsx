import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Buscador = ({ colaboradores, setFilteredColaboradores }) => {
  const [query, setQuery] =
    useState(""); /* para manejar el estado de busqueda, inicialmente vacia */

  const handleChange = (e) => {
    const searchText =
      e.target.value.toLowerCase(); /* se convierte a minuscula */
    setQuery(searchText); /* se actualiza el estado con valor de input */
    /* se hace filtro con verificación */
    const filtered = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(searchText) ||
        colaborador.correo.toLowerCase().includes(searchText) ||
        colaborador.edad.toString().includes(searchText) ||
        colaborador.cargo.toLowerCase().includes(searchText) ||
        colaborador.telefono.includes(searchText)
      );
    });
    setFilteredColaboradores(filtered); /* actualiza la lista */
  };

  /* se vincula el valor del input con el estado query y se llama a handleChange al cambiar el valor */
  return (
    <div className="mb-2 w-25">
      <Form.Control
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Busca un colaborador"
        className="form-control-sm"
      />
    </div>
  );
};

export default Buscador;
