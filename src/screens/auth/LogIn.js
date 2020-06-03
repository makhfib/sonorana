import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/Styles'

export default class LogIn extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.lightgray
            }}>
                <ImageBackground 
                    style={{
                        flex: 1,
                        backgroundColor: 'green',
                    }}
                    source={require('../../assets/images/linear-background.png')}
                >
                    <Text> Log In </Text>
                    
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
