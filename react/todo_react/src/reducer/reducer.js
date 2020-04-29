const status = window.location.pathname.substring(1, window.location.pathname.length);
const stateDefault = {
    todos: [
        {id: 3, task: "Hoc HTML", hasDone: true, isEdit: false},
        {id: 2, task: "Hoc CSS", hasDone: false, isEdit: false},
        {id: 1, task: "Hoc JS", hasDone: false, isEdit: false}
    ],
    isCheckAll: false,
    filterStatus: status === '' ? 'all' : status
}

export function reducer(state=stateDefault, action){
    let todos = state.todos;
    let isCheckAll = state.isCheckAll;
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    {
                        id: state.todos.length === 0 ? 1 : state.todos[0].id + 1,
                        task: action.task,
                        hasDone: false
                    },
                    ...state.todos
                ]
            }

        case 'CHECK_TODO':
            let newTodo = todos.map(item=> {
                if(item.id === action.id) {
                    return {
                        ...item,
                        hasDone: !item.hasDone
                    }
                } else return item
            })
            return  {
                ...state,
                todos: newTodo,
                isCheckAll: newTodo.filter(item=>!item.hasDone).length === 0 ? true : false
            }

        case 'CHECK_ALL_TODO':
            isCheckAll = !isCheckAll;
            let e_listInput = document.getElementsByName('check')
            e_listInput.forEach(item=>{
                if(item.checked !== isCheckAll) {
                    item.checked = !item.checked
                }
            });

            return {
                ...state,
                todos: state.todos.map(item=> {
                    if(item.hasDone !== isCheckAll) {
                        return {
                            ...item,
                            hasDone: !item.hasDone
                        }
                    } else return item
                }),
                isCheckAll
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(item=> item.id !== action.id)
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(item => !item.hasDone)
            }

        case 'CHANGE_FILTER':
            return {
                ...state,
                filterStatus: action.status
            }

        case 'EDIT_TASK':
            return {
                ...state,
                todos: state.todos.map(item=> {
                    if(item.id === action.id) {
                        return {
                            ...item,
                            isEdit: true
                        }
                    } else return {
                        ...item,
                        isEdit: false
                    }
                })
            }

        case 'UPDATE_TASK':
            return {
                ...state,
                todos: state.todos.map(item=> {
                    if(item.id === action.id) {
                        return {
                            ...item,
                            task: action.newTask,
                            isEdit: false
                        }
                    } else return item
                })
            }

        default:
            return state;
    }
}

