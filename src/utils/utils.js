/* eslint-disable eqeqeq */
export function getFormData(form) {
  const formElements = form.elements;
  const data = getFormInputData(formElements);

  function getFormInputData(formElements) {
    const nome = formElements.nome.value;
    const cpf = formElements.cpf.value.replace(/\D/g, "");
    const dataDeNascimento = formElements.nascimento.value;
    const endereco = formElements.endereco.value;
    const telefone = formElements.telefone.value;
    const sexo = formElements.sexo.value;
    const nomeDoPai = formElements.pai.value;
    const nomeDaMae = formElements.mae.value;
    const grupoPrioritario = formElements.prioridade.value;

    return {
      nome,
      cpf,
      data_nasc: dataDeNascimento,
      endereco,
      telefone,
      sexo,
      nome_pai: nomeDoPai,
      nome_mae: nomeDaMae,
      grupo_prioridade: grupoPrioritario,
    };
  }

  return data;
}

export function formatData(data) {
  const dataIsInObjectFormat = !Array.isArray(data);

  return dataIsInObjectFormat ? (
    <ul>{renderUserInfo(JSON.parse(JSON.stringify(data)))}</ul>
  ) : (
    <div>{data.map(renderUserInfo)}</div>
  );
}

function renderUserInfo(userInfo) {
  const {
    id,
    nome: name,
    cpf,
    data_nasc: birthDate,
    endereco: address,
    telefone: phone,
    sexo: gender,
    nome_pai: father,
    nome_mae: mother,
    grupo_prioridade: priorityGroup,
  } = userInfo;
  return (
    <ul key={id}>
      <h5>ID: {id}</h5>
      <li>Nome Completo: {name} </li>
      <li>CPF: {cpf} </li>
      <li>Data de Nascimento: {birthDate} </li>
      <li>Endereço: {address} </li>
      <li>Telefone para Contato: {phone} </li>
      <li>Sexo: {gender} </li>
      <li>Nome do Pai: {father} </li>
      <li>Nome da Mãe: {mother} </li>
      <li>Grupo Prioritário: {priorityGroup} </li>
      <hr />
    </ul>
  );
}

export function validateForm(formElements) {
  const cpf = formElements.cpf.value;
  const cpfIsValid = validarCPF(cpf);
  return cpfIsValid ? true : false;
}

export function validarCPF(cpf) {
  const cleanedCpf = cpf.replace(/[^\d]+/g, "");
  if (cleanedCpf == "") return false;
  // Elimina CPFs invalidos conhecidos
  if (
    cleanedCpf.length != 11 ||
    cleanedCpf == "00000000000" ||
    cleanedCpf == "11111111111" ||
    cleanedCpf == "22222222222" ||
    cleanedCpf == "33333333333" ||
    cleanedCpf == "44444444444" ||
    cleanedCpf == "55555555555" ||
    cleanedCpf == "66666666666" ||
    cleanedCpf == "77777777777" ||
    cleanedCpf == "88888888888" ||
    cleanedCpf == "99999999999"
  )
    return false;
  // Valida 1o digito
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cleanedCpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cleanedCpf.charAt(9))) return false;
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cleanedCpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cleanedCpf.charAt(10))) return false;
  return true;
}
