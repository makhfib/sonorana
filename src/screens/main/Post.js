import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../../constants/Styles'
import { layout } from '../../constants/Styles'
import SafeAreaView from 'react-native-safe-area-context';

export default class Post extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safe}>
                <NavigationBar
                    leftIconImage={require('../../assets/icons/cancel.png')}
                    leftIconOnPress={() => this._onBackPress()}
                    leftIconImage={require('../../assets/icons/done.png')}
                    rightIconOnPress={() => this._onRepeatPress()}
                />
                <Text> Post </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: colors.safearea,
    },
})