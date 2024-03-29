import React, { Component } from 'react'
import { Image } from 'react-native'
import { colors } from '../constants/Styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/main/tab/Home'
import Search from '../screens/main/tab/Search'
import Create from '../screens/main/tab/Create'
import Profile from '../screens/main/tab/Profile'

const Tab = createBottomTabNavigator()

const iconSize = 35;

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='Home' lazy={false} tabBarOptions={{
                inactiveTintColor: colors.gray,
                activeTintColor: colors.tint,
                showLabel: false,
                tabStyle: {
                    backgroundColor: colors.background,
                },
            }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            require('../assets/icons/home.png')
                        }
                        style={[{ width: iconSize, height: iconSize, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Search' component={Search} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            require('../assets/icons/search.png')
                        }
                        style={[{ width: iconSize, height: iconSize, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
                <Tab.Screen name='Create' component={Create} options={{
                    tabBarIcon: ({ color, focused }) => (
                    <Image
                        source={
                            focused 
                            ? require('../assets/icons/create_selected.png')
                            : require('../assets/icons/create_default.png')
                        }
                        style={[{ width: iconSize, height: iconSize, resizeMode: 'contain', tintColor: color }]}
                    />),
                    tabBarVisible: false,
                    unmountOnBlur: true,
                }} />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ color, focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/profile_selected.png')
                            : require('../assets/icons/profile_default.png')
                        }
                        style={[{ width: iconSize, height: iconSize, resizeMode: 'contain', tintColor: color }]}
                    />)
                }} />
            </Tab.Navigator>
        )
    }
}
