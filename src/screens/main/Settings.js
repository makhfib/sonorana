import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import Separator from '../../components/Separator'
import { colors, layout } from '../../constants/Styles'

export default class Settings extends React.Component {

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleLogOut() {

    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.safearea
            }}>
                <NavigationBar
                    title={'Settings'}
                    leftIconOnPress={() => this._handleBack()}
                    leftIconImage={require('../../assets/icons/left_arrow.png')}
                />
                <Separator />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this._handleLogOut()}
                    style={{
                        height: layout.inputContainerHeight,
                        paddingHorizontal: layout.paddingHorizontal,
                        backgroundColor: colors.background,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            tintColor: colors.red,
                        }}
                        source={require('../../assets/icons/poweroff.png')}
                    />
                    <Text
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            fontWeight: 'bold',
                            color: colors.red,
                        }}
                    >
                        Log Out
                    </Text>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: colors.red,
                        }}
                        source={require('../../assets/icons/right_arrow.png')}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}