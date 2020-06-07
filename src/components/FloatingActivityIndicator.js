import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { colors } from '../constants/Styles'

export default class FloatingActivityIndicator extends Component {
    render() {
        return (
            <View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF00' // transparent background, to disable user interaction while loading
                }}
            >
                <View
                    style={{
                        height: 100,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#00000080',
                        //borderColor: colors.tint,
                        //borderWidth: 1,
                        borderRadius: 5,
                    }}>
                    <ActivityIndicator animating={this.props.loading} size="large" color={'white'} />
                </View>
            </View>
        )
    }
}
