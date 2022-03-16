import { combineReducers } from 'react'
import { CounterReducer } from './CounterReducer'
import { UserReducer } from './UserReducer'

export default combineReducers({
    Counter: CounterReducer,
    User: UserReducer,
})