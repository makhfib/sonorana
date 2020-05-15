import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
    GET_RESULTS,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_ERROR,
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
    GET_FOLLOWING,
    GET_FOLLOWING_SUCCESS,
    GET_FOLLOWING_ERROR,
    CREATE_FOLLOWING,
    CREATE_FOLLOWING_SUCCESS,
    CREATE_FOLLOWING_ERROR,
    DELETE_FOLLOWING,
    DELETE_FOLLOWING_SUCCESS,
    DELETE_FOLLOWING_ERROR,
    GET_FOLLOWERS,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_ERROR,
    LIKE,
    LIKE_SUCCESS,
    LIKE_ERROR,
    DISLIKE,
    DISLIKE_SUCCESS,
    DISLIKE_ERROR
} from './types'

const INITIAL_STATE = {
    loading: false,
    error: false,
    errorMessage: false,
    feed: null,
    currentUser: null,
    followers: null,
    following: null,
    posts: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                currentUser: action.payload.currentUser 
            }
        case GET_USER_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case CREATE_USER:
            return {
                ...state,

            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,

            }
        case CREATE_USER_ERROR:
            return {
                ...state,

            }
        case UPDATE_USER:
            return {
                ...state,

            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,

            }
        case UPDATE_USER_ERROR:
            return {
                ...state,

            }
        case DELETE_USER:
            return {
                ...state,

            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,

            }
        case DELETE_USER_ERROR:
            return {
                ...state,

            }
        case GET_POST:
            return {
                ...state,

            }
        case GET_POST_SUCCESS:
            return {
                ...state,

            }
        case GET_POST_ERROR:
            return {
                ...state,

            }
        case CREATE_POST:
            return {
                ...state,

            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,

            }
        case CREATE_POST_ERROR:
            return {
                ...state,

            }
        case DELETE_POST:
            return {
                ...state,

            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,

            }
        case DELETE_POST_ERROR:
            return {
                ...state,

            }
        case GET_RESULTS:
            return {
                ...state,

            }
        case GET_RESULTS_SUCCESS:
            return {
                ...state,

            }
        case GET_RESULTS_ERROR:
            return {
                ...state,

            }
        case GET_FEED:
            return {
                ...state,

            }
        case GET_FEED_SUCCESS:
            return {
                ...state,

            }
        case GET_FEED_ERROR:
            return {
                ...state,

            }
        case GET_FOLLOWING:
            return {
                ...state,

            }
        case GET_FOLLOWING_SUCCESS:
            return {
                ...state,

            }
        case GET_FOLLOWING_ERROR:
            return {
                ...state,

            }
        case CREATE_FOLLOWING:
            return {
                ...state,

            }
        case CREATE_FOLLOWING_SUCCESS:
            return {
                ...state,

            }
        case CREATE_FOLLOWING_ERROR:
            return {
                ...state,

            }
        case DELETE_FOLLOWING:
            return {
                ...state,

            }
        case DELETE_FOLLOWING_SUCCESS:
            return {
                ...state,

            }
        case DELETE_FOLLOWING_ERROR:
            return {
                ...state,

            }
        case GET_FOLLOWERS:
            return {
                ...state,

            }
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,

            }
        case GET_FOLLOWERS_ERROR:
            return {
                ...state,

            }
        case LIKE:
            return {
                ...state,

            }
        case LIKE_SUCCESS:
            return {
                ...state,

            }
        case LIKE_ERROR:
            return {
                ...state,

            }
        case DISLIKE:
            return {
                ...state,

            }
        case DISLIKE_SUCCESS:
            return {
                ...state,

            }
        case DISLIKE_ERROR:
            return {
                ...state,

            }
        default:
            return state
    }
}