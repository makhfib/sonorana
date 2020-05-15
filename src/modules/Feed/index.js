import {
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
    LOAD_MORE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_ERROR,
    REFRESH_FEED,
    REFRESH_FEED_SUCCESS,
    REFRESH_FEED_ERROR
} from './types'

const INITIAL_STATE = {
    skip: 10, // skipping the limit set by api response
    refreshing: false,
    loading: false,
    error: false,
    errorMessage: false,
    feed: null,
    more: true,
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
        case LOAD_MORE:
            return {
                ...state,
                loading: true,
            }
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                loading: false,
                more: action.payload.feed.length < 10 ? false : true,
                skip: action.payload.feed.length > 0 ? state.skip+10 : state.skip,
                feed: state.feed.concat(action.payload.feed)
            }
        case LOAD_MORE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        case REFRESH_FEED:
            return {
                ...state,
                loading: true,
            }
        case REFRESH_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                more: true,
                skip: 10,
                feed: action.payload.feed,
            }
        case REFRESH_FEED_ERROR:
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