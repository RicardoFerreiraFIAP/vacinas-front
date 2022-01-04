const URL = "http://localhost:8090/vacinas";

export async function getPatientInfo(event) {
  try {
    const response = await fetch(URL);
    const convertedResponse = await response.json();
    return convertedResponse;
  } catch (error) {
    return false;
  }
}

export async function registerPatientInfo(formData) {
  try {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };
    const response = await fetch(URL, settings);
    return response.ok ? true : false;
  } catch (error) {
    return false;
  }
}
