import TodoDataServices from "../services/todo.service";
import ID from "../ID"

export const addTodo = (content,date) => async(dispatch) =>{
    var ids = ID()
    const inputs = {
        id: ids,
        content,
        date,
        completed: false,
    }
    try {
        const res = await TodoDataServices.create(inputs);
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

