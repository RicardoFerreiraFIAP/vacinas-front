import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getFormData, formatData } from "../utils/utils";

export async function getPatientInfo(event) {
  console.log("inside");
  const URL = "URL";
  const RESOURCE = "resource";
  const RESOURCEIDENTIFIER = "identifier";
  const completeUrl = `${URL}/${RESOURCE}/${RESOURCEIDENTIFIER}`;
  const MySwal = withReactContent(Swal);

  const fakeUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(fakeUrl);
    console.log({ response });
    const convertedResponse = await response.json();
    console.log({ convertedResponse });
    const formattedResponseInHtml = formatData(convertedResponse);
    MySwal.fire({
      title: <p>Dados do Paciente</p>,
      html: formattedResponseInHtml,
      icon: "info",
    });
    //todo: se nao tiver dados avisar que nao esta cadastrado
    return convertedResponse;
  } catch (error) {
    console.log("errou", error);
    return await MySwal.fire({
      title: <p>Oops! Aconteceu um erro!</p>,
      text: "Não foi possível recuperar seus dados. Por favor, tente novamente.",
      icon: "error",
    });
  }
}

export async function setPatientInfo(event) {
  console.log("inside");
  event.preventDefault();
  const URL = "URL";
  const RESOURCE = "resource";
  const RESOURCEIDENTIFIER = "identifier";
  const completeUrl = `${URL}/${RESOURCE}/${RESOURCEIDENTIFIER}`;
  const MySwal = withReactContent(Swal);

  try {
    const formData = getFormData();
    const settings = {
      method: "POST",
      body: JSON.stringify({ ...formData }),
    };
    const response = await fetch(completeUrl, settings);
    if (response.ok) return true;
    //Todo: pegar erro?
    const convertedResponse = await response.json();
    return convertedResponse;
  } catch (error) {
    console.log("errou", error);
    await MySwal.fire({
      title: <p>Oops! Aconteceu um erro!</p>,
      text: "Não foi possível recuperar seus dados. Por favor, tente novamente.",
      icon: "error",
    });
  }
}
