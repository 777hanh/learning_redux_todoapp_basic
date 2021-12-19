export const ADD_JOB = (data) => {
    return {
        type: 'todo/addTodo',
        payload: data
    }
}
export const DELETE_JOB = (data) => {
    return {
        type: 'todo/deleteTodo',
        payload: data
    }
}