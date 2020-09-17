import React, { useState } from 'react';


const Counter = () => {
    const [state, setState] = useState(() => {
        return {
            countVal : 4,
            theme :'blue'
        };
    })
    const count = state.countVal;
    const theme = state.theme;

    const increament = () => {
        setState((prevState) => {
            return {...prevState,countVal: prevState.countVal+1}
        })
    }
    const decrement = () => {
        setState((prevState) => {
            return {...prevState, countVal: prevState.countVal-1}
        })    }
    return (
        <>
            <button onClick={increament}>+</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={decrement}>-</button>
        </>
    );

}

export default Counter;