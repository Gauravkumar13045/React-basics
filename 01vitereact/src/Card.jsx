import pic from './bun.jpg';

function Card(){

    return(

        <div className="card">
            <img src={pic} alt="bun" className="card--image"/>
            <h2>bun</h2>
            <p className='card-name'> Tasty to eat</p>
            </div>
    );
};

export default Card;