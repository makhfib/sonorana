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
import { Audio } from 'expo-av'

_onPlaybackStatusUpdate = (status) => {
    return function (dispatch) {
        dispatch({
            type: PLAYBACK_STATUS_UPDATE
        })
        if (status.isLoaded) {
            dispatch({
                type: PLAYBACK_STATUS_UPDATE_SUCCESS,
                payload: {
                    isPlaying: status.isPlaying,
                    isBuffering: status.isBuffering,
                    playbackInstanceDuration: status.durationMillis,
                    playbackInstancePosition: status.positionMillis
                }
            })
        } else {
            dispatch({
                type: PLAYBACK_STATUS_UPDATE_ERROR,
            })
        }
    }
}

export function unloadInstance() {
    return async function (dispatch, getState) {
        const audio = getState().audio;
        if (audio.playbackInstance) {
            audio.playbackInstance.setOnPlaybackStatusUpdate(null);
            await audio.playbackInstance.unloadAsync()
            dispatch({
                type: UNLOAD,
                payload: {
                    playbackInstance: null
                }
            })
        }
    }
}

export function play(post = {}) {
    return async function (dispatch, getState) {
        const sound = new Audio.Sound();
        dispatch({
            type: PLAY,
            payload: {
                playbackInstance: null,
            }
        })
        const audio = getState().audio;
        dispatch(unloadInstance)
        
        try {
            console.log('// LOAD AND PLAY NEW')
            await sound.loadAsync(
                { uri: post.p_audio },
                { shouldPlay: true },
                false
            );
            sound.setOnPlaybackStatusUpdate(function (status) { dispatch(_onPlaybackStatusUpdate(status)) });
            dispatch({
                type: PLAY_SUCCESS,
                payload: {
                    post,
                    isPaused: false,
                    playbackInstance: sound,
                }
            })
        } catch (error) {
            dispatch({
                type: PLAY_ERROR
            })
            console.log(error)
        }
    }
}

export function pause() {
    return function (dispatch, getState) {
        dispatch({
            type: PAUSE,
        })
        const audio = getState().audio;
        audio.playbackInstance.pauseAsync()
    }
}

export function forward() {
    return function (dispatch, getState) {
        dispatch({
            type: FORWARD
        })

        let audio = getState().audio

        audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition + 15000)
    }
}

export function backward() {
    return function (dispatch, getState) {
        dispatch({
            type: BACKWARD
        })

        let audio = getState().audio

        audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition - 15000)
    }
}

export function start_seek() {
    return function (dispatch, getState) {
        dispatch({
            type: SEEK_POSITION,
            payload: {
                isPaused: true,
                isSeeking: true,
            }
        })
    }
}

export function end_seek(position) {
    return function (dispatch, getState) {

        let audio = getState().audio

        audio.playbackInstance.setPositionAsync(position)

        dispatch({
            type: SEEK_POSITION,
            payload: {
                isPaused: !audio.isPlaying,
                isSeeking: false,
            }
        })
    }
}