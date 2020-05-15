import {
    GET_FEED,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR,
} from './types'
import { store } from '../'

const host = 'http://192.168.0.17:5000/'

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
                .then((response) => response.json() )
                .then((json) => {
                    if (json['header']['code'] === 200) {

                        dispatch({
                            type: GET_FEED_SUCCESS,
                            payload: {
                                feed: json['body']
                            }
                        })

                    } else {

                        dispatch({
                            type: GET_FEED_ERROR,
                            payload: {
                                errorMessage: json['header']['message']
                            }
                        })                        
                    }
                }).catch((error) => {
                    dispatch({
                        type: GET_FEED_ERROR,
                        payload: {
                            loading: false,
                            errorMessage: error,
                        }
                    })
                })
        }
    }
}