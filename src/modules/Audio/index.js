import {
    PLAY,
    PLAY_ERROR,
    PLAY_SUCCESS,
    PROCESSING,
    RESUME,
    PAUSE,
    UPDATE,
    STOP,
    FORWARD,
    BACKWARD
} from './types'

const INITIAL_STATE = {
    uri: '',
    isPaused: false,
    isPlaying: false,
    isBuffering: false,
    isProcessing: false,
    didJustFinish: false,
    playbackInstance: null,
    playbackInstancePosition: 0,
    playbackInstanceDuration: 0,
    error: false,
    errorMessage: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                error: false,
                uri: action.payload.uri,
                isPlaying: action.payload.isPlaying,
            }
        case PLAY_ERROR:
            return {
                ...state,
                error: true,
                uri: action.payload.uri,
                isPlaying: action.payload.isPlaying
            }
        case PLAY_SUCCESS:
            return {
                ...state,
                error: false,
                playbackInstance: action.payload.playbackInstance,
            }
        case PROCESSING:
            return {
                ...state,
                error: false,
                isProcessing: action.payload.isProcessing
            }
        case RESUME:
            return {
                ...state,
                error: false,
                isPaused: action.payload.isPaused
            }
        case PAUSE:
            return {
                ...state,
                error: false,
                isPaused: action.payload.isPaused
            }
        case UPDATE:
            return {
                ...state,
                error: false,
                isPlaying: action.payload.isPlaying,
                isBuffering: action.payload.isBuffering,
                didJustFinish: action.payload.didJustFinish,
                playbackInstancePosition: action.payload.playbackInstancePosition,
                playbackInstanceDuration: action.payload.playbackInstanceDuration,
            }
        case STOP:
            return {
                ...state,
                error: false,
                uri: action.payload.uri,
                playbackInstance: action.payload.playbackInstance,
                isBuffering: action.payload.isBuffering,
                didJustFinish: action.payload.didJustFinish,
                playbackInstancePosition: action.payload.playbackInstancePosition,
                playbackInstanceDuration: action.payload.playbackInstanceDuration,
            }
        case FORWARD:
            return {
                ...state
            }
        case BACKWARD:
            return {
                ...state
            }
        default:
            return state
    }
}