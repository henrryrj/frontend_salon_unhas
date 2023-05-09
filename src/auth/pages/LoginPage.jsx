import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import Swal from "sweetalert2";
// import { chekingAuthentication, startLogin } from "../../store/auth";

import "../../auth/login.css";
const formValidations = {
  pass: [(value) => value.length >= 1, "Ingrese su contraseña"],
  email: [(value) => value.length >= 1, "Email requerido"],
};
export const LoginPage = () => {
  const { email, pass, onInputChange, formValidation, isFormValid } = useForm(
    {
      email: "",
      pass: "",
    },
    formValidations
  );

  const onLogin = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      const keysError = Object.values(formValidation);
      keysError.map((nodo) => {
        if (nodo != null) {
          return Swal.fire({
            title: "Login",
            text: `${nodo}`,
            icon: "error",
            button: "Aceptar",
          });
        }
      });
    } else {
      console.log("LOGUEADO");
    }
  };
  return (
    <>
      <div className="container login-container ">
        <div className="row justify-content-md-center">
          <div className="col-sm-6 md-auto login-form-1">
            <h3>Ingreso</h3>
            <form onSubmit={onLogin}>
              <div className="form-group mb-2">
                <input
                  type="text"
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
              <div hidden={""} className="bg-white rounded">
                <h6>{}</h6>
              </div>

              <div className="d-grid cap-2">
                <input type="submit" className="btnSubmit" value={"Login"} />
              </div>
              <div className="row justify-end">
                <Link
                  to="/auth/register"
                  className="text-slate-600 text-end block"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <span className="hover:text-slate-800">
                    Crear una nueva Cuenta
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
