import { store } from '../modules'
import { host } from '..'

export {
    get_post,
    create_post,
    delete_post
}

export function get_post(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'post/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: {
                    id: token_id
                },
                params: {
                    u_username_source: CognitoUser['username'],
                    u_username_target: payload.u_username
                }
            })
        })
    }

}

export function create_post(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'post/create', {
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
                    p_audio: payload.p_audio,
                    p_description: payload.p_description,
                    p_duration: payload.p_duration,
                }
            })
        })
    }

}

export function delete_post(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'post/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: {
                    id: token_id
                },
                params: {
                    p_id: payload.p_id
                }
            })
        })
    }
}