import TodoDataServices from "../services/todo.service";
import ID from "../ID"

export const addTodo = (content,date) => async(dispatch) =>{
    var ids = ID()
    debugger;
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
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch(err){
        return Promise.reject(err);
    }
};

export const showTodo = () => async(dispatch) => {
    try {
        const res = await TodoDataServices.getAll();
        // debugger;
        dispatch({
            type: "SHOW",
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch(err){
        return Promise.reject(err);
    }
}

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

