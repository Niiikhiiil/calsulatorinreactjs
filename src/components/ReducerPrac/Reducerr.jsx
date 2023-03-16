import React, { useReducer } from 'react';

function reducer(state, action) {
	if (action.type == 'INCREMENT') {
		return state=state + 1;
	}
    if(action.type== "DECREMENT" && state!=0){
        return state=state-1;
    }
    return state
}

const Reducerr = () => {
	const [state, dispatch] = useReducer(reducer, 0);
	return (
		<div>
			<div style={{color:"white"}}>{state}</div>
			<button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
			<button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
		</div>
	);
};

export default Reducerr;
