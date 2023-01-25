import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const generateUsers = () => {
 
   return [
     {name: "iva", surname: "asatiani", age: 35, id: 1},
     {name: "rati", surname: "burbu", age: 39, id: 2},
     {name: "shuba", surname: "shoki", age: 95, id: 3},
     {name: "iva", surname: "asatiani", age: 35, id: 4},
     {name: "rati", surname: "burbu", age: 39, id: 5},
     {name: "shuba", surname: "shoki", age: 95, id: 6},
     {name: "iva", surname: "asatiani", age: 35, id: 7},
     {name: "rati", surname: "burbu", age: 39, id: 8},
     {name: "shuba", surname: "shoki", age: 95, id: 9},
     {name: "manana", surname: "tvaradze", age: 45, id: 10},
   ]
 }

const removeUser = (arr) =>{
  const randomNum = Math.floor(Math.random()*arr.length);
  const newArr = arr.filter((_,index)=> {
    if(randomNum === index){
      return false;
    }else{
      return true;
    }
  })
  return newArr;
}

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    setUsers(generateUsers());
  },[])
  return (
    <div className="App">
      {users.map(item=>{return <h2 key={item.id}> name: {item.name} surname: {item.surname} age: {item.age}</h2>})}

      <button onClick={(e => {
        const randomFitlered = removeUser(users);
        setUsers(randomFitlered);
      })}> remove
        </button>
        <p> {users.length} users left</p>
    </div>

  );
}

export default App;
