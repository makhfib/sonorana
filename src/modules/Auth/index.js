import {
    RESET,
    SIGNIN,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    SIGNOUT,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    CONFIRM_SIGNUP,
    CONFIRM_SIGNUP_ERROR,
    CONFIRM_SIGNUP_SUCCESS,
    RESEND_CODE,
    RESEND_CODE_ERROR,
    RESEND_CODE_SUCCESS,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    CONFIRM_FORGOT_PASSWORD,
    CONFIRM_FORGOT_PASSWORD_SUCCESS,
    CONFIRM_FORGOT_PASSWORD_ERROR
} from './types'
import {
    AuthExceptionMessage
} from '../../exceptions/AuthExceptions'

const INITIAL_STATE = {
    CognitoUser: null,
    email: null,
    username: null,
    error: false,
    errorMessage: null,
    loading: false,   
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET:
            return {
                ...state,
                error: false,
                errorMessage: null,
            }
        case SIGNIN:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: true,
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                CognitoUser: action.payload.user,
                loading: false,
                username: action.payload.username, // for profile purposes
            }
        case SIGNIN_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        case SIGNOUT:
            return {
                ...state,
                error: false,
                errorMessage: null,
            }
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                CognitoUser: null,
            }
        case SIGNOUT_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: 'Unable to sign out',
            }
        case SIGNUP:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                email: action.payload.email,
                loading: false,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        case CONFIRM_SIGNUP:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: true,
            }
        case CONFIRM_SIGNUP_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: false,
            }
        case CONFIRM_SIGNUP_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        case RESEND_CODE:
            return {
                ...state,
                error: false,
                errorMessage: null,
            }
        case RESEND_CODE_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: false,
            }
        case RESEND_CODE_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                error: false,
                errorMessage: null,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                username: action.payload.username,
                loading: false,
            }
        case FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        case CONFIRM_FORGOT_PASSWORD:
            return {
                ...state,
                error: false,
                errorMessage: null,
                loading: true,
            }
        case CONFIRM_FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                username: null,
                loading: false,
            }
        case CONFIRM_FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: AuthExceptionMessage(action.payload.error),
                loading: false,
            }
        default:
            return state
    }
}