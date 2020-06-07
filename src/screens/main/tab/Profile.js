import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CognitoProfile from '../Profile'
import { colors } from '../../../constants/Styles'

export default class Profile extends React.Component {

    render() {
        return (
            <CognitoProfile
                item={{
                    u_username: 'freshlygrounded',
                    u_name: 'Freshly Grounded',
                    u_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic128%2Fv4%2Fc9%2F6a%2F40%2Fc96a40d4-bb93-9bed-c9a6-8519cca482c7%2Fsource%2F1200x630bb.jpg&f=1&nofb=1',
                    u_header: 'https://freshlygrounded.com/wp-content/uploads/2020/02/5M3A0725.jpg',
                    u_description: 'Currently building the future. ',
                    u_website: 'https://freshlygrounded.com',
                    u_numFollowing: '31',
                    u_numFollowers: '138',
                }}
                navigation={this.props.navigation}
            />
        );
    }
}