import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5001/todolist2-b7979/us-central1/app/",
    headers: {
        "Content-type": "application/json"
    }
});