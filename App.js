import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Switcher from './src/navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/modules'
import Amplify from 'aws-amplify'
import { awsconfig } from './aws-exports'

const Point = createStackNavigator()
Amplify.configure(awsconfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <SafeAreaProvider>
            <NavigationContainer>
              <Point.Navigator headerMode='none'>
                <Point.Screen name='Root' component={Switcher} />
              </Point.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}

