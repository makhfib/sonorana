import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import Profile from '../screens/main/Profile';
import EditProfile from '../screens/main/EditProfile';
import Post from '../screens/main/Post';
import Settings from '../screens/main/Settings';
import Account from '../screens/main/settings/Account';
import Notifications from '../screens/main/settings/Notifications';
import Appearance from '../screens/main/settings/Appearance';
import Privacy from '../screens/main/settings/Privacy';
import About from '../screens/main/settings/About';
import Trending from '../screens/main/Trending';

const Stack = createStackNavigator();

export default class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='BottomTab'>
                <Stack.Screen name='BottomTab' component={BottomTab} />
                <Stack.Screen name='Trending' component={Trending} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='Post' component={Post} />
                <Stack.Screen name='Settings' component={Settings} />
                <Stack.Screen name='Account' component={Account} />
                <Stack.Screen name='Notifications' component={Notifications} />
                <Stack.Screen name='Appearance' component={Appearance} />
                <Stack.Screen name={'Privacy & Security'} component={Privacy} />
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        )
    }
}
