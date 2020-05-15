import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    EDIT_PROFILE,
    SAVE_CHANGES,
    SAVE_CHANGES_SUCCESS,
    SAVE_CHANGES_ERROR,
} from './types'
import InputInvalid from '../../functions/InputInvalid'
import { store } from '../'

const host = 'http://192.168.0.17:5000/'

export function edit_profile(payload, navigation) {
    return function (dispatch) {
        dispatch({
            type: EDIT_PROFILE,
            payload: {

            }
        })

        navigation.navigate('Main', {
            screen: 'EditProfile',
            params: payload
        })
    }
}

export function save_changes(payload, navigation) {
    return function (dispatch) {
        dispatch({
            type: SAVE_CHANGES,
            payload: {

            }
        })

        const CognitoUser = store.getState().auth.CognitoUser;

        if (CognitoUser) {
            const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

            fetch(host + 'user/update', {
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
                        u_name: payload.u_name,
                        u_photo: payload.u_photo,
                        u_description: InputInvalid.isEmpty(payload.u_description) ? '' : payload.u_description,
                        u_website: InputInvalid.isEmpty(payload.u_website) ? '' : payload.u_website
                    }
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    
                    if (json['header']['code'] === 200) {

                        dispatch({
                            type: SAVE_CHANGES_SUCCESS,
                            payload: {
                                profile: json['body']
                            }
                        })
                        navigation.goBack()

                    } else {

                        dispatch({
                            type: SAVE_CHANGES_ERROR,
                            payload: {
                                errorMessage: json['header']['message']
                            }
                        })
                    }
                }).catch((error) => {
                    dispatch({
                        type: SAVE_CHANGES_ERROR,
                        payload: {
                            loading: false,
                            errorMessage: error,
                        }
                    })
                })
        }
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