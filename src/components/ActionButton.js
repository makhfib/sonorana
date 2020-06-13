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
                    height: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    paddingHorizontal: 15,
                    backgroundColor: colors.tint
                }, this.props.style]}
            >
                <Image
                    style={[{
                        width: 25,
                        height: 25,
                        marginRight: 10,
                        tintColor: colors.lightgray
                    }, this.props.iconStyle]}
                    source={this.props.icon}
                />
                <Text
                    style={[{
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: colors.lightgray,
                        marginRight: 10,
                    }, this.props.textStyle]}
                >
                    {this.props.title}{' '}
                </Text>
            </TouchableOpacity>
        )
    }
}
