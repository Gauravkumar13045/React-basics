import PropTypes from 'prop-types'
import Student from './student.jsx' 
import IsloggedIn from './logged.jsx'
import List from './list.jsx'
import './index.css'
import MyComponent from './useState.jsx'
import Button from './Button.jsx' 
import Counter from './counter.jsx'
import OnChange from './onChange.jsx' 
import ColorPicker from './ColorPicker.jsx'
import Practise from './practise.jsx'
import Object from './object.jsx'
import Array from './array.jsx'
import Array2 from './array2.jsx'
import ToDoList1 from './to-do-list.jsx'
import UseEffect from './useEffect.jsx'
import DigitalClock from './DigitalClock.jsx'
import UseContext from './componentA.jsx'
import Stopwatch from './colorChanger.jsx'
import ToDoList from './error.jsx'
import Q1 from './Question Folder/Ques1.jsx'
import Q2 from './Question Folder/Ques2.jsx'



function App() {
 
const fruits = [{id: 1, name: "Apple", calories: 95},
                {id: 2, name:"Banana", calories: 105},
                {id: 3, name: "Guava", calories: 68}, 
                {id: 4, name: "Cherry", calories: 50},
                {id: 5, name: "Orange", calories: 62}]; 
                
const vegetables =
                [{id:6, name: "Potato", calories: 75},
                {id: 7, name:"Tomato", calories: 95},
                {id: 8, name: "Brinjal", calories: 89}, 
                {id: 9, name: "Bittergourd", calories: 132},
                {id: 10, name: "Onion", calories: 87}];




  return (
    <>
    <br></br>
       {/* <UseEffect></UseEffect> */}

    {/* <Button />
    <h1>Chai or react with vite | Gaurav kumar</h1>
    <Student name="gaurav" age={45} isStudent={true} />
    <hr></hr>
    <Student name="Ram" age={50} isStudent={false} />
        <IsloggedIn isloggedIn={true} username="Gaurav"></IsloggedIn>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
       */}
 {/* <ToDoList></ToDoList> */}
<Q1></Q1>
<Q2></Q2>




























{/* <Stopwatch></Stopwatch> */}
       {/* <h1>Chai or react with vite | Gaurav kumar</
{/* <UseContext></UseContext> */}
        {/* <DigitalClock></DigitalClock>
       <ToDoList></ToDoList>
       <MyComponent></MyComponent>
       <Counter></Counter>
       <OnChange />
       <ColorPicker></ColorPicker>
       <Practise></Practise>
       <Object></Object>
       <Array></Array>
       <Array2></Array2> */}
    </>
  );
}


List.PropTypes = {
  category: PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number,
name: PropTypes.string,
calories: PropTypes.number

  }))
}
export default App