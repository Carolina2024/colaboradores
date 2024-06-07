import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

/* tres propiedades */
const Alerta = ({ message, type }) => {
  /* si es falso retorna null */
  if (!message) return null;

  const alertClass = type === "success" ? "success" : "danger";

  return (
    <Alert
      variant={alertClass}
      className="mt-2 w-75 small">
      {message}
    </Alert>

  );
};

export default Alerta;
