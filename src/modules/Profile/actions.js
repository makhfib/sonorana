import {
    EDIT_PROFILE,
    SAVE_CHANGES,
    CANCEL_CHANGES
} from './types'
import InputInvalid from '../../functions/InputInvalid'

export function editProfile(editable, navigation) {
    return function (dispatch) {
        dispatch({
            type: EDIT_PROFILE,
            payload: {

            }
        })

        navigation.navigate('Main', {
            screen: 'EditProfile',
            params: {
                photo: editable.photo,
                name: editable.name,
                description: editable.description,
                website: editable.website
            }
        })
    }

}

export function saveChanges(editable, navigation) {
    return function (dispatch) {
        dispatch({
            type: SAVE_CHANGES,
            payload: {
                photo: editable.photo,
                name: editable.name,
                description: (InputInvalid.isEmpty(editable.description) ? null : editable.description),
                website: (InputInvalid.isEmpty(editable.website) ? null : editable.website),
            }
        })

        navigation.goBack()
    }
}

// I want to use this for the on boarding experience
export function setName(name, navigation) {
    return function (dispatch) {
        dispatch({
            type: SAVE_NAME,
            payload: {
                name,
            }
        })

        //navigation.goBack()
    }
}