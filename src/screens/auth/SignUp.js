import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> Sign Up </Text>
                <Button 
                title={'Go back'}
                onPress={() => this.props.navigation.goBack()}
                
                />
                <Button 
                title={'Confirm'}
                onPress={() => this.props.navigation.navigate('ConfirmSignUp')}
                
                />
            </SafeAreaView>
        )
    }
}
