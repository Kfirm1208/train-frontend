import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'
function App() {
  const [count,setCount] = useState(0)
  useEffect(() => {
   count %2 === 0 ?
    console.log(count +' is even'):
    console.log(count +' is odd')
  },[count])
  
  return (
    <div className ='App'>
     Count : {count}
     <button className="button_red" onClick={()=> setCount(prev => prev + 1)}>+</button>
     <button className ="button_green" onClick={()=> setCount(prev => prev - 1)}>-</button>
    </div>
  
  
  );
}

export default App;
