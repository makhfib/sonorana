import React from 'react'
import { store, persistor } from './src/modules'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Root from './src/navigation'
import Amplify from 'aws-amplify'
import { awsconfig } from './aws-exports'

Amplify.configure(awsconfig);
const Application = createStackNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor} >
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <Application.Navigator headerMode='none'>
                                <Application.Screen name='Root' component={Root} />
                            </Application.Navigator>
                        </NavigationContainer>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }

}

/**
 * The connect() function only works in components that are inside a
 * <Provider> tag, so you can't use it in your App.js since you're
 * creating the store and providing it to App.js's children.
 * That being said, you don't need to use mapStateToProps just access
 * the state by using store.getState() and store.dispatch().
 */

/*
App.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    // state.auth comes from rootReducer
    user: state.auth.user,
});

export default connect(mapStateToProps, {})(App)
*/