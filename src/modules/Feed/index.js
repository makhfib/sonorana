import {
    TIMEOUT,
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
    REFRESH_FEED,
    REFRESH_FEED_SUCCESS,
    REFRESH_FEED_ERROR,
    LOAD_MORE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_ERROR
} from './types'

const INITIAL_STATE = {
    feed: null,
    skip: 0,
    more: true,
    loading: false,
    refreshing: false,
    error: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TIMEOUT:
            return {
                ...state,
                loading: false,
                refreshing: false,
                error: true
            }
        case GET_FEED:
            return {
                ...state,
                more: true,
                loading: true,
                error: false
            }
        case GET_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                feed: action.payload.feed,
                skip: 10,
            }
        case GET_FEED_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case REFRESH_FEED:
            return {
                ...state,
                error: false,
                refreshing: true,
            }
        case REFRESH_FEED_SUCCESS:
            return {
                ...state,
                error: false,
                refreshing: false,
                feed: action.payload.feed,
                skip: 10,
            }
        case REFRESH_FEED_ERROR:
            return {
                ...state,
                refreshing: false,
                error: true
            }
        case LOAD_MORE:
            return {
                ...state,
                more: false, // wait for response
                error: false
            }
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                error: false,
                feed: state.feed.concat(action.payload.extra),
                skip: action.payload.extra < 10 ? 0 : state.skip+10,
                more: action.payload.extra < 10 ? false : true,
            }
        case LOAD_MORE_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}