import { 
    REGION,
    IDENTITY_POOL_ID,
    IDENTITY_POOL_REGION,
    USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID,
    BUCKET
 } from 'react-native-dotenv'

// install these packages https://github.com/zetachang/react-native-dotenv
// configure .babelrc this way https://github.com/luggit/react-native-config/issues/249

export default {
    Auth: {
        region: REGION,
        identityPoolId: IDENTITY_POOL_ID,
        identityPoolRegion: IDENTITY_POOL_REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
        mandatorySignIn: true,
    },
    Storage: {
        AWSS3: {
            bucket: BUCKET,
            region: REGION,
        }
    }
};