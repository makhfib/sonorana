import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class FollowButton extends Component {

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.onPress()}
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                }, this.props.style]}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        tintColor: colors.lightgray
                    }}
                    source={this.props.icon}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: colors.lightgray
                    }}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}
