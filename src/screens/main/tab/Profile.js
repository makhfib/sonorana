import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CognitoProfile from '../Profile'
import { colors } from '../../../constants/Styles'

export default class Profile extends React.Component {

    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: colors.safearea
                }}
            >
                <CognitoProfile 
                    navigation={this.props.navigation}
                />
            </SafeAreaView>
        ); 
    }
}