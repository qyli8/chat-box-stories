import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE
} from '../reducersTypes'

const initialState: ChatState ={
  messages: []
}

const chatReduer = (
  state: ChatState = initialState,
  action: ChatActionTypes
  ):ChatState=>{
    switch(action.type){
      case SEND_MESSAGE:
        return{
          messages:[...state.messages, action.payload]
        }
      case DELETE_MESSAGE:
        return{
          messages: state.messages.filter(
            message=> message.timestamp !== action.meta.timestamp
          )
        }
      default:
        return state
    }
}

export default chatReduer