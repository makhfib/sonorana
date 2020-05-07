import {
    SAVE_CHANGES,
    CANCEL_CHANGES
} from './types'
import InputInvalid from '../../functions/InputInvalid'

export function saveChanges(photo, name, description, website, navigation) {
    return function (dispatch) {
        dispatch({
            type: SAVE_CHANGES,
            payload: {
                photo,
                name,
                description,
                website
            }
        })

        navigation.goBack()
    }
}