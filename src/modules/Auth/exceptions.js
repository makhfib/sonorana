// Cognito User Identity Pool API Reference
// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/
export const AuthExceptionMessage = (err) => {
        console.log('----------------------------------------')
        console.log('Authentication error: ')
        console.log(err)
        console.log('----------------------------------------')
    switch (err.code) {
        case 'NotValidException':
            return 'All fields are required :/'

        case 'UserNotConfirmedException':
            return 'Please, verify your email'

        case 'PasswordResetRequiredException':
            return 'Please, reset your password' 

        case 'NotAuthorizedException':
            return 'Incorrect username or password'

        case 'UserNotFoundException':
            return 'Incorrect username or password'

        case 'CodeDeliveryFailureException':
            return 'Not able to send confirmation code' 

        case 'InvalidPasswordException':
            return 'Password must have a length >= 8 and must contain at least 1 lowercase character, 1 uppercase character, 1 number and 1 symbol'

        case 'InvalidUsernameException':
            return 'Username can only contain letters, numbers, underscore (_) and dot (.). Username must not start with a dot (.)'

        case 'UsernameExistsException':
            return 'Username exists'

        case 'UserLambdaValidationException':
            return 'Email already being used'

        case 'CodeMismatchException ':
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
            return 'An unexpected error happened,  try again later'
    }
}