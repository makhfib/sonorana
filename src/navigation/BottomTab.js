import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/main/tab/Home'
import Notifications from '../screens/main/tab/Notifications'
import Create from '../screens/main/tab/Create'
import Chat from '../screens/main/tab/Chat'
import Profile from '../screens/main/tab/Profile'

const Tab = createBottomTabNavigator()

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='Home' tabBarOptions={{
                inactiveTintColor: Colors.default,
                activeTintColor: Colors.tint,
                showLabel: false,
                //keyboardHidesTabBar: true,
                tabStyle: {
                    backgroundColor: Colors.background,
                }
            }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/bold/home.png')
                            : require('../assets/icons/regular/home.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Notifications' component={Notifications} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/bold/notifications.png')
                            : require('../assets/icons/regular/notifications.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Create' component={Create} options={{
                    tabBarIcon: ({ color, focused }) => (
                    <Image
                        source={
                            focused 
                            ? require('../assets/icons/bold/create.png')
                            : require('../assets/icons/regular/create.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain', tintColor: color }]}
                    />),
                    
                }} />
                <Tab.Screen name='Chat' component={Chat} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/bold/messages-bubble-double.png')
                            : require('../assets/icons/regular/messages-bubble-double.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/bold/profile.png')
                            : require('../assets/icons/regular/profile.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
            </Tab.Navigator>
        )
    }
}
