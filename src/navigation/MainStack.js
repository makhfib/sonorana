import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import Create from '../screens/main/tab/Create';
import User from '../screens/main/User';
import Post from '../screens/main/Post';

const Stack = createStackNavigator();

export default class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='BottomTab'>
                <Stack.Screen name='BottomTab' component={BottomTab} />
                <Stack.Screen name='User' component={User} />
                <Stack.Screen name='Post' component={Post} />
            </Stack.Navigator>
        )
    }
}
