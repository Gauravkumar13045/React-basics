import React, { useState } from "react";

function ToDoList() {
    const [addLists, setList] = useState(["eat", "hello india", "good boy"]);
    const [itemList, setItem] = useState('');

    function addthings(){
        if(itemList.trim() !== "" ){
        setList(t => [...t, itemList]);
        setItem("");
        }
    }
    function removethings(index) {

        const tasks = addLists.filter((_, i) => i !== index);
        setList(tasks);
    }
    function handleItemsInput(event) {
      setItem(event.target.value);
    }
function moveUp(index) {
    if (index > 0) {
        const updatedList = [...addLists];
        [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]];
        setList(updatedList);
    }
}
function moveDown(index) {
    if (index < addLists.length - 1) {
        const updatedList = [...addLists];
        [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]];
        setList(updatedList);
    }
}
    return (
        <div className="toDoList">
            <h1>TO-DO-LIST</h1>
            <input type="text" value={itemList} onChange={handleItemsInput} placeholder="Enter Item to Add"></input>
            <button onClick={addthings} className="add-class" >Add Item</button>

<ol>
    {addLists.map((task, index) =>
    <li key={index}>
        <span className="text">{task}</span>
        <button className="deleteBtn" onClick={() => removethings(index)}> Delete</button>
        <button className="upBtn" onClick={() => moveUp(index)}> Up </button>
        <button className="downBtn" onClick={() => moveDown(index)}> Down</button>

    </li>
    )}
</ol>
        </div>
    );
}
export default ToDoList