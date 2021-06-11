import http from "../http-common";

// all routes to call express
class TodoDataServices {
    getAll(){
        return http.get("/api/getAll")
    }
    create(data){
        // console.log(data)
        return http.post("/api/create", data)
    }
    updateStatus(id, data){ // param : id , body : data
        return http.put(`api/updateStatus/${id}`, data) 
    }
}

export default new TodoDataServices();