import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import Styles from '../constants/Styles'
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
                keyboardHidesTabBar: true,
                
            }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color }) => (<Image
                        source={require('../assets/icons/navigation/home.png')}
                        style={[Styles.icon, { tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Notifications' component={Notifications} options={{
                    tabBarIcon: ({ color }) => (<Image
                        source={require('../assets/icons/navigation/notifications.png')}
                        style={[Styles.icon, { tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Create' component={Create} options={{
                    tabBarIcon: ({ color }) => (
                    <Image
                        source={require('../assets/icons/navigation/create.png')}
                        style={[Styles.icon, { tintColor: color }]}
                    />),
                    
                }} />
                <Tab.Screen name='Chat' component={Chat} options={{
                    tabBarIcon: ({ color }) => (<Image
                        source={require('../assets/icons/navigation/chat.png')}
                        style={[Styles.icon, { tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ color }) => (<Image
                        source={require('../assets/icons/navigation/profile.png')}
                        style={[Styles.icon, { tintColor: color }]}
                    />)
                }} />
            </Tab.Navigator>
        )
    }
}
