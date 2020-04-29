import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='Home'>
                <Stack.Screen name='Home' component={null} />
            </Stack.Navigator>
        )
    }
}
