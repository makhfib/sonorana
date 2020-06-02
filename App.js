import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Root from './src/navigation'
import { AppLoading } from 'expo';

const Zero = createStackNavigator()

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;

        console.log('User: ');
        console.log(store.getState()['auth']['user']);
    }

    state = {
        dataLoaded: false,
    }

    render() {
        //const user = store.getState()['auth']['user']
        const { dataLoaded } = this.state;

        if (!dataLoaded) {
            console.log('Data not loaded');
            return (
                <AppLoading
                    onFinish={() => this.setState({dataLoaded: true})}
                />
            );
            
        }

        console.log('Data loaded');

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Zero.Navigator headerMode='none'>
                        <Zero.Screen name='Root' component={Root} />
                    </Zero.Navigator>
                </NavigationContainer>
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