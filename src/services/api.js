const URL = "http://localhost:80/vacinas";

export async function getPatientInfo(event) {
  const fakeUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(URL);
    console.log({ response });
    const convertedResponse = await response.json();
    console.log({ convertedResponse });
    return convertedResponse;
  } catch (error) {
    console.log("errou", error);
    return false;
  }
}

export async function registerPatientInfo(formData) {
  try {
    console.log({ formData });
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };
    const response = await fetch(URL, settings);

    console.log({ response });
    return response.ok ? true : false;
  } catch (error) {
    console.log("errou", error);
    return false;
  }
}
