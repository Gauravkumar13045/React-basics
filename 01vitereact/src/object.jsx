
import React, {useState} from "react";

function ObjectComponent() {

    const [car, setCar] = useState({ year: 2025,
                                     make : "Ghost Version",
                                    model: "Rolls-Royce"});
    


    function handleChangeyear(event){
        setCar(c => ({...c, year: event.target.value})) ;
    }
        function handleChangeMake(event){
        setCar(c => ({...c, make: event.target.value})) ;
    }
            function handleChangeModel(event){
        setCar(c => ({...c, model: event.target.value})) ;
    }


    return(
        <div>
            <p>My favourite car is: {car.make} of the {car.model} in {car.year} </p>

            <input type="number" value={car.year} onChange={handleChangeyear} />
            <input type="text" value={car.make} onChange={handleChangeMake}></input>
            <input type="text" value={car.model} onChange={handleChangeModel}></input>

        </div>
    )                                
}

export default ObjectComponent;