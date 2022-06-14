import {createStore,combineReducers} from 'redux'
import countiresReducer from './Product/countiresReducer'

const reducer = combineReducers({
    countries:countiresReducer
})

export const store = createStore(reducer)