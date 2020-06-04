import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Create extends React.Component {

    render() {
        return (
            <SafeAreaView>
                <Text>Create</Text>
                <Button
                    title={'Go back'}
                    onPress={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>
        ); 
    }
}