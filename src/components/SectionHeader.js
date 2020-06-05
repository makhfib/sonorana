import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { colors, layout } from '../constants/Styles'

export default class SectionHeader extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: layout.inputContainerHeight,
                    paddingHorizontal: layout.paddingHorizontal,
                    backgroundColor: colors.background,
                    alignItems: 'center',
                }}
            >
                <Image
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={this.props.icon}
                />
                <Text
                    style={{
                        marginLeft: layout.paddingHorizontal/2,
                    }}
                    numberOfLines={1}
                >{this.props.title}</Text>
            </View>
        )
    }
}
