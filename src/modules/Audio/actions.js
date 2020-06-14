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

export function play(post) {
    return async function (dispatch, getState) {
        dispatch({
            type: PLAY
        })

        let audio = getState().audio

        if (audio.isPaused && post.p_id === audio.post.p_id) {
            audio.playbackInstance.playAsync()
            dispatch({
                type: RESUME,
                payload: {
                    isPaused: false,
                }
            })
        } else if (audio.playbackInstance && !audio.isPlaying && post.p_id === audio.post.p_id) {
            audio.playbackInstance.replayAsync()
            dispatch({
                type: REPLAY
            })
        } else {
            try {
                if (audio.playbackInstance && post.p_id !== audio.post.p_id) {
                    await audio.playbackInstance.unloadAsync()
                }
                const sound = new Audio.Sound();
                sound.setOnPlaybackStatusUpdate(
                    function (status) { dispatch(_onPlaybackStatusUpdate(status)) }
                )
                await sound.loadAsync(
                    { uri: post.p_audio },
                    {},
                    false, // downloadFirst = false
                )
                await sound.playAsync()
                dispatch({
                    type: PLAY_SUCCESS,
                    payload: {
                        post,
                        playbackInstance: sound,
                    }
                })
            } catch (error) {
                dispatch({
                    type: PLAY_ERROR
                })
                console.log('error audio play')
                console.log(error)
            }
        }
    }
}

export function pause() {
    return function (dispatch, getState) {

        let audio = getState().audio

        audio.playbackInstance.pauseAsync()

        dispatch({
            type: PAUSE,
            payload: {
                isPaused: true,
            }
        })
    }
}

export function forward() {
    return function (dispatch, getState) {
        dispatch({
            type: FORWARD
        })

        let audio = getState().audio

        audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition+15000)
    }
}

export function backward() {
    return function (dispatch, getState) {
        dispatch({
            type: BACKWARD
        })
        
        let audio = getState().audio

        audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition-15000)
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