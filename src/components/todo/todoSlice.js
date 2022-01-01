const initValue = {
    jobs: []
}

const todoReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todo/addTodo':
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    action.payload.name
                ]
            }
        case 'todo/deleteTodo':
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload.index, 1)
            return {
                ...state,
                jobs: newJobs
            }


        default:
            return state
    }
}

export default todoReducer