//state chanfe when clicking button
import React, { useState } from 'react';

function App(){
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </>
    );

}

export default App