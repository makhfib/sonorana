import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'

export default class Notifications extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={{
                    flex: 1, 
                }}>

                </View>
            </SafeAreaView>
        )
    }
}
