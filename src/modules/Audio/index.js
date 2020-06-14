import {
    PLAY,
    PLAY_SUCCESS,
    PLAY_ERROR,
    RESUME,
    REPLAY,
    PAUSE,
    FORWARD,
    BACKWARD,
    PLAYBACK_STATUS_UPDATE,
    PLAYBACK_STATUS_UPDATE_SUCCESS,
    PLAYBACK_STATUS_UPDATE_ERROR,
    SEEK_POSITION,
    UNLOAD
} from './types'

const INITIAL_STATE = {
    post: null, // current post id
    isProcessing: false,
    isSeeking: false,
    isPaused: false,
    isPlaying: false,
    isBuffering: false,
    playbackInstance: null,
    playbackInstanceDuration: null,
    playbackInstancePosition: null,
    error: false,
    errorMessage: null,
}

export default function (state = INITIAL_STATE, action) {
    console.log(action.type)
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                error: false,
            }
        case PLAY_SUCCESS:
            console.log('SUCCESS')
            return {
                ...state,
                error: false,
                post: action.payload.post,
                playbackInstance: action.payload.playbackInstance,
                isPaused: action.payload.isPaused,
                isPlaying: action.payload.isPlaying,
                isBuffering: action.payload.isBuffering,
                playbackInstanceDuration: action.payload.playbackInstanceDuration,
                playbackInstancePosition: action.payload.playbackInstancePosition,
            }
        case PLAY_ERROR:
            return {
                ...state,
                error: true,
            }
        case REPLAY:
            return {
                ...state,
                error: false,
            }
        case RESUME:
            return {
                ...state,
                error: false,
                isPaused: false,
            }
        case PAUSE:
            return {
                ...state,
                error: false,
                isPaused: true
            }
        case FORWARD:
            return {
                ...state,
                error: false,
            }
        case BACKWARD:
            return {
                ...state,
                error: false,
            }
        case PLAYBACK_STATUS_UPDATE:
            return {
                ...state,
                error: false,
            }
        case PLAYBACK_STATUS_UPDATE_SUCCESS:
            return {
                ...state,
                error: false,
                isPlaying: action.payload.isPlaying,
                isBuffering: action.payload.isBuffering,
                playbackInstanceDuration: action.payload.playbackInstanceDuration,
                playbackInstancePosition: action.payload.playbackInstancePosition
            }
        case PLAYBACK_STATUS_UPDATE_ERROR:
            return {
                ...state,
                error: true,
            }
        case SEEK_POSITION:
            return {
                ...state,
                error: false,
                isPaused: action.payload.isPaused,
                isSeeking: action.payload.isSeeking,
            }
        case UNLOAD:
            return {
                ...state,
                error: false,
                playbackInstance: null,
            }
        default:
            return state
    }
}