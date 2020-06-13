import {
    SEND,
    SEND_SUCCESS,
    SEND_ERROR,
    CANCEL,
    CANCEL_SUCCESS,
    CANCEL_ERROR,
    START_RECORDING,
    START_RECORDING_SUCCESS,
    START_RECORDING_ERROR,
    END_RECORDING,
    END_RECORDING_SUCCESS,
    END_RECORDING_ERROR,
    RECORDING_STATUS_UPDATE,
    RECORDING_STATUS_UPDATE_SUCCESS,
    RECORDING_STATUS_UPDATE_ERROR,
    PLAYING_STATUS_UPDATE,
    PLAYING_STATUS_UPDATE_SUCCESS,
    PLAYING_STATUS_UPDATE_ERROR,
    EDIT_TITLE,
    PLAY_RECORDING,
    PAUSE_PLAYING,
    DELETE_RECORDING
} from './types'

const INITIAL_STATE = {
    title: '',
    fileURI: null,
    maxDuration: 3, //minutes
    isRecording: false,
    recordingInstance: null,
    isPaused: false,
    isPlaying: false,
    playbackInstance: null,
    playbackInstanceDuration: null,
    playbackInstancePosition: null,
    error: false,
    errorMessage: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEND:
            return {
                ...state,
                error: false,
            }
        case SEND_SUCCESS:
            return {
                ...state,
                error: false,
            }
        case SEND_ERROR:
            return {
                ...state,
                error: true,
            }
        case CANCEL:
            return {
                ...state,
                error: false,
            }
        case START_RECORDING:
            return {
                ...state,
                error: false,
            }
        case START_RECORDING_SUCCESS:
            return {
                ...state,
                isRecording: action.payload.isRecording,
                playbackInstance: action.payload.playbackInstance,
                recordingInstance: action.payload.recordingInstance,
                error: false,
            }
        case START_RECORDING_ERROR:
            return {
                ...state,
                error: true,
            }
        case END_RECORDING:
            return {
                ...state,
                error: false,
            }
        case END_RECORDING_SUCCESS:
            return {
                ...state,
                isRecording: action.payload.isRecording,
                recordingInstance: action.payload.recordingInstance,
                fileURI: action.payload.fileURI,
                playbackInstance: action.payload.playbackInstance,
                error: false,
            }
        case END_RECORDING_ERROR:
            return {
                ...state,
                error: true,
            }
        case RECORDING_STATUS_UPDATE:
            return {
                ...state,
                error: false,
            }
        case RECORDING_STATUS_UPDATE_SUCCESS:
            return {
                ...state,
                playbackInstancePosition: action.payload.playbackInstancePosition,
                error: false,
            }
        case RECORDING_STATUS_UPDATE_ERROR:
            return {
                ...state,
                error: true,
            }
        case PLAYING_STATUS_UPDATE:
            return {
                ...state,
                error: false,
            }
        case PLAYING_STATUS_UPDATE_SUCCESS:
            return {
                ...state,
                isPlaying: action.payload.isPlaying,
                playbackInstanceDuration: action.payload.playbackInstanceDuration,
                playbackInstancePosition: action.payload.playbackInstancePosition,
                error: false,
            }
        case PLAYING_STATUS_UPDATE_ERROR:
            return {
                ...state,
                error: true,
            }
        case EDIT_TITLE:
            return {
                ...state,
                title: action.payload.title,
            }
        case PLAY_RECORDING:
            return {
                ...state,
                isPaused: false,
                error: false,
            }
        case PAUSE_PLAYING:
            return {
                ...state,
                isPaused: true,
                error: false,
            }
        case DELETE_RECORDING:
            return {
                ...state,
                playbackInstance: null,
                playbackInstancePosition: 0,
                error: false,
            }
        default:
            return state
    }
}