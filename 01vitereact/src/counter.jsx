import React, {useState} from 'react';

function counter(){



const [decrease, setdec] = useState(0);



const updatedec = () => {
    setdec(decrease - 1);
};
const updateinc = () => {
    setdec(decrease + 1);
};
const updaterec = () => {
    setdec(0);
};


return(
    <>
    <p>{decrease}</p>
    <button onClick={updatedec}>DECREASE</button>
    <button onClick={updateinc}>INCREASE</button>
    <button onClick={updaterec}>reset</button>

    </>
)



}

export default counter;