
const action = {
    type: "UPDADE_ASSGNMENT_TITLE",
    paylod: {
        id: 1,
        title: 'Action title',
        completed: true,
    }
}

const state = [{
    id: 1,
    title: "null",
    completed: false,
}]

//const {completed } = action.paylod
//const newaction = {...action.paylod}
//newaction.completed = false
//console.log(action.paylod);
//console.log(newaction.completed);




const updade = function UPDADE_STATUS_ASSGNMENT(state, action) {
    return state.map(assgnment => {
        if (assgnment.id == action.paylod.id) {
            const newassgnment = { ...assgnment }
            newassgnment.completed = action.paylod.completed
            newassgnment.title = action.paylod.title
            
            return newassgnment
        } else {
            return assgnment;
        }
    })
}

console.log(updade(state,action));
console.log(state);
console.log(action.paylod);

