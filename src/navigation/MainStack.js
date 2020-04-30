import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'

const Stack = createStackNavigator();

export default class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='BottomTab'>
                <Stack.Screen name='BottomTab' component={BottomTab} />
            </Stack.Navigator>
        )
    }
}
