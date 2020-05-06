// Cognito User Identity Pool API Reference
// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/
export const AuthExceptionMessage = (err) => {
        console.log(err)
    switch (err.code) {
        case 'NotValidException':
            return 'Clean up your room'

        case 'UserNotConfirmedException':
            return 'User not confirmed'

        case 'PasswordResetRequiredException':
            return 'Please, reset your password' 

        case 'NotAuthorizedException':
            return 'Incorrect username or password'

        case 'UserNotFoundException':
            return 'Incorrect username or password'

        case 'CodeDeliveryFailureException':
            return 'Not able to send confirmation code'

        case 'InvalidPasswordException':
            return 'Invalid password'

        case 'UsernameExistsException':
            return 'Username taken'

        case 'UserLambdaValidationException':
            return 'Email already being used'

        case 'CodeMismatchException':
            return 'Wrong code'

        case 'ExpiredCodeException':
            return 'Expired code'

        case 'LimitExceededException':
            return 'Limit exceeded, try again later'

        case 'TooManyFailedAttemptsException':
            return 'Failed attempts exceeded, try again later'

        case 'TooManyRequestsException':
            return 'Limit exceeded, try again later'

        default:
            return 'An unexpected error happened. Please, try again later.'
    }
}