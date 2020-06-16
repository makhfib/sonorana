import {
    LOAD_PROFILE,
    LOAD_PROFILE_ERROR,
    LOAD_PROFILE_SUCCESS,
    SAVE_CHANGES,
    SAVE_CHANGES_ERROR,
    SAVE_CHANGES_SUCCESS
} from './types'

const INITIAL_STATE = {
    u_username: '',
    u_name: '',
    u_photo: '',
    u_header: '',
    u_description: '',
    u_website: '',
    u_numFollowing: 0,
    u_numFollowers: 0,
    u_posts: [],
    loading: false,
    error: false,
    errorMessage: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_PROFILE:
            return {
                ...state,
                u_username: action.payload.u_username,
                u_name: action.payload.u_name,
                u_photo: action.payload.u_photo,
                u_header: action.payload.u_header,
                u_description: action.payload.u_description,
                u_website: action.payload.u_website,
                u_numFollowing: action.payload.u_numFollowing,
                u_numFollowers: action.payload.u_numFollowers,
            }
        case LOAD_PROFILE_ERROR:
            return {
                ...state,

            }
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                u_name: action.payload.u_name,
                u_photo: action.payload.u_photo,
                u_header: action.payload.u_header,
                u_description: action.payload.u_description,
                u_website: action.payload.u_website,
                u_numFollowing: action.payload.u_numFollowing,
                u_numFollowers: action.payload.u_numFollowers,
                u_posts: action.payload.u_posts,
            }
        case SAVE_CHANGES:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            }
        case SAVE_CHANGES_ERROR:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            }
        case SAVE_CHANGES_SUCCESS:
            return {
                ...state,
                u_photo: action.payload.u_photo,
                u_header: action.payload.u_header,
                u_name: action.payload.u_name,
                u_description: action.payload.u_description,
                u_website: action.payload.u_website,
                loading: action.payload.loading,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state
    }
}