import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
    GET_RESULTS,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_ERROR,
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
    GET_FOLLOWING,
    GET_FOLLOWING_SUCCESS,
    GET_FOLLOWING_ERROR,
    CREATE_FOLLOWING,
    CREATE_FOLLOWING_SUCCESS,
    CREATE_FOLLOWING_ERROR,
    DELETE_FOLLOWING,
    DELETE_FOLLOWING_SUCCESS,
    DELETE_FOLLOWING_ERROR,
    GET_FOLLOWERS,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_ERROR,
    LIKE,
    LIKE_SUCCESS,
    LIKE_ERROR,
    DISLIKE,
    DISLIKE_SUCCESS,
    DISLIKE_ERROR
} from './types'
import { store } from '../'

const host = 'http://192.168.0.17:5000/'

export function get_user(payload) {
    return function (dispatch) {
        dispatch({
            type: GET_USER,
            payload: {
                loading: true,
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
                        u_username: payload['u_username'] //payload.u_username,
                    }
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json['header']['code'] === 200) {

                        dispatch({
                            type: GET_USER_SUCCESS,
                            payload: {
                                loading: false,
                                currentUser: json['body']
                            }
                        })
                        console.log(json['body'])

                    } else {

                        dispatch({
                            type: GET_USER_ERROR,
                            payload: {
                                loading: false,
                                errorMessage: json['header']['message']
                            }
                        })
                        console.log(json['header']['message'])

                    }
                }).catch((error) => {
                    dispatch({
                        type: GET_USER_ERROR,
                        payload: {
                            loading: false,
                            errorMessage: error,
                        }
                    })
                    console.log(error)
                })
        }
    }
}

export function get_feed(payload) {
    return function (dispatch) {
        dispatch({
            type: GET_FEED,
            payload: {
                loading: true,
            }
        })

        // grab current state
        const CognitoUser = store.getState().auth.CognitoUser;

        if (CognitoUser) {

            const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

            fetch(host + 'feed/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: {
                        id: token_id
                    },
                    params: {
                        u_username: payload['u_username']
                    }
                })
            })
                .then((response) => console.log(response.json()) )//response.json())
                .then((json) => {
                    if (json['header']['code'] === 200) {

                        dispatch({
                            type: GET_FEED_SUCCESS,
                            payload: {
                                loading: false,
                                feed: json['body']
                            }
                        })
                        console.log(json['body'])

                    } else {

                        dispatch({
                            type: GET_FEED_ERROR,
                            payload: {
                                loading: false,
                                errorMessage: json['header']['message']
                            }
                        })
                        console.log(json['header']['message'])
                        
                    }
                }).catch((error) => {
                    dispatch({
                        type: GET_FEED_ERROR,
                        payload: {
                            loading: false,
                            errorMessage: error,
                        }
                    })
                    console.log(error)
                })
        }
    }
}