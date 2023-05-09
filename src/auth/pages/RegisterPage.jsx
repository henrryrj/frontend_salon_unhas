import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

import "../../auth/login.css";

const formValidations = {
  nombre: [(value) => value.length >= 1, "Nombre requerido"],
  email: [(value) => value.includes("@"), "Introduzca un correo valido"],
  pass: [(value) => value.length >= 6, "min. de 6 Caracteres"],
  pass2: [
    (value, value2) => value.length >= 6 && value2 === value,
    "Su contraseña no coincide",
  ],
};

export const RegisterPage = () => {
  const {
    nombre,
    email,
    pass,
    pass2,
    onInputChange,
    formValidation,
    isFormValid,
  } = useForm(
    {
      nombre: "",
      email: "",
      pass: "",
      pass2: "",
    },
    formValidations
  );

  const onRegister = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      const keysError = Object.values(formValidation);
      keysError.map((nodo) => {
        if (nodo != null) {
          return Swal.fire({
            title: "Register",
            text: `${nodo}`,
            icon: "error",
            button: "Aceptar",
          });
        }
      });
    } else {
      console.log("Registrado");
    }
  };

  return (
    <div className="container login-container content-center">
      <div className="row justify-content-md-center">
        <div className="col-sm-6 md-auto login-form-2 ">
          <h3>Registro</h3>
          <form onSubmit={onRegister}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
                value={nombre}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="pass"
                value={pass}
                onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="pass2"
                value={pass2}
                onChange={onInputChange}
              />
            </div>
            <div hidden={""} className="bg-white rounded">
              <h6>{""}</h6>
            </div>

            <div className="d-grid cap-2">
              <input
                type="submit"
                className="btnSubmit"
                value={"Crear cuenta"}
              />
            </div>
            <div className="row justify-end">
              <Link
                to="/auth/login"
                className="text-white text-end block"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="hover:text-white">
                  ¿Ya tienes cuenta? Ingresar
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
