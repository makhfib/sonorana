import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import Separator from '../../../components/Separator'
import { colors, layout } from '../../../constants/Styles'

export default class Create extends React.Component {

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.safearea
            }}>
                <NavigationBar 
                    leftIconOnPress={() => this.props.navigation.goBack()}
                    leftIconImage={require('../../../assets/icons/cancel.png')}
                    rightIconOnPress={() => this._handlePost()}
                    rightIconImage={require('../../../assets/icons/send.png')}
                />
                <Separator />
                <View
                    style={{
                        height: 30,
                        backgroundColor: colors.background
                    }}
                >

                </View>
            </SafeAreaView>
        ); 
    }
}