import axios from "axios";

let baseURL = "http://localhost:8080";

export async function signupUser(inputData) {
  try {
    const response = await axios.post(`${baseURL}/user/`, inputData);
    return response.data;
  } catch (error) {
    return error;
  }
}
