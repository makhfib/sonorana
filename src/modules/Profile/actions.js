import {
    TIMEOUT,
    LOAD_PROFILE,
    LOAD_PROFILE_ERROR,
    LOAD_PROFILE_SUCCESS,
    SAVE_CHANGES,
    SAVE_CHANGES_ERROR,
    SAVE_CHANGES_SUCCESS
} from './types'
import {
    HOST
} from 'react-native-dotenv'

export function load_profile() {
    return function (dispatch, getState) {
        const auth = getState().auth
        const profile = getState().profile
        if (auth.CognitoUser['username'] !== profile.u_username) {
            let index = Math.floor(Math.random() * 15)
            dispatch({
                type: LOAD_PROFILE,
                payload: {
                    u_username: auth.CognitoUser['username'],
                    u_photo: 'https://sonorana-assets-bucket.s3-eu-west-1.amazonaws.com/eggs/' + index + '.png',
                    u_header: null,
                    u_name: auth.CognitoUser['username'],
                    u_description: '',
                    u_website: '',
                    u_numFollowing: 0,
                    u_numFollowers: 0,
                }
            })
            fetch('http://' + HOST + '/profile', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.CognitoUser['signInUserSession']['idToken']['jwtToken']
                },
                body: JSON.stringify({
                    params: {
                        u_username: auth.CognitoUser['username']
                    }
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        dispatch({
                            type: LOAD_PROFILE_ERROR
                        })
                    }
                })
                .then((json) => {
                    dispatch({
                        type: LOAD_PROFILE_SUCCESS,
                        payload: {
                            u_name: json['u_name'],
                            u_photo: json['u_photo'],
                            u_header: json['u_header'],
                            u_description: json['u_description'],
                            u_website: json['u_website'],
                            u_numFollowing: json['u_numFollowing'],
                            u_numFollowers: json['u_numFollowers'],
                            u_posts: json['u_posts'],
                        }
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: LOAD_PROFILE_ERROR
                    })
                });
        }
    }
}

export function save_changes(profile, navigation) {
    return function (dispatch, getState) {
        dispatch({
            type: SAVE_CHANGES,
            payload: {
                loading: true,
                error: false,
                errorMessage: null,
            }
        })
        try {
            dispatch({
                type: SAVE_CHANGES_SUCCESS,
                payload: {
                    u_photo: profile.u_photo,
                    u_header: profile.u_header,
                    u_name: profile.u_name,
                    u_description: profile.u_description,
                    u_website: profile.u_website,
                    loading: false,
                    error: false,
                    errorMessage: null,
                }
            })
            navigation.goBack()
        } catch (error) {
            dispatch({
                type: SAVE_CHANGES_ERROR,
                payload: {
                    loading: false,
                    error: true,
                    errorMessage: error.message,
                }
            })
        }
    }
}