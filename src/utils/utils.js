export function getFormData() {
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

  return data;
}

export function formatData(data) {
  const dataIsInObjectFormat = !Array.isArray(data);
  return (
    <ul>
      {dataIsInObjectFormat
        ? renderUserInfo(JSON.parse(JSON.stringify(data)))
        : data.map(renderUserInfo)}
    </ul>
  );
}

function renderUserInfo(userInfo) {
  const { name, phone, email, username, website, address, company, id } =
    userInfo;
  return (
    <>
      <li>Nome Completo: {name} </li>
      <li>Data de Nascimento: {company.name} </li>
      <li>Endereço: {address.street} </li>
      <li>Telefone para Contato: {phone} </li>
      <li>Sexo: {email} </li>
      <li>Nome do Pai: {username} </li>
      <li>Nome da Mãe: {website} </li>
      <li>Grupo Prioritário: {id} </li>
    </>
  );
}
