import React, { useEffect, useState } from 'react';
import "./style.css"

const UseEffect = () => {


    // let initialData = 10;
    const [myNum, setMyNum] = useState(10)

    useEffect(()=>{
        document.title = `Chats(${myNum})`;
    });

    return (
        <>
            <div className='container'>
                <p>{myNum}</p>
                <div>
                    <button onClick={() => {
                        setMyNum(myNum + 1)
                    }}>INC</button>
                </div>

            </div>
        </>
    )
}

export default UseEffect
