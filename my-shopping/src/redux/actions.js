let nextId = 0

export const addTodo = (content,date) => ({
    type: "ADD",
    payload: {
        id: ++nextId,
        content,
        date
    }
})

export const deleteTodo = (content, id) => ({
    type: "DELETE",
    payload: {
        id,
        content
    }
})

