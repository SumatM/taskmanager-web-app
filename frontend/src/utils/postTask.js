import axios from "axios";

let baseURL = "http://localhost:8080";

export async function postTask(task){
    console.log(`${baseURL}/task`);
let data = await axios.post(`${baseURL}/task`,task,{
    headers:{
        'applicationType':'json',
        'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3ODc4NzFkNDkyYjA2YTZmNDY1MmMiLCJpYXQiOjE2OTYxODE5NTMsImV4cCI6MTY5NjI2ODM1M30.I9UTQRludMHJjKtlPXaq9zhvVPSoHMmzVdSxoYtIuCc`
    }
})
    console.log(data);
}