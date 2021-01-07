import { AUTH_ERROR, AUTH_USER } from '../Actions/types'

const INITIAL_STATE = {
    authenticated : '',
    errorMessage: ''
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTH_USER:
            return { ...state, authenticated: action.payload }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default AuthReducer