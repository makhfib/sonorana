import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import LogIn from './src/screens/auth/LogIn'

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
          <LogIn />
      </SafeAreaProvider>
      
    )
  }
}

