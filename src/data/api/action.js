import { store } from '../modules'
import { host } from '..'

export default {
    like,
    dislike
}

export function like(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'action/like', {
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
                    p_id: payload.p_id
                }
            })
        })
    }

}

export function dislike(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'action/dislike', {
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
                    p_id: payload.p_id
                }
            })
        })
    }

}
