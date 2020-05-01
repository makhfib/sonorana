import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class Create extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Text> textInComponent </Text>
            </SafeAreaView>
        )
    }
}
