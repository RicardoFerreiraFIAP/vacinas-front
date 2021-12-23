import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      id="fundohead2"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal" id="titlebloco2">
          <b>Cadastro</b>
        </h1>
        <button type="button" class="btn btn-warning" id="btn">
          Já sou Cadastrado
        </button>
        <Link to="/cadastro" class="btn btn-warning" id="btn">
          População Geral
        </Link>
        <Link to="/cadastro" class="btn btn-warning" id="btn">
          Profissionais do Transporte
        </Link>
        <Link to="/cadastro" class="btn btn-warning" id="btn">
          Profissionais da Educação
        </Link>
        <button type="button" class="btn btn-warning" id="btn">
          Pontos de Vacinação
        </button>
      </div>
    </nav>
  );
}
