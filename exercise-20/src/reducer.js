export const InialState=[];

export const reducer = (state,action) => {

    switch(action.type){
        case 'ADD':
            return [...state,action.payload]
        case 'TOGGLE':
            return state.map((todo)=> todo.id === action.payload ?{
                ...todo,completed: !todo.completed
            }:todo);
        case 'DELETE':
            return state.filter((todo)=> todo.id !== action.payload);
        default: 
        return state;
    }
}
