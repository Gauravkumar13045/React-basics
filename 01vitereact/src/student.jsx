function student(props){

    return (

        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
};
export default student;