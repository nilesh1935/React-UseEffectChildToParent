import React,{useState} from "react";
import ChildComponent from "./ChildComponent.jsx"
import CheckCount from "./CheckCount.jsx"
import "./style.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);

  const displayCounter = (childCnt)=>{
    setCounter(childCnt);
  }

  const displayPreviousValue = (prevVal)=>{
    console.log(prevVal)
    setPreviousValue(prevVal);
  }

  return (
    <div>
      <p>Now: {counter}</p>
      <p>Before: {previousValue}</p>
      <ChildComponent buttonName="increment" incrementCounterFromChild={displayCounter} previousCounterValue={displayPreviousValue} />
      <CheckCount/>
    </div>
  );
}
