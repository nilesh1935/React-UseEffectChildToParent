import React,{useState} from "react";

const CheckCount = () =>{
 const [count, setCount] = useState(1)
 const [incCount, setincCount] = useState(0)
 const [inputValue, setInputValue] = useState()
 
const updateCount =(e)=>{
  setCount(count+1)
  setInputValue(e.target.value)
  if(count === 3){
    setincCount(incCount+1)
    setCount(1)
  }
  
  
 }
  return(
    <>
    <h1>{count}</h1>
    <h1>count: {incCount}</h1>
    <h1> Entered Text: {inputValue}</h1>
    <input type="text"  onChange={updateCount}/>
    </>
  )
}

export default CheckCount