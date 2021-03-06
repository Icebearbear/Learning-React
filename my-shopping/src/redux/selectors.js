export const getTodosState = (store) => {
    console.log(store)
    return store.todos}

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).allIds : []
export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}

export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id))