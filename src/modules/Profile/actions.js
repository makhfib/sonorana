import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    EDIT_PROFILE,
    SAVE_CHANGES,
    CANCEL_CHANGES
} from './types'
import InputInvalid from '../../functions/InputInvalid'
import { store } from '../'

const host = 'http://192.168.0.17:5000/'

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
export function get_profile(payload) {
    return function (dispatch) {
        dispatch({
            type: GET_PROFILE,
            payload: {
                
            }
        })

        // grab current state
        const CognitoUser = store.getState().auth.CognitoUser;

        if (CognitoUser) {
            const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

            fetch(host + 'user/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: {
                        id: token_id
                    },
                    params: {
                        u_username: payload.u_username,
                    }
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json['header']['code'] === 200) {
                        dispatch({
                            type: GET_PROFILE_SUCCESS,
                            payload: {
                                profile: json['body']
                            }
                        })

                    } else {
                        dispatch({
                            type: GET_PROFILE_ERROR,
                            payload: {
                                errorMessage: json['header']['message']
                            }
                        })
                    }
                }).catch((error) => {
                    dispatch({
                        type: GET_PROFILE_ERROR,
                        payload: {
                            errorMessage: error,
                        }
                    })
                })
        }
    }
}