import React, {useState} from 'react';

function ColorPicker(){

const [color, setcolor] = useState("black");

function handleColorChange(event) {
    setcolor(event.target.value);   
}
    return(
<>
<div>
    <h1>Color</h1>
    <input type="color" value={color} onChange={handleColorChange} />
    <p>Selected Color: {color}</p>
    <div style={{width: '100px', height: '100px', backgroundColor: color}}></div>
    <button onClick={() => setcolor("black")}>Reset to Red</button>
</div>

</>
    );
}

export default ColorPicker