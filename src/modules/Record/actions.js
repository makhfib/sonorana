import {
    SAVE_RECORDING,
    SAVE_RECORDING_SUCCESS,
    SAVE_RECORDING_ERROR
} from './types'
import { v4 as uuidv4 } from 'uuid';

export function save_recording(object) {
    return function (dispatch) {
        dispatch({
            type: SAVE_RECORDING
        })
        
    }
}