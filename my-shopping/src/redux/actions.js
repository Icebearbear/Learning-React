import TodoDataServices from "../services/todo.service";
import ID from "../ID"

export const addTodo = (content, targetDate, addedDate) => async(dispatch) =>{
    var ids = ID()
    // debugger;
    const inputs = {
        id: ids,
        content,
        targetDate,
        addedDate,
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

export const toggleTodo = (id, data) => async(dispatch) => {
    // debugger;
    try{
        const res = await TodoDataServices.updateStatus(id, data); // update in db
        dispatch({ // update in store
            type: "TOGGLE",
            payload: data
        })
        // debugger;
        return Promise.resolve(data);
    }catch(err){
        return Promise.reject(err);
    }
}

export const deleteTodo = (content, id) => ({
    type: "DELETE",
    payload: {
        id,
        content
    }
})

