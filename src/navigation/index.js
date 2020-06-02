import React from 'react'
import Main from './MainStack'
import Auth from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Switcher(props) {
    
    return (
        <Stack.Navigator headerMode='none'>
            {
                true ? (
                    <Stack.Screen name='Main' component={Main}/>
                ) : (
                    <Stack.Screen name='Auth' component={Auth}/>
                )
            }
        </Stack.Navigator>
    );
}
