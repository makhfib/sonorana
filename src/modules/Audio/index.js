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
} from './types'

const INITIAL_STATE = {
    post: null, // current post id
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
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                error: false,
            }
        case PLAY_SUCCESS:
            return {
                ...state,
                error: false,
                post: action.payload.post,
                playbackInstance: action.payload.playbackInstance,
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
                isPaused: action.payload.isPaused
            }
        case PAUSE:
            return {
                ...state,
                error: false,
                isPaused: action.payload.isPaused
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
        default:
            return state
    }
}