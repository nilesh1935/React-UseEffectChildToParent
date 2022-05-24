import React,{useState} from "react";

const CheckCount = () =>{
 const [count, setCount] = useState(0)
 const [incCount, setincCount] = useState(0)
 const [inputValue, setInputValue] = useState()
 
const updateCount =(e)=>{
  setCount(count+1)
  setInputValue(e.target.value )
  if(e.target.value.length % 3 === 0 ){
    setCount(0)
    setincCount(incCount+1)
  }
  if(e.target.value.length % 3 === 0 ){
    if(incCount > 0){
      setincCount(incCount-1)
    }
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