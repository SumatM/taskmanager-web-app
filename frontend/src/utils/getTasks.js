import axios from "axios";

let baseURL = "http://localhost:8080";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3ODc4NzFkNDkyYjA2YTZmNDY1MmMiLCJpYXQiOjE2OTYxODE5NTMsImV4cCI6MTY5NjI2ODM1M30.I9UTQRludMHJjKtlPXaq9zhvVPSoHMmzVdSxoYtIuCc";

const userId = '651787871d492b06a6f4652c'

export async function getTaskList() {
    console.log(`${baseURL}/task/${userId}`)
  try {
    const response = await axios.get(`${baseURL}/task/${userId}`, {
      headers: {
        applicationType: "json",
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching task list:", error);
  }
}
