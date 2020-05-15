import { Auth } from 'aws-amplify'
import {
    RESET,
    SIGNIN,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    SIGNUP,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    SIGNOUT,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    CONFIRM_SIGNUP,
    CONFIRM_SIGNUP_ERROR,
    CONFIRM_SIGNUP_SUCCESS,
    RESEND_CODE,
    RESEND_CODE_ERROR,
    RESEND_CODE_SUCCESS,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    CONFIRM_FORGOT_PASSWORD,
    CONFIRM_FORGOT_PASSWORD_ERROR,
    CONFIRM_FORGOT_PASSWORD_SUCCESS
} from './types'
import InputInvalid from '../../functions/InputInvalid'
import { get_user, get_feed } from '../Api/actions'

// Made it a private function because it is called
// in 'signIn' and 'confirmSignUp'
function _signIn(username, password, navigation) {
    return function (dispatch) {
        dispatch({
            type: SIGNIN,
            payload: {

            }
        })
        Auth.signIn({ // This takes a long time, add ActivityIndicator
            username, // Can't change this cuz AWS is so cool that won't recognize anything other than "username"
            password
        }).then((CognitoUser) => {
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: {
                    CognitoUser: CognitoUser,
                }
            })

            navigation.reset({
                routes: [{ name: 'Root' }]
            });

            dispatch(
                get_user({
                    u_username: CognitoUser['username']
                }),
                get_feed({
                    u_username: CognitoUser['username']
                })
            )

        }).catch((err) => {
            dispatch({
                type: SIGNIN_ERROR,
                payload: {
                    error: err,
                }
            })
            if (err.code === 'UserNotConfirmedException') {
                navigation.navigate('Auth', {
                    screen: 'ConfirmSignUp',
                    params: {
                        email,
                        username,
                        password
                    }
                });
            }
        });
    }
}

export function signIn(username, password, navigation) {
    return function (dispatch) {
        if (InputInvalid.isEmpty(username) || InputInvalid.isEmpty(password)) {
            dispatch({
                type: SIGNIN_ERROR,
                payload: {
                    error: { code: 'NotValidException' },
                }
            })
        } else {
            dispatch(
                _signIn(username, password, navigation)
            );
        }
    }
}

export function signOut(navigation) {
    return function (dispatch) {
        dispatch({
            type: SIGNOUT,
            payload: {
                // Empty
            }
        })
        Auth.signOut().then((data) => {
            dispatch({
                type: SIGNOUT_SUCCESS,
                payload: {
                    data,
                }
            })
            navigation.reset({
                routes: [{ name: 'Root' }]
            });
        }).catch((err) => {
            dispatch({
                type: SIGNOUT_ERROR,
                payload: {
                    error: err,
                }
            })
        });

    }
}

export function signUp(email, username, password, navigation) {
    return function (dispatch) {
        if (InputInvalid.isEmpty(email) || InputInvalid.isEmpty(username) || InputInvalid.isEmpty(password)) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: {
                    error: { code: 'NotValidException' },
                }
            })
        } else {
            dispatch({
                type: SIGNUP,
                payload: {
                    
                }
            })

            Auth.signUp({
                username,
                password,
                attributes: {
                    email
                },
                validationData: []
            }).then(() => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: {
                        
                    }
                })

                navigation.navigate('Auth', {
                    screen: 'ConfirmSignUp',
                    params: {
                        email,
                        username,
                        password,
                    }
                });

            }).catch((err) => {
                dispatch({
                    type: SIGNUP_ERROR,
                    payload: {
                        error: err,
                    }
                })
            })
        }

    }
}

export function confirmSignUp(username, password, code, navigation) {
    return function (dispatch) {
        if (InputInvalid.isEmpty(code)) {
            dispatch({
                type: CONFIRM_SIGNUP_ERROR,
                payload: {
                    error: { code: 'NotValidException' },
                }
            })
        } else {
            dispatch({
                type: CONFIRM_SIGNUP,
                payload: {
                    code
                }
            })

            Auth.confirmSignUp(username, code, {}).then((data) => {
                dispatch({
                    type: CONFIRM_SIGNUP_SUCCESS,
                    payload: {
                        data, // Isn't handled by reducer
                    }
                })

                dispatch(
                    _signIn(username, password, navigation)
                )

            }).catch((err) => {
                dispatch({
                    type: CONFIRM_SIGNUP_ERROR,
                    payload: {
                        error: err,
                    }
                })
            });
        }


    }
}

export function resendCode(username) {
    return function (dispatch) {
        dispatch({
            type: RESEND_CODE,
            payload: {
                
            }
        })

        Auth.resendSignUp(username).then((data) => {
            dispatch({
                type: RESEND_CODE_SUCCESS,
                payload: {
                    
                }
            })
        }).catch((err) => {
            dispatch({
                type: RESEND_CODE_ERROR,
                payload: {
                    error: err,
                }
            })
        });

    }
}

export function forgotPassword(username, navigation) {
    return function (dispatch) {
        if (InputInvalid.isEmpty(username)) {
            dispatch({
                type: FORGOT_PASSWORD_ERROR,
                payload: {
                    error: { code: 'NotValidException' },
                }
            })
        } else {
            dispatch({
                type: FORGOT_PASSWORD,
                payload: {
                    
                }
            })

            Auth.forgotPassword(username).then(() => {
                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: {
                        
                    }
                })

                navigation.navigate('Auth', {
                    screen: 'ConfirmResetPassword',
                    params: {
                        username
                    }
                });

            }).catch((err) => {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR,
                    payload: {
                        error: err,
                    }
                })
            });
        }

    }
}

export function forgotPasswordSubmit(username, code, newPassword, navigation) {
    return function (dispatch) {
        if (InputInvalid.isEmpty(username) || InputInvalid.isEmpty(code) || InputInvalid.isEmpty(newPassword)) {
            dispatch({
                type: CONFIRM_FORGOT_PASSWORD_ERROR,
                payload: {
                    error: { code: 'NotValidException' },
                }
            })
        } else {
            dispatch({
                type: CONFIRM_FORGOT_PASSWORD,
                payload: {
                    
                }
            })

            Auth.forgotPasswordSubmit(username, code, newPassword).then(() => {
                dispatch({
                    type: CONFIRM_FORGOT_PASSWORD_SUCCESS,
                    payload: {
                        
                    }
                })

                navigation.navigate('Auth', {
                    screen: 'LogIn',
                });

            }).catch(err => {
                dispatch({
                    type: CONFIRM_FORGOT_PASSWORD_ERROR,
                    payload: {
                        error: err,
                    }
                })
            });
        }

    }
}

export function reset() {
    return function (dispatch) {
        dispatch({
            type: RESET,
        })
    }
}