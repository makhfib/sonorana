import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ConfirmSignUp extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> Confirm Sign Up </Text>
                <Button 
                title={'Go back'}
                onPress={() => this.props.navigation.goBack()}
                
                />
            </SafeAreaView>
        )
    }
}
