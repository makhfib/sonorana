import { store } from '../modules'
import { host } from '..'

export function get_user(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'user/get', {
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
    }

}

export function create_user(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'user/create', {
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
                    u_description: payload.u_description,
                    u_website: payload.u_website
                }
            })
        })
    }

}

export function update_user(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'user/update', {
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
                    u_description: payload.u_description,
                    u_website: payload.u_website
                }
            })
        })
    }
}

export function delete_user(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'user/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: {
                    id: token_id
                },
                params: {
                    u_username: payload.u_username
                }
            })
        })
    }
}