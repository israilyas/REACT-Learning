import React, { useState } from 'react';
import "./style.css"

const UseState = () => {


    let initialData = 10;
    const [myNum, setMyNum] = useState(initialData)
    console.log(myNum)

    return (
        <>
            <div className='container'>
                <p>{myNum}</p>
                <div>
                    <button onClick={()=>{
                        setMyNum(myNum + 1)
                    }}>INC</button>
                    <button onClick={()=>{
                        myNum > 0? setMyNum(myNum - 1) :  setMyNum(0);
                    }}>DEC</button>
                </div>

            </div>
        </>
    )
}

export default UseState
