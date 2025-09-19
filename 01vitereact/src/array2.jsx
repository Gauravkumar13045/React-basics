import React, {useState} from 'react';

function AddCar(){
const [cars, setCar] = useState([]);
const [carYear, setCarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("");


  
function handleAddCar(){
const newCar = { year: carYear,
                 make: carMake,
                model: carModel
 };

 setCar(c => [...c, newCar]);
}
function handRemoveCar(index){

}
function handleYearChange(event){
setCarYear(event.target.value);
}
function handleMakeChange(event){
setCarMake(event.target.value);
}
function handleModelChange(event){
setCarModel(event.target.value);
}


  return(
    <div>
    <h2>List of car objects</h2>
    <ul>
      {cars.map((car, index) => 
      <li key={index}>
        {car.year} {car.make} {car.model}
      </li>)}
    </ul>
    <input type='number' onChange={handleYearChange} value={carYear}></input><br></br>
    <input type='text' value={carMake} onChange={handleMakeChange} placeholder='Enter car Make'></input><br></br>
    <input type='text' value={carModel} onChange={handleModelChange} placeholder='Enter car Model'></input><br></br>
    <button onClick={handleAddCar}>Add Car</button>
    </div>
 );
}

export default AddCar