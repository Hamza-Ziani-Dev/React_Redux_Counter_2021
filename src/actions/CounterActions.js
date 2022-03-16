import { DECREMENT, DEC_BY_VALUE, INCREMENT, INC_BY_VALUE } from "./Types"



export const incrementAction = async (dispatch) =>{
  return dispatch ({
    type: INCREMENT
  })
}

export const decrementAction =  async (dispatch) =>{
  return dispatch ({
    type: DECREMENT
  })

}

export const incvalueAction = async (dispatch, v1) =>{
 return dispatch({ 
  type: INC_BY_VALUE,
  payload : v1
 })
}

export const decvalueAction = (dispatch, v1) =>{
  return dispatch({ 
    type: DEC_BY_VALUE,
    payload : v1
   })
 }
