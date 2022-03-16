import React from 'react'
//import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementAction, incrementAction, incvalueAction, decvalueAction } from '../actions/CounterActions';
// import { INCREMENT, DECREMENT } from '../actions/Types'
export function Counter() {
  //const [count,setCount] = useState(0)
  const count = useSelector(state => state.Count)
  console.log(count);
  const dispatch = useDispatch()
  const handelIncrement = () =>{
        //  setCount(count +1)
        incrementAction(dispatch)

  }
  const handelDecrement = () =>{
        // setCount(count -1)
        decrementAction(dispatch)

 }
 const handelINC_Value = (v1) =>{
  // setCount(count -1)
       incvalueAction(dispatch,v1)

}
const handelDec_Value = (v1)=>{
      decvalueAction(dispatch,v1)
}
  return (
    <div className='container text-center pt-5'>
      <h1>Counter With Redux</h1>
    <button className="btn btn-primary m-2"  onClick={handelIncrement}>+</button>
     <button className="btn btn-danger"  onClick={(v1)=>handelINC_Value(5)}>+5</button>
    <h2>{count}</h2>
    <button className="btn btn-primary m-2"  onClick={handelDecrement }>-</button>
    <button className="btn btn-danger"  onClick={(v1)=>handelDec_Value(5)}>-5</button>




    </div>
  )
}

export default Counter