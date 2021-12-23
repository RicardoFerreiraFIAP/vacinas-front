import Input from "./Input";

export default function Formulario() {
  const campos = {
    inputNome: {
      label: "Nome Completo",
      inputType: "text",
      values: [],
    },
    inputNascimento: {
      label: "Data de Nascimento",
      inputType: "text",
      values: [],
    },
    inputEndereco: {
      label: "Endereço",
      inputType: "text",
      values: [],
    },
    inputTelefone: {
      label: "Telefone para contato",
      inputType: "text",
      values: [],
    },
    inputSexo: {
      label: "Sexo",
      inputType: "text",
      values: [],
    },
    inputNomedoPai: {
      label: "Nome do Pai",
      inputType: "text",
      values: [],
    },
    inputNomedaMae: {
      label: "Nome da Mãe",
      inputType: "text",
      values: [],
    },
    inputGrupoPrioritario: {
      label: "Grupo Prioritário",
      inputType: "radio",
      values: ["Sim", "Não"],
    },
  };
  return (
    <div className="container">
      <h1 className="display-4 font-weight-normal" id="formucadastro">
        <b>Formulário de cadastro</b>
      </h1>
      <form className="d-flex flex-column align-items-center gap-3">
        {Object.entries(campos).map(([key, info]) => {
          const label = info.label;
          const inputType = info.inputType;
          const inputId = key;
          const inputName = inputType == "radio" ? "prioridade" : null;
          const inputValues = info.values;
          return (
            <Input
              key={inputId}
              label={label}
              inputType={inputType}
              inputId={inputId}
              inputName={inputName}
              inputValues={inputValues}
            />
          );
        })}

        <button className="btn btn-warning d-inline-block" id="btn">
          Enviar Formulário
        </button>
      </form>
    </div>
  );
}
