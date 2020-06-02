import React, { Component } from 'react'
import { Image } from 'react-native'
import { colors } from '../constants/Styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/main/tab/Home'
import Search from '../screens/main/tab/Search'
import Create from '../screens/main/tab/Create'
import Profile from '../screens/main/tab/Profile'

const Tab = createBottomTabNavigator()

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='Home' tabBarOptions={{
                inactiveTintColor: colors.gray,
                activeTintColor: colors.tint,
                showLabel: false,
                tabStyle: {
                    backgroundColor: colors.background,
                }
            }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/home_selected.png')
                            : require('../assets/icons/home_default.png')
                        }
                        style={[{  width: 20, height: 20, resizeMode: 'contain' }]}
                    />)
                }} />
                <Tab.Screen name='Search' component={Search} options={{
                    tabBarIcon: ({ focused }) => (<Image
                        source={
                            require('../assets/icons/search.png')
                        }
                        style={[{ width: 20, height: 20, resizeMode: 'contain' }]}
                    />)
                }} />
                <Tab.Screen name='Create' component={Create} options={{
                    tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused 
                            ? require('../assets/icons/create_selected.png')
                            : require('../assets/icons/create_default.png')
                        }
                        style={[{ width: 20, height: 20, resizeMode: 'contain' }]}
                    />),
                    
                }} />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ focused }) => (<Image
                        source={
                            focused 
                            ? require('../assets/icons/profile_selected.png')
                            : require('../assets/icons/profile_default.png')
                        }
                        style={[{ width: 20, height: 20, resizeMode: 'contain' }]}
                    />)
                }} />
            </Tab.Navigator>
        )
    }
}
