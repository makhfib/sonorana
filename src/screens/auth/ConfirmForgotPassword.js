import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ConfirmForgotPassword extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> Confirm Forgot Password </Text>
                <Button 
                title={'Go back'}
                onPress={() => this.props.navigation.goBack()}
                
                />
            </SafeAreaView>
        )
    }
}
