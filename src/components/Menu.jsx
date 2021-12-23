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
        <button type="button" class="btn btn-warning" id="btn">
          População Geral
        </button>
        <button type="button" class="btn btn-warning" id="btn">
          Profissionais do Transporte
        </button>
        <button type="button" class="btn btn-warning" id="btn">
          Profissionais da Educação
        </button>
        <button type="button" class="btn btn-warning" id="btn">
          Pontos de Vacinação
        </button>
      </div>
    </nav>
  );
}
