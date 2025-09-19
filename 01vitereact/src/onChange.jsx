import React, { useState } from 'react';

function onChange() {

    const [name, setname] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setpayment] = useState('');
    const [radio, setradio] = useState('');

    function handleNameChange(event) {
        setname(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setpayment(event.target.value);
    }
    function handleRadioChange(event) {
        setradio(event.target.value);
    }

        return (
            <div>
                <br></br>
                <input value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type='number' />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} />
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange} >
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">Mastercard</option>

                </select>
                <p>Mode: {payment} </p>


                <label>
                    <input type='radio' value="Pickup" checked={radio === 'Pickup'} onChange={handleRadioChange} />
                    Pickup
                </label>
<br></br>
                <label>
                    <input type='radio' value="Delivery" checked={radio === 'Delivery'} onChange={handleRadioChange} />
                    Delivery
                </label>

                <p>Radio: {radio}</p>

            </div>
        );
    }



export default onChange