import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'i' : return state + 1;
        case 'd' : return state - 1;
        case 'r' : return initialState;
        default: return state;
    }
}
function ReducerCount() {

    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
        <h1>count {count }</h1>
        <button onClick={()=> dispatch('i')}>Increment</button>
        <button onClick={()=> dispatch('d')}>Decrement</button>
        <button onClick={()=> dispatch('r')}>Reset</button>
        </div>
    )
}

export default ReducerCount
