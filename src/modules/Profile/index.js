import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    EDIT_PROFILE,
    SAVE_CHANGES,
    SAVE_CHANGES_SUCCESS,
    SAVE_CHANGES_ERROR,
} from './types'

const INITIAL_STATE = {
    u_id: null,
    u_username: null,
    u_name: null,
    u_photo: null,
    u_description: null,
    u_website: null,
    u_numFollowing: 0,
    u_numFollowers: 0,

    error: false,
    errorMessage: null,
    loading: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_PROFILE:
            return state
        case SAVE_CHANGES:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: null,
            }
        case SAVE_CHANGES_SUCCESS:
            return {
                ...state,
                u_name: action.payload.profile.u_name,
                u_photo: action.payload.profile.u_photo,
                u_description: action.payload.profile.u_description,
                u_website: action.payload.profile.u_website,

                error: false,
                errorMessage: null,
            }
        case SAVE_CHANGES_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case GET_PROFILE:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: null,
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                u_id: action.payload.profile.u_id,
                u_username: action.payload.profile.u_username,
                u_name: action.payload.profile.u_name,
                u_photo: action.payload.profile.u_photo,
                u_description: action.payload.profile.u_description ? action.payload.profile.u_description : null,
                u_website: action.payload.profile.u_website ? action.payload.profile.u_website : null,
                u_numFollowing: action.payload.profile.u_numFollowing,
                u_numFollowers: action.payload.profile.u_numFollowers,
            }
        case GET_PROFILE_ERROR:
            return {
                ...state,
            }
        default:
            return state
    }
}