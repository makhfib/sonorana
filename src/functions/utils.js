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

export function formatTime (seconds) {
  seconds = Math.round(seconds);

  var minutes = Math.floor(seconds / 60);
  minutes = (minutes >= 10) ? minutes : "0" + minutes;

  seconds = Math.floor(seconds % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;

  return minutes + ":" + seconds;
}

export function timeSince(date) {

    var dateFormat = require('dateformat');

    date = new Date(date)
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return dateFormat(date, "mmmm d, yyyy");
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return dateFormat(date, "mmmm d, yyyy");
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return dateFormat(date, "mmmm d, yyyy");
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }