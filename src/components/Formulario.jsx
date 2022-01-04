import { registerPatientInfo } from "../services/api";
import { getFormData, validateForm } from "../utils/utils";
import Input from "./Input";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

export default function Formulario() {
  const navigate = useNavigate();

  const campos = {
    inputNome: {
      label: "Nome Completo",
      inputType: "text",
      name: "nome",
      values: [],
    },
    inputCpf: {
      label: "CPF",
      inputType: "text",
      name: "cpf",
      values: [],
    },
    inputNascimento: {
      label: "Data de Nascimento",
      inputType: "date",
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
        onSubmit={handleFormSubmit}
      >
        {Object.entries(campos).map(renderInputElement)}

        <button className="btn btn-warning d-inline-block" id="btn">
          Enviar Formulário
        </button>
      </form>
    </div>
  );

  function renderInputElement([key, info]) {
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
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formIsValid = validateForm(form.elements);

    if (formIsValid) {
      const formData = getFormData(form);
      const response = registerPatientInfo(formData);

      const requestWasSuccessful = Boolean(response);

      if (requestWasSuccessful) {
        await MySwal.fire({
          title: <p>Sucesso!</p>,
          text: "Seus dados foram salvos!",
          icon: "success",
        });

        navigate("/");
        return true;
      } else {
        MySwal.fire({
          title: <p>Oops! Aconteceu um erro!</p>,
          text: "Não foi possível recuperar seus dados. Por favor, tente novamente.",
          icon: "error",
        });
        return false;
      }
    } else {
      MySwal.fire({
        title: <p>O CPF digitado é inválido!</p>,
        text: "Por favor, digite novamente o CPF",
        icon: "error",
      });
      return false;
    }
  }
}
