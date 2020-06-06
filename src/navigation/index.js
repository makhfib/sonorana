import React from 'react'
import Main from './MainStack'
import Auth from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Stack = createStackNavigator();

function Switcher(props) {
    
    return (
        <Stack.Navigator headerMode='none'>
            {
                props.CognitoUser ? (
                    <Stack.Screen name='Main' component={Main}/>
                ) : (
                    <Stack.Screen name='Auth' component={Auth}/>
                )
            }
        </Stack.Navigator>
    );
}

Switcher.propTypes = {
    CognitoUser: PropTypes.object,
}


const mapStateToProps = (state) => ({
    CognitoUser: state.auth.CognitoUser
})

export default connect(mapStateToProps, null)(Switcher)