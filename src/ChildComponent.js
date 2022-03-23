import React,{useState, useEffect, useRef} from "react"
import PropTypes from 'prop-types';

const ChildComponent = (props) =>{
  const [counter, setCounter] = useState(0);
  const ref = useRef()

  useEffect(()=>{
    ref.current = counter; 
  },[counter])

  const incrementCounter = () =>{
    setCounter(counter + 1);
    props.incrementCounterFromChild(counter + 1);
    props.previousCounterValue(ref.current);
  }

  const resetToZero = () =>{
    setCounter(0);
    props.incrementCounterFromChild(0);
    props.previousCounterValue(0);
  }
  return(
    <>
    <button onClick={incrementCounter}>{props.buttonName}</button>
    <button onClick={resetToZero}>Reset</button>
    </>
  )
}

ChildComponent.propTypes = {
  buttonName : PropTypes.string,
  incrementCounterFromChild : PropTypes.func,
  previousCounterValue : PropTypes.func
}

export default ChildComponent