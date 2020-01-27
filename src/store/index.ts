import chatReduer from './reducers/chat'
import systemReducer from './reducers/system'
import {createStore, combineReducers, applyMiddleware} from "redux"

const rootReducer= combineReducers({
  system: systemReducer,
  chat: chatReduer
})
export type RootState = ReturnType<typeof rootReducer>

 const configureStore= ()=> createStore(rootReducer)
 export default configureStore