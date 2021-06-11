import http from "../http-common";

// all routes to call express
class TodoDataServices {
    getAll(){
        return http.get("/api/getAll")
    }
    create(data){
        console.log(data)
        return http.post("/api/create", data)
    }
}

export default new TodoDataServices();