import axios from "axios";

let baseURL = "http://localhost:8080";

export async function loginUser(inputData) {
  try {
    const response = await axios.post(`${baseURL}/login`, inputData);
    localStorage.setItem(
      "appData",
      JSON.stringify({ token: response?.data?.token,isAuth:true })
    );
    return response.data;
  } catch (error) {
   return error;
  }
}
