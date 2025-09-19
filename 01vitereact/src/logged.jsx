function IsloggedIn(props){

    const welcome = <h1 className="wel">Welcome {props.username}</h1>;
    const outcome = <h1 className="out">Please logged In</h1>;
        
        if(props.isloggedIn){
        return( welcome );
        }else{
            return(outcome);
        }
        
   
}

export default IsloggedIn;