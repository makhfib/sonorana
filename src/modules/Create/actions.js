import {
    SEND,
    SEND_SUCCESS,
    SEND_ERROR,
    CANCEL,
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
    DELETE_RECORDING,
    UNLOAD
} from './types'
import { Audio } from 'expo-av'
import { v4 as uuidv4 } from 'uuid';
import * as Permissions from 'expo-permissions';

async function _permission() {
    // read more https://docs.expo.io/versions/latest/sdk/permissions/
    const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
        if (status === 'granted') {
            return true;
        }
    } else {
        return true
    }
}

_onRecordingStatusUpdate = (status) => {
    return function (dispatch, getState) {
        dispatch({
            type: RECORDING_STATUS_UPDATE
        })
        if (status.durationMillis >= (getState().create.maxDuration * 60 * 1000) - 1000) {
            dispatch(
                end_recording()
            )
        }
        dispatch({
            type: RECORDING_STATUS_UPDATE_SUCCESS,
            payload: {
                playbackInstancePosition: status.durationMillis
            }
        })
    }
}

_onPlaybackStatusUpdate = (status) => {
    return function (dispatch) {
        dispatch({
            type: PLAYING_STATUS_UPDATE
        })
        if (status.isLoaded) {
            dispatch({
                type: PLAYING_STATUS_UPDATE_SUCCESS,
                payload: {
                    isPlaying: status.isPlaying,
                    playbackInstanceDuration: status.durationMillis,
                    playbackInstancePosition: status.positionMillis
                }
            })
        } else {
            dispatch({
                type: PLAYING_STATUS_UPDATE_ERROR
            })
        }
    }
}

export function unloadCreatedInstance() {
    return async function (dispatch, getState) {
        const create = getState().create;
        if (create.playbackInstance) {
            create.playbackInstance.setOnPlaybackStatusUpdate(null);
            await create.playbackInstance.unloadAsync()
            dispatch({
                type: UNLOAD,
                payload: {
                    isPlaying: false,
                    playbackInstance: null,
                    playbackInstanceDuration: null,
                    playbackInstancePosition: null,
                }
            })
        }
    }
}

export function start_recording() {
    return async function (dispatch) {
        dispatch({
            type: START_RECORDING
        })
        if (_permission) {
            const recording = new Audio.Recording()
            try {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true
                })

                recording.setOnRecordingStatusUpdate(function (status) {
                    dispatch(_onRecordingStatusUpdate(status))
                })
                recording.setProgressUpdateInterval(1000);

                await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
                dispatch({
                    type: START_RECORDING_SUCCESS,
                    payload: {
                        isRecording: true,
                        playbackInstance: null,
                        recordingInstance: recording
                    }
                })
                await recording.startAsync()

            } catch (error) {
                dispatch({
                    type: START_RECORDING_ERROR
                })
            }
        }
    }
}

export function end_recording() {
    return async function (dispatch, getState) {
        dispatch({
            type: END_RECORDING
        })

        try {
            await getState().create.recordingInstance.stopAndUnloadAsync()
            await Audio.setAudioModeAsync({ allowsRecordingIOS: false })
            const { sound, status } = await getState().create.recordingInstance.createNewLoadedSoundAsync({  }, function (status) {
                dispatch(_onPlaybackStatusUpdate(status))
            })

            dispatch({
                type: END_RECORDING_SUCCESS,
                payload: {
                    isRecording: false,
                    recordingInstance: null,
                    fileURI: status.uri,
                    playbackInstance: sound,
                }
            })

        } catch (error) {
            dispatch({
                type: END_RECORDING_ERROR
            })
        }
    }
}

export function delete_recording() {
    return async function (dispatch) {
        dispatch({
            type: DELETE_RECORDING,
        })
    }
}

export function play_pause() {
    return async function (dispatch, getState) {
        if (!getState().create.isPlaying) {
            if (!getState().create.isPaused) {
                await getState().create.playbackInstance.replayAsync()
            } else {
                await getState().create.playbackInstance.playAsync()
                dispatch({
                    type: PLAY_RECORDING
                })
            }

        } else {
            getState().create.playbackInstance.pauseAsync()
            dispatch({
                type: PAUSE_PLAYING
            })
        }
    }
}

export function edit_title(title) {
    return function (dispatch) {
        dispatch({
            type: EDIT_TITLE,
            payload: {
                title,
            }
        })
    }
}

export function send(navigation) {
    return function (dispatch) {
        dispatch({
            type: SEND
        })
        //while loading, do stuff
    }
}

export function cancel(navigation) {
    return function (dispatch) {
        dispatch({
            type: CANCEL,
            payload: {

            }
        })

        navigation.goBack()
    }
}
