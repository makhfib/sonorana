import { store } from '../modules'
import { host } from '..'

export function get_followers(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'followers/get', {
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


