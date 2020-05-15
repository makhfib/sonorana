import {
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
} from './types'

const INITIAL_STATE = {
    skip: null,
    loading: false,
    error: false,
    errorMessage: false,
    feed: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_FEED:
            return {
                ...state,
                loading: true,
            }
        case GET_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                feed: action.payload.feed,
            }
        case GET_FEED_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state
    }
}