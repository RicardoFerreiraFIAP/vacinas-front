import { setPatientInfo } from "../services/api";
import Input from "./Input";

export default function Formulario() {
  const campos = {
    inputNome: {
      label: "Nome Completo",
      inputType: "text",
      name: "nome",
      values: [],
    },
    inputNascimento: {
      label: "Data de Nascimento",
      inputType: "text",
      name: "nascimento",
      values: [],
    },
    inputEndereco: {
      label: "Endereço",
      inputType: "text",
      name: "endereco",
      values: [],
    },
    inputTelefone: {
      label: "Telefone para contato",
      inputType: "text",
      name: "telefone",
      values: [],
    },
    inputSexo: {
      label: "Sexo",
      inputType: "text",
      name: "sexo",
      values: [],
    },
    inputNomedoPai: {
      label: "Nome do Pai",
      inputType: "text",
      name: "pai",
      values: [],
    },
    inputNomedaMae: {
      label: "Nome da Mãe",
      inputType: "text",
      name: "mae",
      values: [],
    },
    inputGrupoPrioritario: {
      label: "Grupo Prioritário",
      inputType: "radio",
      name: "prioridade",
      values: ["Sim", "Não"],
    },
  };
  return (
    <div className="container">
      <h1 className="display-4 font-weight-normal" id="formucadastro">
        <b>Formulário de cadastro</b>
      </h1>
      <form
        className="d-flex flex-column align-items-center gap-3"
        id="cadastro-form"
        onSubmit={setPatientInfo}
      >
        {Object.entries(campos).map(([key, info]) => {
          const label = info.label;
          const inputType = info.inputType;
          const inputName = info.name;
          const inputValues = info.values;
          const inputId = key;
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
