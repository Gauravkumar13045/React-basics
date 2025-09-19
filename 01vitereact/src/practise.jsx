
import React, {useState} from 'react';


function Practise() {

    const [count, setCount] = useState(0);


    function increment(){
        setCount(g => g + 1);
        setCount(g => g + 2);
        setCount(g => g + 3);
        setCount(g => g + 4);
    };

    function decrement(){
        setCount(g => g - 1);
        setCount(g => g - 1);
        setCount(g => g - 1);
        setCount(g => g - 1);
    };
    function reset(){
        setCount(0);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Practise;