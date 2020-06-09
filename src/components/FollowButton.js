import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ActionButton from './ActionButton'

export default class FollowButton extends Component {

    state = {
        u_following: this.props.u_following
    }

    onFollow() {
        this.props.onPress()
        this.setState({ u_following: !this.state.u_following })
    }

    render() {
        const { u_following } = this.state
        return (
            <ActionButton
                icon={u_following
                    ? require('../assets/icons/following_user.png')
                    : require('../assets/icons/follow_user.png')
                }
                title={
                    u_following
                        ? 'Following'
                        : 'Follow'
                }
                style={[{
                    width: 120,
                    backgroundColor: u_following ? colors.green : colors.blue,
                }, this.props.style]}
                onPress={() => this.onFollow()}
            />
        )
    }
}
