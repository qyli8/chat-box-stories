import {SystemState, SystemActionTypes, UPDATE_SESSION} from '../reducersTypes'

const initialState: SystemState = {
  loggedIn: false,
  session:'',
  userName: ''
}

 const systemReducer = (
  state: SystemState = initialState, 
  action: SystemActionTypes): SystemState=>{
    switch (action.type){
      case  UPDATE_SESSION:
        return {
          ...state,
          ...action.payload
        }
      default: 
        return state
    }
  }

  export default systemReducer