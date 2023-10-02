import axios from "axios";

let baseURL = "http://localhost:8080";


export async function getTaskList(token) {
    console.log(`${baseURL}/task`)
  try {
    const response = await axios.get(`${baseURL}/task`, {
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
