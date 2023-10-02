import axios from "axios";

let baseURL = "http://localhost:8080";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3ODc4NzFkNDkyYjA2YTZmNDY1MmMiLCJpYXQiOjE2OTYxODE5NTMsImV4cCI6MTY5NjI2ODM1M30.I9UTQRludMHJjKtlPXaq9zhvVPSoHMmzVdSxoYtIuCc";



export async function deleteTask(id) {
    console.log(id);
  try {
    const response = await axios.delete(`${baseURL}/task/${id}`, {
      headers: {
        applicationType: "json",
        Authorization: `bearer ${token}`,
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    return error;
  }
}
