import { Linking } from 'react-native';

export function goToURL(link) {

    let modified_link = link
    if (!link.includes('https://') && !link.includes('http://')) {
        modified_link = 'http://' + link
    }
    Linking.canOpenURL(modified_link).then(supported => {
        if (supported) {
            Linking.openURL(modified_link);
        } else {
            console.log('Don\'t know how to open URI: ' + modified_link);
        }
    });
}