import { Linking } from 'react-native'

function goToURL(url) {
    if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
    }
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log('Don\'t know how to open URI: ' + url);
        }
    });
}

export default {
    goToURL,
}