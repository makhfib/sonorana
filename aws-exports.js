import Amplify, { Auth } from 'aws-amplify';
import { 
    REGION,
    IDENTITY_POOL_ID,
    IDENTITY_POOL_REGION,
    USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID
 } from 'react-native-dotenv'

// install these packages https://github.com/zetachang/react-native-dotenv
// configure .babelrc this way https://github.com/luggit/react-native-config/issues/249

Amplify.configure({
    Auth: {
        region: REGION,
        identityPoolId: IDENTITY_POOL_ID,
        identityPoolRegion: IDENTITY_POOL_REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
        mandatorySignIn: true,
    }
});

// You can get the current config object
export const currentConfig = Auth.configure();