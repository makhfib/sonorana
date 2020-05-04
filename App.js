import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Switcher from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/modules'
import Amplify from 'aws-amplify'
import { awsconfig } from './aws-exports'
import Auth from './src/modules/Auth'

const Point = createStackNavigator()
Amplify.configure(awsconfig);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Point.Navigator headerMode='none'>
              <Point.Screen name='Root' component={Switcher} />
            </Point.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>


    )
  }
}

