import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { colors } from '../constants/Styles'

export default class FloatingActivityIndicator extends Component {
    render() {
        return (
            <View
                style={{
                    marginVertical: 10,
                }}
            >
                <ActivityIndicator animating={this.props.loading} size="large" color={colors.tint} />
            </View>

        )
    }
}
