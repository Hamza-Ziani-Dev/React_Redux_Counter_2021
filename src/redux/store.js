import {createStore , applyMiddleware} from 'redux'
import reducer from '../reducers/CounterReducer';
import reduxthunk from 'redux-thunk'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(reducer, enhancer(applyMiddleware(reduxthunk)));

export default store