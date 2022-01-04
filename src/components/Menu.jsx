import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Link } from "react-router-dom";
import { formatData } from "../utils/utils";

export default function Menu(props) {
  const { patientInfo } = props;
  const MySwal = withReactContent(Swal);

  return (
    <nav
      className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      id="fundohead2"
    >
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal f-size-40 text-white">
          <b>Cadastro</b>
        </h1>
        <button
          type="button"
          className="btn btn-warning"
          id="btn"
          onClick={handleGetPatientInfo}
        >
          Já sou Cadastrado
        </button>
        <Link to="/cadastro" className="btn btn-warning" id="btn">
          População Geral
        </Link>
        <Link to="/cadastro" className="btn btn-warning" id="btn">
          Profissionais do Transporte
        </Link>
        <Link to="/cadastro" className="btn btn-warning" id="btn">
          Profissionais da Educação
        </Link>
        <button type="button" className="btn btn-warning" id="btn">
          Pontos de Vacinação
        </button>
      </div>
    </nav>
  );

  function handleGetPatientInfo(event) {
    const recordsExist = patientInfo.length > 0;

    if (!patientInfo) {
      MySwal.fire({
        title: <p>Oops! Aconteceu um erro!</p>,
        text: "Não foi possível recuperar seus dados. Por favor, tente novamente.",
        icon: "error",
      });

      return false;
    } else if (recordsExist) {
      const formattedResponseInHtml = formatData(patientInfo);
      MySwal.fire({
        title: <p>Dados do Paciente</p>,
        html: formattedResponseInHtml,
        icon: "info",
      });
      return true;
    } else {
      MySwal.fire({
        title: <p>Dados do Paciente</p>,
        text: "Ainda não foram cadastradas informações.",
        icon: "info",
      });
      return false;
    }
  }
}
