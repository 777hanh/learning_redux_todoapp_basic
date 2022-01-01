import todoReducer from "../components/todo/todoSlice"

const initValue = {}

const rootReducer = (state = initValue, action) => {
    return {
        todoList: todoReducer(state.todoList, action),
    }
}

export default rootReducer