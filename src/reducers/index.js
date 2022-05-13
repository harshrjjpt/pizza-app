export default function pizzas(state=[], action) {

    if(action.type === 'ADD_PIZZAS') {
        return action.pizzas
    }
    return state;   
}