export function addTodo(task){
    return {
        type: "ADD_TODO",
        task
    }
}

export function checkTodo(id){
    return {
        type: "CHECK_TODO",
        id
    }
}

export function checkAllTodo(){
    return {
        type: "CHECK_ALL_TODO"
    }
}

export function deleteTodo(id){
    return {
        type: "DELETE_TODO",
        id
    }
}

export function clearCompleted(){
    return {
        type: "CLEAR_COMPLETED"
    }
}

export function changeFilter(status){
    return {
        type: "CHANGE_FILTER",
        status
    }
}

export function editTask(id) {
    return {
        type: "EDIT_TASK",
        id
    }
}

export function updateTask(id, newTask) {
    return {
        type: "UPDATE_TASK",
        id,
        newTask
    }
}
