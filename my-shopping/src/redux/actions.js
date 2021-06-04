let nextId = 1

export const addTodo = (content,date) => ({
    type: "ADD",
    payload: {
        id: ++nextId,
        content,
        date,
        completed: false,
    }
})

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

