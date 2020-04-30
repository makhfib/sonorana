import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Switcher from './src/navigation'
import { createStackNavigator } from '@react-navigation/stack'

const Point = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Point.Navigator headerMode='none'>
            <Point.Screen  name='Switcher' component={Switcher} />
          </Point.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      
    )
  }
}

