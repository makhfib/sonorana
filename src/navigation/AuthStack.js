import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../screens/auth/LogIn'
import SignUp from '../screens/auth/SignUp'
import ConfirmSignUp from '../screens/auth/ConfirmSignUp'
import ForgotPassword from '../screens/auth/ForgotPassword'
import ConfirmForgotPassword from '../screens/auth/ConfirmForgotPassword'

const Stack = createStackNavigator();

export default class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='LogIn'>
                <Stack.Screen name='LogIn' component={LogIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='ConfirmSignUp' component={ConfirmSignUp} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='ConfirmForgotPassword' component={ConfirmForgotPassword} />
            </Stack.Navigator>
        )
    }
}
