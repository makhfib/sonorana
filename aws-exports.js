import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'eu-west-1',
        identityPoolId: 'eu-west-1:5ddf3656-e4a3-4c78-a7e3-050e7aa8a16a',
        identityPoolRegion: 'eu-west-1',
        userPoolId: 'eu-west-1_mfmybzX9x',
        userPoolWebClientId: '4cu46iptqteg6nn7cv6p2t5ub7',
        mandatorySignIn: true,
    }
});

// You can get the current config object
export const currentConfig = Auth.configure();