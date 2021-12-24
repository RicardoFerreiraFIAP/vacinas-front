export default function getFormData() {
  const form = document.getElementById("cadastro-form");
  const formElements = form.elements;
  const data = getFormInputData(formElements);

  function getFormInputData(formElements) {
    const nomeCompleto = formElements.nome;
    const dataDeNascimento = formElements.nascimento;
    const endereço = formElements.endereco;
    const telefone = formElements.telefone;
    const sexo = formElements.sexo;
    const nomeDoPai = formElements.pai;
    const nomeDaMae = formElements.mae;
    const grupoPrioritario = formElements.prioridade;

    return {
      nomeCompleto,
      dataDeNascimento,
      endereço,
      telefone,
      sexo,
      nomeDoPai,
      nomeDaMae,
      grupoPrioritario,
    };
  }
}
