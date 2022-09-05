import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'
function App() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    console.log("Test test")
  },[])
  
  return (
    <div className ='App'>
     Count : {count}
     <button className="button" onClick={()=> setCount(prev => prev + 1)}>+</button>
     <button className ="button" onClick={()=> setCount(prev => prev - 1)}>-</button>
    </div>
  
  
  );
}

export default App;
