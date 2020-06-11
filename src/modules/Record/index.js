import {
    SAVE_RECORDING,
    SAVE_RECORDING_SUCCESS,
    SAVE_RECORDING_ERROR
} from './types'

const INITIAL_STATE = {
    id: null,
    audio: null,
    duration: null,
    error: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SAVE_RECORDING:
            return {
                ...state,
                error: false,
            }
        case SAVE_RECORDING_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                audio: action.payload.audio,
                duration: action.payload.duration,
                error: false,
            }
        case SAVE_RECORDING_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}