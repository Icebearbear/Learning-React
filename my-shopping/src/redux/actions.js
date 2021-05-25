let nextId = 0

export const addTodo = (content) => ({
    type: "ADD",
    payload: {
        id: ++nextId,
        content,
    }
})

export const deleteTodo = (content, id) => ({
    type: "DELETE",
    payload: {
        id,
        content
    }
})

