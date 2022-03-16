import { INCREMENT, DECREMENT, INC_BY_VALUE, DEC_BY_VALUE} from "../actions/Types";


export const reducer = (state = { Count: 0 }, action) => {
  switch (action.type) {
      case INCREMENT:
          return {...state, Count: state.Count + 1 }

      case DECREMENT:
          return {...state, Count: state.Count - 1 }

      case INC_BY_VALUE:
          return {...state, Count: state.Count + action.payload }

      case DEC_BY_VALUE:
          return {...state, Count: state.Count - action.payload }
      default:
          return state
  }

}

export default reducer