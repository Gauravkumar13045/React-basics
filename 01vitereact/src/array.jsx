import React, { useState } from 'react';


function Array(){

    const [foods, setFoods] = useState(["APPLE", "BANANA", "GUAVA", "CHERRY", "ORANGE"]);

    function addFood(){

        const newfood = document.getElementById("foodadder").value;
       document.getElementById("foodadder").value = "";

       setFoods([...foods, newfood]);

    }
    function removefood(index){
     setFoods(foods.filter((_, i) =>  i !== index));
    }

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => removefood(index)}>{food}</li>)}
            </ul>
            <input type='text' id='foodadder' placeholder='Enter food name'></input>
            <button onClick={addFood}>Add Food</button>
        </div>
    )
}

export default Array