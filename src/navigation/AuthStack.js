import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../screens/auth/LogIn'
import SignUp from '../screens/auth/SignUp'
import ConfirmSignUp from '../screens/auth/ConfirmSignUp'
import ResetPassword from '../screens/auth/ResetPassword'
import ConfirmResetPassword from '../screens/auth/ConfirmResetPassword'

const Stack = createStackNavigator();

export default class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='LogIn'>
                <Stack.Screen name='LogIn' component={LogIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='ConfirmSignUp' component={ConfirmSignUp} />
                <Stack.Screen name='ResetPassword' component={ResetPassword} />
                <Stack.Screen name='ConfirmResetPassword' component={ConfirmResetPassword} />
            </Stack.Navigator>
        )
    }
}
