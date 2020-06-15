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
import { Audio } from 'expo-av'

function _onPlaybackStatusUpdate(status) {
    return function (dispatch, getState) {
        const audio = getState().audio
        if (status.isLoaded) {
            dispatch({
                type: UPDATE,
                payload: {
                    isPlaying: status.isPlaying ? status.isPlaying : !audio.isPaused,
                    isBuffering: status.isBuffering,
                    didJustFinish: status.didJustFinish,
                    playbackInstancePosition: status.positionMillis,
                    playbackInstanceDuration: status.durationMillis,
                }
            })
            if (status.didJustFinish) {
                audio.playbackInstance.stopAsync()
            }
        }
    }
}

export function stopPlaybackInstance() {
    return async function (dispatch, getState) {
        const audio = getState().audio
        if(audio.playbackInstance) {
            dispatch({
                type: PAUSE,
                payload: {
                    isPaused: true, // the only thing that changes is this
                }
            })
            audio.playbackInstance.stopAsync()
        }
    }
}

export function play_pause(uri) {
    return async function (dispatch, getState) {
        const audio = getState().audio
        dispatch({
            type: PROCESSING,
            payload: {
                isProcessing: true,
            }
        })
        if (audio.isPlaying && uri === audio.uri) {
            dispatch({
                type: PAUSE,
                payload: {
                    isPaused: true
                }
            })
            audio.playbackInstance.pauseAsync()
        } else if (audio.isPaused && uri === audio.uri) {
            dispatch({
                type: RESUME,
                payload: {
                    isPaused: false
                }
            })
            audio.playbackInstance.playAsync()
        } else {
            if (audio.playbackInstance) {
                audio.playbackInstance.setOnPlaybackStatusUpdate(null)
                audio.playbackInstance.stopAsync()
                dispatch({
                    type: STOP,
                    payload: {
                        uri: '', // if null it would give errors when comparing
                        playbackInstance: null,
                        isBuffering: false,
                        didJustFinish: false,
                        playbackInstancePosition: 0,
                        playbackInstanceDuration: 0,
                    }
                })
            }
            try {
                dispatch({
                    type: PLAY,
                    payload: {
                        uri,
                        isPlaying: true,
                    }
                })
                const { sound, status } = await Audio.Sound.createAsync(
                    { uri: uri },
                    { shouldPlay: true },
                    (status) => dispatch(_onPlaybackStatusUpdate(status)),
                );
                dispatch({
                    type: PLAY_SUCCESS,
                    payload: {
                        playbackInstance: sound,
                    }
                })
            } catch (error) {
                dispatch({
                    type: PLAY_ERROR,
                    payload: {
                        uri,
                        isPlaying: false,
                    }
                })
                console.log(error)
            }
        }
        dispatch({
            type: PROCESSING,
            payload: {
                isProcessing: false,
            }
        })
    }
}

export function start_seek(uri, millis) {
    return async function (dispatch, getState) {
        const audio = getState().audio
        if (audio.playbackInstance && uri === audio.uri) {
            if (audio.isPlaying) {
                dispatch({
                    type: PAUSE,
                    payload: {
                        isPaused: true
                    }
                })
                audio.playbackInstance.pauseAsync()
            }
            audio.playbackInstance.setPositionAsync(millis)
        }

    }
}

export function end_seek(uri, millis) {
    return async function (dispatch, getState) {
        const audio = getState().audio
        if (audio.playbackInstance && uri === audio.uri) {
            dispatch({
                type: RESUME,
                payload: {
                    isPaused: false
                }
            })
            try {
                await audio.playbackInstance.playFromPositionAsync(millis)
            } catch (error) {
                console.log(error)
            }

        }

    }
}

export function forward(uri) {
    return function (dispatch, getState) {
        const audio = getState().audio
        if (audio.playbackInstance && uri === audio.uri) {
            dispatch({
                type: FORWARD,
            })
            audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition+15000)
        }

    }
}

export function backward(uri) {
    return async function (dispatch, getState) {
        const audio = getState().audio
        if (audio.playbackInstance && uri === audio.uri) {
            dispatch({
                type: BACKWARD,
            })
            audio.playbackInstance.setPositionAsync(audio.playbackInstancePosition-15000)
        }

    }
}