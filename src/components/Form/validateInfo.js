export default function validateInfo(values) {
  let errors = {};

  if (!values.nombre.trim()) {
    errors.nombre = "Debes ingresar tu nombre";
  }

  if (!values.email) {
    errors.email = "Debes ingresar un email ";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email inválido";
  }

  if (!values.telefono) {
    errors.telefono = "Debes ingresar un telefono";
  }

  if (!values.mensaje) {
    errors.mensaje = "Debes ingresar el mensaje";
  }

  return errors;
}
