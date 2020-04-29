import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Switcher from './src/navigation'

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Switcher />
        </NavigationContainer>
      </SafeAreaProvider>
      
    )
  }
}

