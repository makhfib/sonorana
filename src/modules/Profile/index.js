import {
    EDIT_PROFILE,
    SAVE_CHANGES, 
    CANCEL_CHANGES
} from './types'

const INITIAL_STATE = {
    photo: 'https://icon.org.uk/sites/all/themes/iconinstitute/images/avatar-default.jpg',
    name: 'Mohammed Makhfi',
    username: 'makhfib',
    description: null,
    website: null,
    following: '12.8k',
    followers: '2.1m'  
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
            }
        case SAVE_CHANGES:
            return {
                ...state,
                photo: action.payload.photo,
                name: action.payload.name,
                description: action.payload.description,
                website: action.payload.website,
            }
        case CANCEL_CHANGES:
            return {
                ...state,
            }
        default:
            return state
    }
}