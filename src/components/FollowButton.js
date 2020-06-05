import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class FollowButton extends Component {

    state = {
        u_following: this.props.u_following
    }

    onFollow() {
        this.setState({ u_following: !this.state.u_following })
    }

    render() {
        const { u_following } = this.state
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.onFollow()}
                style={{
                    width: 120,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: u_following ? colors.green : colors.blue,
                }}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: colors.lightgray
                    }}
                    source={u_following
                        ? require('../assets/icons/following_user.png')
                        : require('../assets/icons/follow_user.png')
                    }
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: colors.lightgray
                    }}
                >
                    {
                        u_following
                            ? 'Following'
                            : 'Follow'
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}
