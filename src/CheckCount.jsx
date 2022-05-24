import React,{useState} from "react";

const CheckCount = () =>{
 
 const [incCount, setincCount] = useState(0)
 const [inputValue, setInputValue] = useState()
 
const updateCount =(e)=>{
  setInputValue(e.target.value )
  if(e.target.value.length % 3 === 0 ){
    setincCount(incCount+1)
  }
  if(e.target.value.length % 3 === 0  && e.keyCode === 8){
    if(incCount > 0){
      setincCount(incCount-1)
    }
  }
 }
  return(
    <>
    <h1>count: {incCount}</h1>
    <h1> Entered Text: {inputValue}</h1>
    <input type="text"  onKeyUp={updateCount}/>
    </>
  )
}

export default CheckCount