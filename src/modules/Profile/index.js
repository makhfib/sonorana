import {
    SAVE_CHANGES, CANCEL_CHANGES
} from './types'

const INITIAL_STATE = {
    photo: 'https://icon.org.uk/sites/all/themes/iconinstitute/images/avatar-default.jpg',
    name: 'Mohammed Makhfi',
    description: null,
    website: null,
    following: '11.8k',
    followers: '2.1m'  
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
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