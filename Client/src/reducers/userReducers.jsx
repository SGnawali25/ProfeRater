import{
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_FAIL,
} from '../constants/userConstants';

export const authReducer = (state = {user: {} }, action) => {
    switch (action.type) {
        case LOAD_USER_REQUEST:
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case LOAD_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }

        case LOAD_USER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case LOGOUT_FAIL:
            return {
                ...state,
                loading : false,
                error: action.payload
            }
        

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const registerUserReducer = (state = {user: {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case REGISTER_USER_SUCCESS:
            return {
               ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        

        
        case REGISTER_USER_FAIL:
            return {
                loading:false,
                isAuthenticated:false,
                user:null,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
                user: null
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

