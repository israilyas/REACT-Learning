import React from "react";

function App() {
    let greeting;
    let time = new Date(2024, 5, 5, 22)

    // Inline styling
    const greet = {
        color: "green"
    }

    if (time.getHours() >= 5 && time.getHours() <= 12) {
        greeting = "Good Morning";
        greet.color = "green";
    }
    else if (time.getHours() >= 12 && time.getHours() <= 17) {
        greeting = "Good Afternoon";
        greet.color = "orange";
    }
    else if (time.getHours() >= 17 && time.getHours() <= 21) {
        greeting = "Good Evening";
        greet.color = "blue";
    }
    else {
        greeting = "Good Night"
        greet.color = "black";
    }

    return (
        <>
            <div className='container'>
                <h1>Hello Sir, <span className='greet' style={greet}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;