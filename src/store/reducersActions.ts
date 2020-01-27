import {Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes, SystemState, UPDATE_SESSION, SystemActionTypes} from './reducersTypes'
export const sendMessage = (newMessage: Message): ChatActionTypes => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

export const deleteMessage =(timestamp:number): ChatActionTypes=>(
  {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  })


  export const updateSession = (newSession: SystemState): SystemActionTypes =>({
    type: UPDATE_SESSION,
    payload: newSession
  })