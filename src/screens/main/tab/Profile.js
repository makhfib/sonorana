import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CognitoProfile from '../Profile'
import { colors } from '../../../constants/Styles'

export default class Profile extends React.Component {

    render() {
        return (
            <CognitoProfile
                item={{
                    u_username: 'makhfib',
                    u_name: 'Mohammed Makhfi',
                    u_photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQEy3CR_2OAw6Q/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=_YkGI9DUd9QiWFE3xLpVcif1KqOsaHnvZxmgU8WxUDw',
                    u_header: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2017%2F03%2Fvalley-16.jpg&f=1&nofb=1',
                    u_description: 'Currently building the future. ',
                    u_website: 'https://sonorana.com',
                    u_numFollowing: '31',
                    u_numFollowers: '138',
                }}
                navigation={this.props.navigation}
            />
        );
    }
}