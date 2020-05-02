import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'

export default class Create extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
                <Text> textInComponent </Text>
            </SafeAreaView>
        )
    }
}
