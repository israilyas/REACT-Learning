import React, {useEffect, useState, useReducer} from 'react';
import "./style.css"

const reducer= (state,action)=>{
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(action.type === "DECR" && state > 0){
        state = state - 1;
    }
    return state;

}

const UseReducer = () => {

    document.title = "UseReducer Hooks";
    let initialData = 10;
    // const [myNum, setMyNum] = useState(initialData)

    const [state, dispatch] = useReducer(reducer,initialData);

    return (
        <>
            <div className='container'>
                <p>{state}</p>
                <div>
                    <button onClick={()=> dispatch({type:"INCR"})}>INC</button>
                    <button onClick={()=> dispatch({type:"DECR"})}>DEC</button>
                </div>

            </div>
        </>
    )
}

export default UseReducer
