import {
    TIMEOUT,
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
    REFRESH_FEED,
    REFRESH_FEED_SUCCESS,
    REFRESH_FEED_ERROR,
    LOAD_MORE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_ERROR
} from './types'
import {
    HOST
} from 'react-native-dotenv'

export function get_feed() {
    return function (dispatch, getState) {
        dispatch({
            type: GET_FEED
        })
        const timer = setTimeout(() => {
            dispatch({
                type: TIMEOUT
            })
        }, 15000) // timeout after 15
        fetch('http://' + HOST + '/feed', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getState().auth.CognitoUser['signInUserSession']['idToken']['jwtToken']
            },
            body: JSON.stringify({
                params: {
                    u_username: getState().auth.CognitoUser['username'],
                    skip: 0,
                }
            })
        })
            .then((response) => {
                clearTimeout(timer)
                if(response.ok) {
                    return response.json()
                } else {
                    dispatch({
                        type: GET_FEED_ERROR
                    })
                }
            })
            .then((json) => {
                dispatch({
                    type: GET_FEED_SUCCESS,
                    payload: {
                        feed: json['feed']
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_FEED_ERROR
                })
                clearTimeout(timer)
            });
    }

}

export function refresh_feed() {
    return function (dispatch, getState) {
        dispatch({
            type: REFRESH_FEED
        })
        const timer = setTimeout(() => {
            dispatch({
                type: TIMEOUT
            })
        }, 10000) // timeout after 15
        fetch('http://' + HOST + '/feed', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getState().auth.CognitoUser['signInUserSession']['idToken']['jwtToken']
            },
            body: JSON.stringify({
                params: {
                    u_username: getState().auth.CognitoUser['username'],
                    skip: 0,
                }
            })
        })
            .then((response) => {
                clearTimeout(timer)
                if(response.ok) {
                    return response.json()
                } else {
                    dispatch({
                        type: REFRESH_FEED_ERROR
                    })
                }
            })
            .then((json) => {
                dispatch({
                    type: REFRESH_FEED_SUCCESS,
                    payload: {
                        feed: json['feed']
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: REFRESH_FEED_ERROR
                })
                clearTimeout(timer)
            });
    }

}

export function load_more() {
    return function (dispatch, getState) {
        dispatch({
            type: LOAD_MORE
        })
        const timer = setTimeout(() => {
            dispatch({
                type: TIMEOUT
            })
        }, 10000) // timeout after 15
        fetch('http://' + HOST + '/feed', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getState().auth.CognitoUser['signInUserSession']['idToken']['jwtToken']
            },
            body: JSON.stringify({
                params: {
                    u_username: getState().auth.CognitoUser['username'],
                    skip: getState().feed.skip,
                }
            })
        })
            .then((response) => {
                clearTimeout(timer)
                if(response.ok) {
                    return response.json()
                } else {
                    dispatch({
                        type: LOAD_MORE_ERROR
                    })
                }
            })
            .then((json) => {
                dispatch({
                    type: LOAD_MORE_SUCCESS,
                    payload: {
                        extra: json['feed']
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOAD_MORE_ERROR
                })
                clearTimeout(timer)
            });
    }

}