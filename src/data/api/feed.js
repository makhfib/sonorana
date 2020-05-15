import { store } from '../modules'
import { host } from '..'

export default {
    get_feed,
}

export function get_feed(payload) {
    // grab current state
    const CognitoUser = store.getState().auth.CognitoUser;

    if (CognitoUser) {
        const token_id = CognitoUser['signInUserSession']['idToken']['jwtToken']

        return fetch(host + 'feed/get', {
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