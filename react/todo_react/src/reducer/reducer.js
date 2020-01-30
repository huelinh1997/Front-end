const stateDefault = {
    todos: [
        {id: 1, task: "Hoc HTML", hasDone: false},
        {id: 2, task: "Hoc CSS", hasDone: false},
         {id: 3, task: "Hoc JS", hasDone: false}
        // {id: 4, task: "Hoc React", hasDone: false},
        // {id: 5, task: "Hoc Redux", hasDone: false}
    ],
    isCheckAll: false
}
let lengthDefault = stateDefault.todos.length
console.log('lengthDefault:', lengthDefault)

function addEffectWhenCheck(e_input) {
    if(e_input.checked) {
        e_input.parentElement.parentElement.classList.add('completed');
    } else e_input.parentElement.parentElement.classList.remove('completed');

}
export function reducer(state=stateDefault, action){
    let todos = state.todos;
    let isCheckAll = state.isCheckAll;
    let new_state = {...state};
    console.log('state: ', state)
    switch(action.type){
        case 'ADD_TODO':
            lengthDefault += 1;
            let todo = {id: lengthDefault , task: action.task, hasDone: false}
            new_state.todos = [todo, ...todos];
            return new_state;
        case 'CHECK_TODO':
            // let e_input = document.getElementById(`input${action.id}`);
            // addEffectWhenCheck(e_input)

            let indexUpdate = todos.findIndex(item=>item.id === action.id);
            let todoUpdate = {...todos[indexUpdate]};
            todoUpdate.hasDone = !todoUpdate.hasDone;
            new_state.todos[indexUpdate] = todoUpdate;

            let listItemLeft = todos.filter(item=>!item.hasDone)
            console.log('listItemLeft', listItemLeft)
            if(listItemLeft.length === 0) {
                document.getElementById('toggle-all').checked = true;
                isCheckAll = true;
            } else {
                document.getElementById('toggle-all').checked = false;
                isCheckAll = false
            }
            return {
                todos: [...new_state.todos],
                isCheckAll
            }
        case 'CHECK_ALL_TODO':
            console.log('check all')
            isCheckAll = !isCheckAll;
            console.log('checkall', isCheckAll)
            let e_listInput = document.getElementsByName('check')
            e_listInput.forEach(item=>{
                if(item.checked !== isCheckAll) {
                    item.checked = !item.checked
                }
            });
            for(let i = 0; i < todos.length; i++) {
                let todoUpdate = {...todos[i]};
                if(todoUpdate.hasDone !== isCheckAll) {
                    todoUpdate.hasDone = !todoUpdate.hasDone;
                    new_state.todos[i] = todoUpdate
                }
            }
            return {
                todos: [...new_state.todos],
                isCheckAll
            }
        default:
            return state;
    }
}

