import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../screens/auth/LogIn'
import SignUp from '../screens/auth/SignUp'

const Stack = createStackNavigator();

export default class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='LogIn'>
                <Stack.Screen name='LogIn' component={LogIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        )
    }
}
