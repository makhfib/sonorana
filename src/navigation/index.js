import React from 'react'
import Main from './MainStack'
import Auth from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Stack = createStackNavigator();

function switcher(props) {
    console.log(props.user)
    return (
        <Stack.Navigator headerMode='none'>
            {
                props.user ? (
                    <Stack.Screen name='Main' component={Main}/>
                ) : (
                    <Stack.Screen name='Auth' component={Auth}/>
                )
            }
        </Stack.Navigator>
    );
}

switcher.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    user: state.auth.CognitoUser,
});


export default connect(mapStateToProps, null)(switcher)
