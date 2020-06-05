import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import Post from '../screens/main/Post';
import Record from '../screens/main/Record';
import Profile from '../screens/main/Profile';
import Settings from '../screens/main/Settings';
import EditProfile from '../screens/main/EditProfile';

const Stack = createStackNavigator();

export default class MainStack extends Component {

    render() {

        return (
            <Stack.Navigator headerMode='none' initialRouteName='Post'>
                <Stack.Screen name='BottomTab' component={BottomTab} />
                <Stack.Screen name='Post' component={Post} />
                <Stack.Screen name='Record' component={Record} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Settings' component={Settings} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
            </Stack.Navigator>
        )
    }
}