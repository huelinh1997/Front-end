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
