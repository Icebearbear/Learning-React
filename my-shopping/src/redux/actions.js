import TodoDataServices from "../services/todo.service";
import ID from "../ID"
var ids = ID()

export const addTodo = (content,date) => async(dispatch) =>{
    const inputs = {
        id: ids,
        content,
        date,
        completed: false,
    }
    try {
        const res = await TodoDataServices.create(inputs);
        debugger;
        dispatch({
            type: "ADD",
            payload: inputs
        });
        return Promise.resolve(res.data);
    } catch(err){
        return Promise.reject(err);
    }
};

export const toggleTodo = (id) => ({
    type: "TOGGLE",
    payload: {id}
})

export const deleteTodo = (content, id) => ({
    type: "DELETE",
    payload: {
        id,
        content
    }
})

